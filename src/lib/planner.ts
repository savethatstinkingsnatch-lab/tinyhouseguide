import type { PlanInput } from "@/lib/store";

const GPD = { careful: 8, typical: 14, generous: 22 } as const;
const DELTA = { mild: 30, mixed: 45, cold: 60, severe: 75 } as const;
const SUN = { mild: 4.5, mixed: 4, cold: 3, severe: 2.5 } as const;
const TANK_SIZES = [20, 30, 40, 55, 80, 100, 150];
const BLACK_SIZES = [15, 20, 30, 40];
const HEATER_SIZES = [5000, 8000, 12000, 18000, 24000];

export type PlanNote = { level: "note" | "stop"; text: string };

export type PlanResult = {
  area: number;
  btu: number;
  heaterSize: number;
  delta: number;
  freshGal: number;
  freshLabel: string;
  greyLabel: string;
  blackLabel: string;
  waterWeightLb: number;
  hotWater: string;
  panel: string;
  spaces: string;
  circuits: { name: string; spec: string }[];
  solar: {
    dailyKwh: number;
    arrayW: number;
    batteryAh: number;
    inverter: string;
    sun: number;
  } | null;
  notes: PlanNote[];
  assumptions: string;
};

function roundUp(value: number, sizes: number[]): number {
  return sizes.find((size) => size >= value) ?? sizes[sizes.length - 1] ?? value;
}

export function planHouse(input: PlanInput): PlanResult {
  const area = input.lengthFt * input.widthFt;
  const perimeter = 2 * (input.lengthFt + input.widthFt);
  const windowArea = Math.max(12, area * 0.15);
  const wallArea = Math.max(0, perimeter * 8 - windowArea);
  const roofArea = area * (input.loft ? 1.15 : 1);
  const volume = area * 8 + (input.loft ? area * 0.5 * 3.5 : 0);
  const wallU = 1 / 11;
  const ua =
    wallArea * wallU +
    area * (1 / 20) +
    roofArea * (1 / 30) +
    windowArea * 0.33 +
    volume * 0.5 * 0.018;
  const delta = DELTA[input.climate];
  const btu = Math.round(ua * delta * 1.35);
  const heaterSize = roundUp(btu, HEATER_SIZES);

  const dailyGal = GPD[input.use] * input.people;
  const wantedFresh = dailyGal * input.days;
  const freshGal =
    input.water === "hookup" ? 20 : roundUp(wantedFresh, TANK_SIZES);
  const freshOver = input.water === "tanks" && wantedFresh > 150;
  const freshLabel =
    input.water === "hookup"
      ? "20 gal buffer on a regulated hose bibb"
      : freshOver
        ? "150 gal is the sketch cap — refill sooner"
        : `${freshGal} gal fresh`;

  const greyNeed =
    input.water === "hookup"
      ? 0
      : dailyGal * input.days * (input.toilet === "black" ? 0.7 : 0.9);
  const greyLabel =
    input.water === "hookup"
      ? "Dump to a sewer. Carry grey only if you also boondock."
      : `${roundUp(greyNeed, TANK_SIZES)} gal grey`;

  const blackLabel =
    input.toilet === "compost"
      ? "No black tank. Empty solids every couple of weeks, liquids much sooner."
      : input.toilet === "cassette"
        ? "A 5 gal cassette. Plan a dump every few days for two people."
        : `${roundUp(input.people * 2 * input.days, BLACK_SIZES)} gal black tank`;

  const greyGal = input.water === "hookup" ? 0 : roundUp(greyNeed, TANK_SIZES);
  const blackGal =
    input.toilet === "black" ? roundUp(input.people * 2 * input.days, BLACK_SIZES) : 0;
  const waterWeightLb = Math.round((freshGal + greyGal + blackGal) * 8.3);

  let hotWater =
    "Direct-vent propane tankless, matched to the showerhead. Skip electric tankless.";
  if (input.power === "shore50" && input.heat !== "propane" && input.heat !== "diesel") {
    hotWater =
      "A 6 gal electric tank on its own 15 A circuit is reasonable. Propane tankless still wins if you already haul propane.";
  }
  if (input.power === "shore30" && input.heat === "electric") {
    hotWater =
      "Prefer propane tankless. A 6 gal electric tank only works if it never runs beside the heater and the microwave.";
  }
  if (input.power === "offgrid") {
    hotWater =
      "Propane tankless. Electric water heat will dominate a small battery before lunch.";
  }

  const panel =
    input.power === "shore30"
      ? "30 A, 120 V inlet. About 2,900 W continuous is the life you should plan."
      : input.power === "shore50"
        ? "50 A, 120/240 V. Room for a mini-split and a small electric tank — still not a range plus tankless electric."
        : "Inverter-fed subpanel if you want 120 V outlets. Bond it the way the inverter manual says, not the way a house meter is bonded.";

  const circuits: { name: string; spec: string }[] = [
    { name: "Lights", spec: "15 A · 14 AWG copper" },
    { name: "Receptacles", spec: "20 A · 12 AWG copper" },
    { name: "Kitchen", spec: "20 A GFCI · 12 AWG" },
    { name: "Bath", spec: "20 A GFCI · 12 AWG" },
  ];
  if (input.water === "tanks") {
    circuits.push({
      name: "Pump",
      spec: "12 V DC with a fuse, not an AC breaker, if you can buy it that way",
    });
  }
  if (input.heat === "minisplit") {
    circuits.push({
      name: "Mini-split",
      spec: "Dedicated 15–20 A. Read the nameplate — many small units are 120 V.",
    });
  } else if (input.heat === "electric") {
    circuits.push({
      name: "Resistance heat",
      spec: "15 A for a single 1,500 W heater. That is half of a 30 A cord.",
    });
  } else {
    circuits.push({
      name: "Heater controls",
      spec: "15 A for the fan, or a fused 12 V pair if the unit is DC",
    });
  }
  if (input.power === "shore50" && input.heat !== "propane" && input.heat !== "diesel" && input.heat !== "wood") {
    circuits.push({ name: "Water heater", spec: "15 A · 14 AWG, 6 gal tank" });
  }
  if (input.water === "tanks" && (input.climate === "cold" || input.climate === "severe")) {
    circuits.push({
      name: "Heat cable",
      spec: "GFCI 15 A, self-regulating cable, thermostat — not constant-wattage in foam",
    });
  }

  const spaces =
    circuits.length <= 6
      ? "Buy 8 spaces anyway. The next circuit should not mean a new panel."
      : "Buy 12 spaces. A 6-space panel is how tiny houses end up with double-taps.";

  let solar: PlanResult["solar"] = null;
  if (input.power === "offgrid") {
    let dailyKwh = 0.35 + 0.2 + 0.35 * input.people + 0.8;
    if (input.water === "tanks") dailyKwh += 0.15;
    if (input.heat === "propane" || input.heat === "diesel" || input.heat === "wood") dailyKwh += 0.4;
    if (input.heat === "minisplit") {
      dailyKwh += { mild: 3, mixed: 6, cold: 11, severe: 16 }[input.climate];
    }
    if (input.heat === "electric") dailyKwh += (btu / 3412) * 6;
    const sun = SUN[input.climate];
    const arrayW = Math.ceil(dailyKwh / sun / 0.75 / 100) * 100;
    const batteryAh = Math.ceil((dailyKwh * 1000 * 2) / 0.8 / 12 / 50) * 50;
    solar = {
      dailyKwh: Math.round(dailyKwh * 10) / 10,
      arrayW,
      batteryAh,
      inverter: input.heat === "minisplit" || input.heat === "electric" ? "3,000 W pure sine" : "2,000 W pure sine",
      sun,
    };
  }

  const notes: PlanNote[] = [];
  if (input.heat === "electric" && input.power === "offgrid") {
    notes.push({
      level: "stop",
      text: "Resistance heat will empty a tiny-house battery before bedtime. Heat with propane, diesel, or a heat pump, and keep electric heat as a backup you only run on shore power.",
    });
  }
  if (input.heat === "electric" && input.power === "shore30") {
    notes.push({
      level: "stop",
      text: "A 1,500 W heater is already half of a 30 A cord. You can heat or you can cook, not both for long. Step up to 50 A, or heat with fuel.",
    });
  }
  if (input.heat === "wood") {
    notes.push({
      level: "note",
      text: "A wood stove needs the manual’s clearances, a hearth, and a chimney that survives travel if you are on a trailer. Insurers often say no. The case is stronger on a foundation.",
    });
  }
  if (input.heat === "minisplit" && input.power === "offgrid" && (input.climate === "cold" || input.climate === "severe")) {
    notes.push({
      level: "stop",
      text: "Winter heat-pump load is the whole solar budget and then some. Treat the array as a sketch, and keep a fuel heater for the dark week.",
    });
  }
  if (input.heat === "minisplit" && input.power === "shore30") {
    notes.push({
      level: "note",
      text: "A small 120 V mini-split can live on 30 A if the rest of the house stays modest. Read the minimum circuit ampacity on the nameplate before you buy the breaker.",
    });
  }
  if (input.heat === "propane" || input.heat === "diesel") {
    notes.push({
      level: "note",
      text: "Sleeping space gets sealed combustion only. Unvented cabinet heaters are for when you are awake. A CO alarm is part of the heater, not a nicety.",
    });
  }
  if (freshGal >= 80 || waterWeightLb >= 800) {
    notes.push({
      level: "note",
      text: `Full tanks are about ${waterWeightLb.toLocaleString()} lb. You will rarely have fresh and grey full together, but the trailer and the axles still have to be told the truth.`,
    });
  }
  if (input.toilet === "compost" && (input.climate === "cold" || input.climate === "severe")) {
    notes.push({
      level: "note",
      text: "Keep the composting toilet inside the heated envelope. The liquids bottle and the vent fan are what freeze, not the lid.",
    });
  }
  if (input.water === "tanks" && (input.climate === "cold" || input.climate === "severe")) {
    notes.push({
      level: "note",
      text: "Cold climates want the tanks inside the belly insulation, or self-regulating heat cable on a GFCI. Decide that before the belly pan is riveted on.",
    });
  }
  if (freshOver) {
    notes.push({
      level: "note",
      text: "That water budget is a delivery truck. Carry fewer days or shower like you mean it. Tiny-house tanks top out well before the math does.",
    });
  }

  const assumptions = `${area} sq ft, effective R-11 walls after bridging, R-20 belly, R-30 roof, windows near 15% of the floor, half an air change an hour, a ${delta}°F design gap, then a 1.35 factor because trailers are draftier than textbooks. A belly you can see daylight through can still beat this number.`;

  return {
    area,
    btu,
    heaterSize,
    delta,
    freshGal,
    freshLabel,
    greyLabel,
    blackLabel,
    waterWeightLb,
    hotWater,
    panel,
    spaces,
    circuits,
    solar,
    notes,
    assumptions,
  };
}
