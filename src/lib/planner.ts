import type { PlanInput } from "@/lib/store";

const GPD = { careful: 8, typical: 14, generous: 22 } as const;
const DELTA = { mild: 30, mixed: 45, cold: 60, severe: 75 } as const;
const SUN = { mild: 4.5, mixed: 4, cold: 3, severe: 2.5 } as const;
const TANK_SIZES = [20, 30, 40, 55, 80, 100, 150];
const BLACK_SIZES = [15, 20, 30, 40];

export type PlanNote = { level: "note" | "stop"; text: string };

export type TankSketch = {
  demandGal: number;
  listedGal: number | null;
  over: boolean;
  label: string;
};

export type PlanResult = {
  area: number;
  btu: number;
  delta: number;
  fresh: TankSketch;
  grey: TankSketch;
  black: TankSketch;
  tanksOver: boolean;
  waterWeightLb: number;
  weightNote: string;
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

function coveringSize(demand: number, sizes: number[]): { listed: number | null; over: boolean } {
  const listed = sizes.find((size) => size >= demand);
  return listed == null ? { listed: null, over: true } : { listed, over: false };
}

function tankSketch(name: string, demand: number, sizes: number[]): TankSketch {
  const rounded = Math.max(0, Math.round(demand));
  const max = sizes[sizes.length - 1] ?? 0;
  const { listed, over } = coveringSize(rounded, sizes);
  if (over) {
    return {
      demandGal: rounded,
      listedGal: null,
      over: true,
      label: `Calculated demand is about ${rounded.toLocaleString()} gal. The largest ${name} size in this sketch is ${max} gal, and it does not cover that demand. Do not treat ${max} gal, or the weight of a ${max} gal tank, as the design.`,
    };
  }
  return {
    demandGal: rounded,
    listedGal: listed,
    over: false,
    label: `Calculated demand is about ${rounded.toLocaleString()} gal. A listed size in this sketch that covers it: ${listed} gal. The list is an illustration, not a catalog and not a specification.`,
  };
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

  const dailyGal = GPD[input.use] * input.people;
  const wantedFresh = dailyGal * input.days;
  const fresh =
    input.water === "hookup"
      ? {
          demandGal: 20,
          listedGal: 20,
          over: false,
          label:
            "A 20 gal buffer on a regulated hose is an illustration, not a required tank. You still need a legal place for the drain water.",
        }
      : tankSketch("fresh", wantedFresh, TANK_SIZES);

  const greyNeed =
    input.water === "hookup" ? 0 : dailyGal * input.days * (input.toilet === "black" ? 0.7 : 0.9);
  const grey =
    input.water === "hookup"
      ? {
          demandGal: 0,
          listedGal: null,
          over: false,
          label: "Hooked up, grey water goes to a legal sewer or septic, not into a tank this sketch sizes.",
        }
      : tankSketch("grey", greyNeed, TANK_SIZES);

  const blackNeed = input.people * 2 * input.days;
  const black: TankSketch =
    input.toilet === "compost"
      ? {
          demandGal: 0,
          listedGal: null,
          over: false,
          label:
            "No black tank with a composting toilet. Solids and liquids still have emptying rules. Ask the health department.",
        }
      : input.toilet === "cassette"
        ? {
            demandGal: 0,
            listedGal: null,
            over: false,
            label:
              "A cassette is a small holding tank you carry to a dump station, often around 5 gal. This sketch does not size it. Empty it before it is full.",
          }
        : tankSketch("black", blackNeed, BLACK_SIZES);

  const tanksOver = fresh.over || grey.over || black.over;
  const weightGallons =
    (fresh.over ? fresh.demandGal : (fresh.listedGal ?? 0)) +
    (grey.over ? grey.demandGal : (grey.listedGal ?? 0)) +
    (black.over ? black.demandGal : (black.listedGal ?? 0));
  const waterWeightLb = Math.round(weightGallons * 8.3);
  const weightNote = tanksOver
    ? "This weight uses the calculated gallons wherever a tank is past the sketch’s list, so a capped preset is not pretending to be the design. It is still only water. It is not a loaded trailer weight, an axle load, a tongue weight, or a tow rating."
    : "Weight if those listed tanks were full, at about 8.3 lb a gallon. You will rarely have fresh and grey full together. This is not a loaded trailer weight and not a towing-capacity assessment.";

  let hotWater =
    "Direct-vent propane tankless is a common match for a tiny house. Match it to the showerhead using that heater’s manual. Skip a whole-house electric tankless unless the nameplate fits the service you actually have.";
  if (input.power === "shore50" && input.heat !== "propane" && input.heat !== "diesel") {
    hotWater =
      "A small electric storage tank can work on a 50 A service if its nameplate fits beside the other loads. Do not assume a 15 A / 14 AWG circuit. Propane tankless is still the usual choice if you already haul propane.";
  }
  if (input.power === "shore30" && input.heat === "electric") {
    hotWater =
      "A 30 A cord is a small budget. Prefer a propane tankless. An electric tank only belongs if its nameplate, plus the heater and the cooktop, still fit. Do not assume a generic 15 A circuit.";
  }
  if (input.power === "offgrid") {
    hotWater =
      "Propane tankless. Electric water heat will dominate a small battery before lunch. This is not an off-grid electrical design.";
  }

  const panel =
    input.power === "shore30"
      ? "30 A, 120 V inlet. About 2,900 W continuous is the life you should plan."
      : input.power === "shore50"
        ? "50 A, 120/240 V. Room for a mini-split and a small electric tank — still not a range plus tankless electric."
        : "Inverter-fed subpanel if you want 120 V outlets. Bond it the way the inverter manual says, not the way a house meter is bonded.";

  const circuits: { name: string; spec: string }[] = [
    {
      name: "Lights",
      spec: "Its own circuit. The breaker and the wire come from the adopted code and a qualified electrician, not from a generic 15 A line.",
    },
    {
      name: "Receptacles",
      spec: "A general circuit, separate from the kitchen and the bath. Gauge is a design, not a guess.",
    },
    {
      name: "Kitchen",
      spec: "Leave room for GFCI where wet-room rules require it. Size the circuit from the appliance nameplates.",
    },
    {
      name: "Bath",
      spec: "Leave room for GFCI. Read the fan nameplate, and any heater nameplate, before anyone picks a breaker.",
    },
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
      spec: "A dedicated circuit. Read the minimum circuit ampacity on the nameplate before anyone picks a breaker.",
    });
  } else if (input.heat === "electric") {
    circuits.push({
      name: "Resistance heat",
      spec: "A 1,500 W heater is about 12.5 A, already half of a 30 A cord. The breaker and the wire still come from that unit’s nameplate, not from this sentence.",
    });
  } else {
    circuits.push({
      name: "Heater controls",
      spec: "A small circuit for the fan, or a fused 12 V pair if the unit is DC. Take the amps from the manual.",
    });
  }
  if (input.power === "shore50" && input.heat !== "propane" && input.heat !== "diesel" && input.heat !== "wood") {
    circuits.push({
      name: "Water heater",
      spec: "Only if the nameplate fits the service. Do not assume a 15 A / 14 AWG circuit is enough for a small tank.",
    });
  }
  if (input.water === "tanks" && (input.climate === "cold" || input.climate === "severe")) {
    circuits.push({
      name: "Heat cable",
      spec: "GFCI protection for self-regulating cable, on a thermostat — not constant-wattage buried in foam. The breaker comes from the cable’s listing.",
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
      inverter:
        input.heat === "minisplit" || input.heat === "electric"
          ? "Example only: a 3,000 W pure-sine inverter, not a specified one"
          : "Example only: a 2,000 W pure-sine inverter, not a specified one",
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
  if ((fresh.listedGal != null && fresh.listedGal >= 80) || waterWeightLb >= 800) {
    notes.push({
      level: "note",
      text: `Water in this sketch is about ${waterWeightLb.toLocaleString()} lb. ${weightNote}`,
    });
  }
  if (tanksOver) {
    notes.push({
      level: "stop",
      text: "At least one tank is past the sizes this sketch lists. The calculated demand is the number that matters. A capped preset is not a recommendation, and its weight is not the design weight.",
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
  const assumptions = `${area} sq ft. The sketch assumes about R-11 walls after bridging, R-20 in the belly, R-30 in the roof, windows near 15% of the floor, about half an air change an hour, a ${delta}°F gap, then a 1.35 factor. Choosing a climate here does not set the design temperature for your town, and these assumptions are not a measurement of the finished house. This is not a Manual J or any other recognized load calculation. Do not buy a heater from it.`;

  return {
    area,
    btu,
    delta,
    fresh,
    grey,
    black,
    tanksOver,
    waterWeightLb,
    weightNote,
    hotWater,
    panel,
    spaces,
    circuits,
    solar,
    notes,
    assumptions,
  };
}
