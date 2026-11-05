import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn, r as useGuideStore } from "./router-NB6mE9bN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planner-BB7tKAfg.js
var import_jsx_runtime = require_jsx_runtime();
var GPD = {
	careful: 8,
	typical: 14,
	generous: 22
};
var DELTA = {
	mild: 30,
	mixed: 45,
	cold: 60,
	severe: 75
};
var SUN = {
	mild: 4.5,
	mixed: 4,
	cold: 3,
	severe: 2.5
};
var TANK_SIZES = [
	20,
	30,
	40,
	55,
	80,
	100,
	150
];
var BLACK_SIZES = [
	15,
	20,
	30,
	40
];
var HEATER_SIZES = [
	5e3,
	8e3,
	12e3,
	18e3,
	24e3
];
function roundUp(value, sizes) {
	return sizes.find((size) => size >= value) ?? sizes[sizes.length - 1] ?? value;
}
function planHouse(input) {
	const area = input.lengthFt * input.widthFt;
	const perimeter = 2 * (input.lengthFt + input.widthFt);
	const windowArea = Math.max(12, area * .15);
	const wallArea = Math.max(0, perimeter * 8 - windowArea);
	const roofArea = area * (input.loft ? 1.15 : 1);
	const volume = area * 8 + (input.loft ? area * .5 * 3.5 : 0);
	const ua = wallArea * (1 / 11) + area * (1 / 20) + roofArea * (1 / 30) + windowArea * .33 + volume * .5 * .018;
	const delta = DELTA[input.climate];
	const btu = Math.round(ua * delta * 1.35);
	const heaterSize = roundUp(btu, HEATER_SIZES);
	const dailyGal = GPD[input.use] * input.people;
	const wantedFresh = dailyGal * input.days;
	const freshGal = input.water === "hookup" ? 20 : roundUp(wantedFresh, TANK_SIZES);
	const freshOver = input.water === "tanks" && wantedFresh > 150;
	const freshLabel = input.water === "hookup" ? "20 gal buffer on a regulated hose bibb" : freshOver ? "150 gal is the sketch cap — refill sooner" : `${freshGal} gal fresh`;
	const greyNeed = input.water === "hookup" ? 0 : dailyGal * input.days * (input.toilet === "black" ? .7 : .9);
	const greyLabel = input.water === "hookup" ? "Dump to a sewer. Carry grey only if you also boondock." : `${roundUp(greyNeed, TANK_SIZES)} gal grey`;
	const blackLabel = input.toilet === "compost" ? "No black tank. Empty solids every couple of weeks, liquids much sooner." : input.toilet === "cassette" ? "A 5 gal cassette. Plan a dump every few days for two people." : `${roundUp(input.people * 2 * input.days, BLACK_SIZES)} gal black tank`;
	const greyGal = input.water === "hookup" ? 0 : roundUp(greyNeed, TANK_SIZES);
	const blackGal = input.toilet === "black" ? roundUp(input.people * 2 * input.days, BLACK_SIZES) : 0;
	const waterWeightLb = Math.round((freshGal + greyGal + blackGal) * 8.3);
	let hotWater = "Direct-vent propane tankless, matched to the showerhead. Skip electric tankless.";
	if (input.power === "shore50" && input.heat !== "propane" && input.heat !== "diesel") hotWater = "A 6 gal electric tank on its own 15 A circuit is reasonable. Propane tankless still wins if you already haul propane.";
	if (input.power === "shore30" && input.heat === "electric") hotWater = "Prefer propane tankless. A 6 gal electric tank only works if it never runs beside the heater and the microwave.";
	if (input.power === "offgrid") hotWater = "Propane tankless. Electric water heat will dominate a small battery before lunch.";
	const panel = input.power === "shore30" ? "30 A, 120 V inlet. About 2,900 W continuous is the life you should plan." : input.power === "shore50" ? "50 A, 120/240 V. Room for a mini-split and a small electric tank — still not a range plus tankless electric." : "Inverter-fed subpanel if you want 120 V outlets. Bond it the way the inverter manual says, not the way a house meter is bonded.";
	const circuits = [
		{
			name: "Lights",
			spec: "15 A · 14 AWG copper"
		},
		{
			name: "Receptacles",
			spec: "20 A · 12 AWG copper"
		},
		{
			name: "Kitchen",
			spec: "20 A GFCI · 12 AWG"
		},
		{
			name: "Bath",
			spec: "20 A GFCI · 12 AWG"
		}
	];
	if (input.water === "tanks") circuits.push({
		name: "Pump",
		spec: "12 V DC with a fuse, not an AC breaker, if you can buy it that way"
	});
	if (input.heat === "minisplit") circuits.push({
		name: "Mini-split",
		spec: "Dedicated 15–20 A. Read the nameplate — many small units are 120 V."
	});
	else if (input.heat === "electric") circuits.push({
		name: "Resistance heat",
		spec: "15 A for a single 1,500 W heater. That is half of a 30 A cord."
	});
	else circuits.push({
		name: "Heater controls",
		spec: "15 A for the fan, or a fused 12 V pair if the unit is DC"
	});
	if (input.power === "shore50" && input.heat !== "propane" && input.heat !== "diesel" && input.heat !== "wood") circuits.push({
		name: "Water heater",
		spec: "15 A · 14 AWG, 6 gal tank"
	});
	if (input.water === "tanks" && (input.climate === "cold" || input.climate === "severe")) circuits.push({
		name: "Heat cable",
		spec: "GFCI 15 A, self-regulating cable, thermostat — not constant-wattage in foam"
	});
	const spaces = circuits.length <= 6 ? "Buy 8 spaces anyway. The next circuit should not mean a new panel." : "Buy 12 spaces. A 6-space panel is how tiny houses end up with double-taps.";
	let solar = null;
	if (input.power === "offgrid") {
		let dailyKwh = .55 + .35 * input.people + .8;
		if (input.water === "tanks") dailyKwh += .15;
		if (input.heat === "propane" || input.heat === "diesel" || input.heat === "wood") dailyKwh += .4;
		if (input.heat === "minisplit") dailyKwh += {
			mild: 3,
			mixed: 6,
			cold: 11,
			severe: 16
		}[input.climate];
		if (input.heat === "electric") dailyKwh += btu / 3412 * 6;
		const sun = SUN[input.climate];
		const arrayW = Math.ceil(dailyKwh / sun / .75 / 100) * 100;
		const batteryAh = Math.ceil(dailyKwh * 1e3 * 2 / .8 / 12 / 50) * 50;
		solar = {
			dailyKwh: Math.round(dailyKwh * 10) / 10,
			arrayW,
			batteryAh,
			inverter: input.heat === "minisplit" || input.heat === "electric" ? "3,000 W pure sine" : "2,000 W pure sine",
			sun
		};
	}
	const notes = [];
	if (input.heat === "electric" && input.power === "offgrid") notes.push({
		level: "stop",
		text: "Resistance heat will empty a tiny-house battery before bedtime. Heat with propane, diesel, or a heat pump, and keep electric heat as a backup you only run on shore power."
	});
	if (input.heat === "electric" && input.power === "shore30") notes.push({
		level: "stop",
		text: "A 1,500 W heater is already half of a 30 A cord. You can heat or you can cook, not both for long. Step up to 50 A, or heat with fuel."
	});
	if (input.heat === "wood") notes.push({
		level: "note",
		text: "A wood stove needs the manual’s clearances, a hearth, and a chimney that survives travel if you are on a trailer. Insurers often say no. The case is stronger on a foundation."
	});
	if (input.heat === "minisplit" && input.power === "offgrid" && (input.climate === "cold" || input.climate === "severe")) notes.push({
		level: "stop",
		text: "Winter heat-pump load is the whole solar budget and then some. Treat the array as a sketch, and keep a fuel heater for the dark week."
	});
	if (input.heat === "minisplit" && input.power === "shore30") notes.push({
		level: "note",
		text: "A small 120 V mini-split can live on 30 A if the rest of the house stays modest. Read the minimum circuit ampacity on the nameplate before you buy the breaker."
	});
	if (input.heat === "propane" || input.heat === "diesel") notes.push({
		level: "note",
		text: "Sleeping space gets sealed combustion only. Unvented cabinet heaters are for when you are awake. A CO alarm is part of the heater, not a nicety."
	});
	if (freshGal >= 80 || waterWeightLb >= 800) notes.push({
		level: "note",
		text: `Full tanks are about ${waterWeightLb.toLocaleString()} lb. You will rarely have fresh and grey full together, but the trailer and the axles still have to be told the truth.`
	});
	if (input.toilet === "compost" && (input.climate === "cold" || input.climate === "severe")) notes.push({
		level: "note",
		text: "Keep the composting toilet inside the heated envelope. The liquids bottle and the vent fan are what freeze, not the lid."
	});
	if (input.water === "tanks" && (input.climate === "cold" || input.climate === "severe")) notes.push({
		level: "note",
		text: "Cold climates want the tanks inside the belly insulation, or self-regulating heat cable on a GFCI. Decide that before the belly pan is riveted on."
	});
	if (freshOver) notes.push({
		level: "note",
		text: "That water budget is a delivery truck. Carry fewer days or shower like you mean it. Tiny-house tanks top out well before the math does."
	});
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
		assumptions
	};
}
var climates = [
	{
		id: "mild",
		label: "Mild"
	},
	{
		id: "mixed",
		label: "Mixed"
	},
	{
		id: "cold",
		label: "Cold"
	},
	{
		id: "severe",
		label: "Hard winter"
	}
];
var uses = [
	{
		id: "careful",
		label: "Careful"
	},
	{
		id: "typical",
		label: "Typical"
	},
	{
		id: "generous",
		label: "Generous"
	}
];
var waters = [{
	id: "tanks",
	label: "Onboard tanks"
}, {
	id: "hookup",
	label: "City hookup"
}];
var toilets = [
	{
		id: "compost",
		label: "Composting"
	},
	{
		id: "cassette",
		label: "Cassette"
	},
	{
		id: "black",
		label: "Black tank"
	}
];
var powers = [
	{
		id: "shore30",
		label: "30 A shore"
	},
	{
		id: "shore50",
		label: "50 A shore"
	},
	{
		id: "offgrid",
		label: "Off-grid"
	}
];
var heats = [
	{
		id: "propane",
		label: "Propane vent"
	},
	{
		id: "diesel",
		label: "Diesel air"
	},
	{
		id: "minisplit",
		label: "Mini-split"
	},
	{
		id: "wood",
		label: "Wood stove"
	},
	{
		id: "electric",
		label: "Electric"
	}
];
function Segment({ label, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "border-t border-line py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
			className: "text-sm font-medium text-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: options.map((option) => {
				const on = option.id === value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": on,
					onClick: () => onChange(option.id),
					className: cn("tap min-h-11 rounded-full px-3 text-sm transition-colors duration-200", on ? "bg-ink text-paper" : "bg-paper text-ink shadow-card"),
					children: option.label
				}, option.id);
			})
		})]
	});
}
function Stepper({ label, value, min, max, suffix, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 border-t border-line py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "tap size-11 rounded-full bg-paper text-lg text-ink shadow-card",
					onClick: () => onChange(Math.max(min, value - 1)),
					"aria-label": `Decrease ${label}`,
					children: "−"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "w-16 text-center font-display text-2xl tabular-nums text-ink",
					children: [value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-0.5 text-sm text-muted",
						children: suffix
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "tap size-11 rounded-full bg-paper text-lg text-ink shadow-card",
					onClick: () => onChange(Math.min(max, value + 1)),
					"aria-label": `Increase ${label}`,
					children: "+"
				})
			]
		})]
	});
}
function Stat({ label, value, detail }) {
	const long = value.length > 28;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-line py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-muted uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-1 text-ink", long ? "text-lg leading-snug" : "font-display text-3xl tabular-nums"),
				children: value
			}),
			detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-muted",
				children: detail
			}) : null
		]
	});
}
function PlannerView() {
	const plan = useGuideStore((state) => state.plan);
	const setPlan = useGuideStore((state) => state.setPlan);
	const result = planHouse(plan);
	const patch = (next) => setPlan(next);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-8 px-5 pt-8 pb-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-copper-ink uppercase",
				children: "Planner"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
				children: "Size the house you are actually building."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted",
				children: "A sketch, not a stamp. It turns floor area, climate, and how you camp into a tank, a cord, and a heater you can argue with."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-3 gap-2 lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-ink p-3 text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-paper/70 uppercase",
							children: "Heat"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl tabular-nums",
							children: result.heaterSize.toLocaleString()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card p-3 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-muted uppercase",
							children: "Fresh"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-display text-xl tabular-nums",
							children: [result.freshGal, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: " gal"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card p-3 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-muted uppercase",
							children: "Power"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl",
							children: plan.power === "shore30" ? "30A" : plan.power === "shore50" ? "50A" : "Off-grid"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shadow-card mt-6 rounded-card bg-card px-4 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
						label: "Length",
						value: plan.lengthFt,
						min: 10,
						max: 40,
						suffix: "ft",
						onChange: (lengthFt) => patch({ lengthFt })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
						label: "Width",
						value: plan.widthFt,
						min: 6,
						max: 12,
						suffix: "ft",
						onChange: (widthFt) => patch({ widthFt })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
						label: "People",
						value: plan.people,
						min: 1,
						max: 6,
						suffix: "",
						onChange: (people) => patch({ people })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 border-t border-line py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "Sleeping loft"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": plan.loft,
							onClick: () => patch({ loft: !plan.loft }),
							className: cn("tap min-h-11 rounded-full px-4 text-sm font-medium", plan.loft ? "bg-ink text-paper" : "bg-paper text-ink shadow-card"),
							children: plan.loft ? "Yes" : "No"
						})]
					}),
					plan.water === "tanks" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
						label: "Days between fills",
						value: plan.days,
						min: 1,
						max: 7,
						suffix: "d",
						onChange: (days) => patch({ days })
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						label: "Climate",
						value: plan.climate,
						options: climates,
						onChange: (climate) => patch({ climate })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						label: "Water",
						value: plan.water,
						options: waters,
						onChange: (water) => patch({ water })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						label: "Daily use",
						value: plan.use,
						options: uses,
						onChange: (use) => patch({ use })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						label: "Toilet",
						value: plan.toilet,
						options: toilets,
						onChange: (toilet) => patch({ toilet })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						label: "Power",
						value: plan.power,
						options: powers,
						onChange: (power) => patch({ power })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						label: "Heat",
						value: plan.heat,
						options: heats,
						onChange: (heat) => patch({ heat })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-relaxed text-muted",
				children: "Careful use is about 8 gallons a person a day — navy showers. Typical is 14. Generous is 22, which is how tanks get heavy."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "lg:sticky lg:top-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card bg-ink px-5 py-6 text-paper shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-paper/70 uppercase",
							children: "Your sketch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-display text-4xl tabular-nums",
							children: [result.area, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-2xl",
								children: "sq ft"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-paper/80",
							children: [
								plan.lengthFt,
								" by ",
								plan.widthFt,
								plan.loft ? ", with a loft" : "",
								", ",
								plan.people,
								" ",
								plan.people === 1 ? "person" : "people"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Heater",
							value: `${result.heaterSize.toLocaleString()} BTU/h`,
							detail: `Loss sketch is about ${result.btu.toLocaleString()} BTU/h. Buy the next common size, not a furnace meant for a bungalow.`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Fresh water",
							value: result.freshLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Grey",
							value: result.greyLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Toilet",
							value: result.blackLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Water weight, full",
							value: `${result.waterWeightLb.toLocaleString()} lb`,
							detail: "8.3 pounds a gallon. Fresh, grey, and black if you have them."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Hot water",
							value: result.hotWater
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Power",
							value: result.panel,
							detail: result.spaces
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-ink",
						children: "Circuits to leave room for"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2",
						children: result.circuits.map((circuit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-1 border-t border-line py-3 sm:grid-cols-[8rem_minmax(0,1fr)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: circuit.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: circuit.spec
							})]
						}, circuit.name))
					})]
				}),
				result.notes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: result.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: cn("rounded-card px-4 py-3 text-sm leading-relaxed", note.level === "stop" ? "bg-ink text-paper" : "bg-paper-deep text-ink"),
						children: note.text
					}, note.text))
				}) : null,
				result.solar ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-card bg-card p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "Off-grid sketch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Daily"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1 font-display text-2xl tabular-nums",
									children: [result.solar.dailyKwh, " kWh"]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Array"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1 font-display text-2xl tabular-nums",
									children: [result.solar.arrayW, " W"]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Battery"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1 font-display text-2xl tabular-nums",
									children: [result.solar.batteryAh, " Ah"]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: [
								result.solar.inverter,
								", lithium at 12 V, two days of storage, about ",
								result.solar.sun,
								" sun hours. Includes a 12 V fridge. It does not include a workshop, an induction cooktop, or a week of clouds."
							]
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "mt-6 text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "font-medium text-copper-ink",
						children: "How the BTU number is figured"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: result.assumptions
					})]
				})
			]
		})]
	});
}
var SplitComponent = PlannerView;
//#endregion
export { SplitComponent as component };
