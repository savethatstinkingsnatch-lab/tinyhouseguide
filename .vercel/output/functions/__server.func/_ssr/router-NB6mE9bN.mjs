import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Droplets, i as Flame, n as TriangleAlert, o as BookOpen, r as Ruler, t as Zap } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide-data-HpaFLedo.js
var systems = {
	plumbing: {
		id: "plumbing",
		name: "Plumbing",
		nav: "Water",
		kicker: "Supply, drain, heat",
		promise: "Short runs, a hatch you can open, and a belly that can freeze without wrecking the house.",
		summary: "Decide the wet wall before you order studs. Tanks, the pump, and the heater all want the same bay, between the axles, with a door in front of the valves.",
		kit: [
			"1/2 inch PEX-B, red and blue, plus a short 3/4 inch trunk if two fixtures run together",
			"A cinch or crimp tool you own — a dull borrowed one leaks",
			"Shutoffs at the tank, the heater, and every fixture",
			"12 V diaphragm pump, 3 to 5 GPM, with a strainer ahead of it",
			"1.5 inch drain pipe, P-traps, and slope that stays a quarter inch per foot",
			"A roof vent, unless your inspector has already allowed an air-admittance valve",
			"Nail plates anywhere a screw could find a pipe",
			"A pressure gauge for the test, and a low-point drain for winter"
		],
		phases: [
			{
				id: "decide",
				label: "Decide",
				lead: "The floor plan is the plumbing plan. If the shower, sink, and heater are on three walls, you already lost.",
				steps: [
					{
						id: "p-wall",
						title: "Stack the wet fixtures on one wall",
						body: "Kitchen sink, shower, and water heater belong on a single interior wall, close to the middle of the trailer so the tanks sit between the axles. A 24-inch chase is enough if you leave it before the studs go up.",
						why: "Every extra foot of pipe is heat loss, a freeze point, and a joint you cannot reach after the wall is closed.",
						watch: "Do not put the shower on an outside wall in a cold climate. The valve body freezes first, usually the night before you need to leave."
					},
					{
						id: "p-source",
						title: "Pick tanks or a hose before the floor is framed",
						body: "Onboard water means a fresh tank, a 12-volt pump, and a grey tank. A city hookup means a hose bibb with a regulator set around 45 to 50 psi — park pressure can sit over 80 — and a legal place to send grey water. The ground is not that place in most towns.",
						why: "Floor joists have to leave a bay for the tanks. Cutting a structural member later to slide a tank in is how tiny houses get soft in the middle.",
						watch: "Put a check valve at the city inlet so a pump cannot backfeed a park system. And do not size the tank for a house you will never fill. Water weighs 8.3 pounds a gallon."
					},
					{
						id: "p-fixtures",
						title: "Choose the toilet and the water heater as one decision",
						body: "A composting toilet deletes the black tank and the 3-inch drain. A cassette is a 5-gallon compromise you will carry to a dump station. An RV toilet needs a black tank, a dump valve, and a vent. For hot water, a direct-vent propane tankless unit matches a tiny house. A 6-gallon electric tank can work on a generous shore supply. A whole-house electric tankless heater wants 40 amps or more — it does not belong here.",
						why: "The toilet decides your tanks and your vent. The heater decides a gas line or a circuit, a flue, and whether showers work off-grid.",
						watch: "Match the showerhead to the tankless heater’s minimum flow. A heroic low-flow head can be too low, and the heater will click on and off. Composting toilets still need their own vent fan to the outside. That fan is not the plumbing vent."
					}
				]
			},
			{
				id: "rough",
				label: "Rough-in",
				lead: "Run every pipe while the bays are open. The pretty wall is a lid, not a place to hide a problem.",
				steps: [
					{
						id: "p-pex",
						title: "Run PEX with shutoffs you can see",
						body: "Half-inch to each fixture. Red for hot, blue for cold. Leave a little slack — PEX should not be stretched like a guitar string. A shutoff at the tank, at the heater, and at each fixture means a drip does not empty the whole house.",
						why: "The crimp fails more often than the pipe. You want to change a faucet without opening a wall.",
						watch: "Stay clear of the water heater flue and of screw tips. Nail plates where pipe passes a stud face. Do not bend tighter than the maker’s radius. A kink is a leak."
					},
					{
						id: "p-drain",
						title: "Treat the drain as a slope, not a diameter",
						body: "Sinks and showers use 1.5 inch pipe, sloped a quarter inch per foot the whole way to the tank or the sewer outlet. Every fixture gets a P-trap. The shower trap has to be reachable. A trap glued into foam is a mistake you make once.",
						why: "Slow drains in tiny houses are almost always a flat spot or a missing vent, not a pipe that was ‘too small.’",
						watch: "Support the run. A belly that flexes on the highway will undo a slope you set carefully in the driveway. Do not reduce pipe size in the direction of flow."
					},
					{
						id: "p-vent",
						title: "Give the drain its own way to breathe",
						body: "A dry vent through the roof is what inspectors expect. An air-admittance valve under the sink is legal in some places and banned in others, and it does nothing for a fixture downstream of it. Ask before you rely on one. The vent ends above the roof, away from windows and away from the heater exhaust.",
						why: "An unvented trap siphons itself dry. Then the house smells like the tank, and no candle fixes a missing vent.",
						watch: "Never tie the plumbing vent into a bath fan or a heater flue. Air will go the wrong direction, and exhaust does not belong in a drain."
					}
				]
			},
			{
				id: "close",
				label: "Close up",
				lead: "Test, then insulate, then close. The order is the whole trick.",
				steps: [
					{
						id: "p-test",
						title: "Pressure-test before the insulation goes in",
						body: "Cap the ends, pump the supply to about 60 psi, and leave it. An hour is a minimum. Overnight is better. The gauge should not move. Soapy water on every crimp. Fix it while the bay is still a bay.",
						why: "A drip inside a closed tiny-house wall becomes rot, and these walls are too thin to have a spare inch of it.",
						watch: "Test past the water heater, not just up to its valves. The connections you skip are the ones that weep."
					},
					{
						id: "p-freeze",
						title: "Insulate the bay, not just the tube",
						body: "Foam sleeves on PEX help. The real protection is a closed belly with the tanks inside a warmed envelope, or self-regulating heat cable on tanks that must live in the cold — on a GFCI circuit, with a thermostat. Do not bury cheap constant-wattage tape in foam.",
						why: "The first freeze is the dump valve or the pump, not the kitchen faucet you can see.",
						watch: "Heat cable needs power all winter, even when you are away. Off-grid, that load is real. If you will not power it, drain the system instead of hoping."
					},
					{
						id: "p-hatch",
						title: "Build a door to the pump",
						body: "The pump, the strainer, and the manifold of shutoffs get a hatch big enough for two hands and a flashlight. Label the valves. If the only path to the pump is pulling the oven, you will not pull the oven.",
						why: "Diaphragm pumps fail. Strainers fill with tank grit. This is maintenance, not a hypothetical.",
						watch: "A hatch through the shower wall has to stay watertight. A hatch in a cabinet face is usually the better cut."
					}
				]
			},
			{
				id: "prove",
				label: "Prove it",
				lead: "Turn it all on before you declare the build finished. Listen more than you look.",
				steps: [
					{
						id: "p-cycle",
						title: "Run every fixture and listen to the pump",
						body: "Open one faucet, then two. The pump should run steadily while water is moving and stop a few seconds after you close the tap. Rapid clicking means it is short-cycling — a leak, a failed check valve, or a system that wants a small accumulator tank.",
						why: "Short-cycling burns pumps up and hides a leak you cannot see yet.",
						watch: "A city-water hookup left open at the same time as the pump will fight itself. Pick one source when you test."
					},
					{
						id: "p-slope",
						title: "Prove the shower drains, do not trust the level",
						body: "Plug nothing. Run the shower for a few minutes onto a dry belly or into the tank with the dump valve where you can see it. Water should leave. Puddles in the pan, or a drain that gurgles and stops, means the slope or the vent is wrong. Fix it before the floor finish.",
						why: "A shower that ‘mostly’ drains will smell by the third week.",
						watch: "Check the curb side dump while you do this. A closed valve and a small grey tank will back up into the shower and look like a plumbing failure."
					},
					{
						id: "p-winter",
						title: "Write the winter steps on the hatch",
						body: "Low-point drains open. Pump emptied. Water heater bypassed and drained. Traps filled with RV antifreeze, not automotive antifreeze. Heat cable tested on a GFCI. If you boondock below freezing, this list is the difference between a spring startup and a split pump.",
						why: "You will not remember the order in November, in the dark, with cold hands.",
						watch: "Automotive antifreeze is poisonous and not for potable plumbing. Buy the pink RV stuff, and do not skip the heater bypass — antifreeze in a tankless unit is a bad afternoon."
					}
				]
			}
		]
	},
	electric: {
		id: "electric",
		name: "Electricity",
		nav: "Power",
		kicker: "Inlet, panel, grounds",
		promise: "A panel you can stand in front of, a ground that is actually a ground, and loads that fit the cord.",
		summary: "A tiny house on a trailer is often reviewed like an RV. The same house on a foundation is a dwelling. Those are different rulebooks. Know which one you are in before you buy a panel.",
		kit: [
			"An inlet, not a tail of cord through a hole — 30 A or 50 A, matching the planner",
			"Copper conductors: 14 AWG on 15 A, 12 AWG on 20 A, 10 AWG on a short 30 A feeder, 6 AWG on a typical 50 A feeder",
			"A panel with spare spaces — 8 or 12, not a stuffed 6",
			"GFCI protection for the kitchen, the bath, and anything outside",
			"A listed lug bonding the ground bar to bare trailer metal",
			"Nail plates, bushings, and strain relief at the inlet",
			"A receptacle tester, the three-light kind, plus a GFCI test",
			"Labels at both ends of every cable"
		],
		phases: [
			{
				id: "decide",
				label: "Decide",
				lead: "Power is a legal fork and a math problem. Do both on paper.",
				steps: [
					{
						id: "e-code",
						title: "Learn which book the inspector will open",
						body: "On a trailer, many jurisdictions treat the house as an RV and lean on NEC Article 551: an inlet, a panel, GFCI in wet spots, frame bond. On a foundation, you are usually a dwelling: a real service, grounding electrodes, and AFCI on living circuits. Some places invent a third answer. Call the inspector before you close a wall, and write down what they said.",
						why: "Rewiring a finished 8-foot-wide room because you guessed the wrong article is a terrible weekend.",
						watch: "‘My cousin’s house passed’ is not a code path. The county where you park, build, or title the trailer is the one that counts."
					},
					{
						id: "e-source",
						title: "Pick the cord before you pick the appliances",
						body: "A 30-amp, 120-volt shore inlet gives you about 3,600 watts, and you should live around 80 percent of that — roughly 2,900 watts continuous. A 50-amp, 120/240-volt inlet is a different life: a mini-split and a small electric water heater can coexist. Off-grid, the inverter is the service. High heat and induction cooking do not come from a modest solar roof.",
						why: "People buy the stove first and discover the cord second. The cord always wins.",
						watch: "A 30-amp RV outlet and a 30-amp dryer outlet are not the same shape or the same voltage. Buy the inlet that matches a campground pedestal, and use a real cord."
					},
					{
						id: "e-panel",
						title: "Put the panel where a person can stand",
						body: "Working clearance is about 30 inches wide and 36 inches deep, with headroom to stand — the idea in NEC 110.26. The panel sits on the service wall, beside the wet chase, not inside it. Not in the bathroom. Not in a closet you fill with coats. The cover has to open fully.",
						why: "The next person to touch this panel may be you, in a hurry, with the lights out. Clearance is how you don’t get hurt.",
						watch: "Do not share a cabinet with a propane appliance. Combustion air and a breaker panel are a bad marriage."
					}
				]
			},
			{
				id: "rough",
				label: "Rough-in",
				lead: "Home runs, the right copper, and a bond you could defend out loud.",
				steps: [
					{
						id: "e-runs",
						title: "Pull home runs while the studs are empty",
						body: "A lighting circuit, a general receptacle circuit, a kitchen circuit, a bath circuit. The pump stays 12-volt if you can buy it that way. Microwave, mini-split, and any electric water heat get their own breakers. Staple cable, don’t crush it, and keep it off the hot-water PEX. They may share a bay. They may not share a staple.",
						why: "Daisy-chaining the whole house on one cable feels efficient until a GFCI trip kills the lights and the fridge together.",
						watch: "Label both ends the day you pull the cable. ‘The red one’ is not a label in six months."
					},
					{
						id: "e-gauge",
						title: "Let the breaker pick the wire, not the other way around",
						body: "15 amps, 14 AWG copper. 20 amps, 12 AWG copper. A 30-amp inlet wants 10 AWG copper on a short run inside the house. A 50-amp feeder is typically 6 AWG copper. Use NM-B inside dry walls. In the belly, and anywhere the road can throw water or a rock, use UF or conductors in liquidtight conduit.",
						why: "Undersized wire gets hot inside a wall you cannot see. Oversized wire on a small breaker is just a waste, not a safety upgrade — the breaker is the protection.",
						watch: "Aluminum is a specialty, not a scrap-bin decision. If a lug is marked copper only, believe it. Mixing aluminum and copper without listed connectors is how terminals burn."
					},
					{
						id: "e-bond",
						title: "Bond the frame, and do not bond the neutral twice",
						body: "Scrape paint and put a listed lug from the ground bar to the trailer frame. If a park pedestal feeds your inlet, the panel is a subpanel: neutral and ground stay separate. Do not land neutral on the frame. If you are the service — a foundation house with a meter — neutral and ground bond at the main disconnect, and only there.",
						why: "A bootleg neutral-to-frame bond puts return current on the metal you touch. A missing bond means a fault has nowhere to trip the breaker.",
						watch: "This is the hour worth paying an electrician if you are unsure. The rest of the rough-in is repetitive. This part is the part that hurts people."
					}
				]
			},
			{
				id: "close",
				label: "Close up",
				lead: "Protection, plates, and a panel directory a stranger could use.",
				steps: [
					{
						id: "e-protect",
						title: "GFCI the wet rooms, and AFCI if you are a dwelling",
						body: "Kitchen, bath, and exterior receptacles want GFCI. In a tiny house that is most of the outlets, so a GFCI breaker is often simpler than a chain of devices. If the inspector calls you a dwelling, expect AFCI on the living-area circuits too. Bedrooms, the loft, the general receptacles.",
						why: "The shower, the kettle, and a damp floor already share a room the size of a closet. Fault protection is not a luxury feature.",
						watch: "A GFCI device downstream of a GFCI breaker is confusing, not safer. Pick one method per circuit and label it."
					},
					{
						id: "e-plates",
						title: "Armor the cable before the finish covers it",
						body: "Nail plates on every stud where cable passes within an inch and a quarter of the face. Bushings in metal knockouts. The inlet gets a clamp so a yanked cord pulls on the clamp, not on the terminal screws. Boxes stay flush to the finished wall, not buried under shiplap.",
						why: "The screw that finds a hot conductor finds it years later, during a cabinet install, when you have forgotten the cable was there.",
						watch: "Do not bury a junction. Every splice lives in a box you can open without a saw."
					},
					{
						id: "e-label",
						title: "Write the directory like you will be tired",
						body: "Breaker 1, lights. Breaker 2, loft and general receptacles. Breaker 3, kitchen GFCI. Say what dies when it trips. Tape a copy inside the pump hatch too, because that is where you will be standing.",
						why: "A blank directory turns a five-minute diagnosis into an evening of flipping breakers in the dark.",
						watch: "Update it when you add the heat-pump circuit. A wrong label is worse than none."
					}
				]
			},
			{
				id: "prove",
				label: "Prove it",
				lead: "A lamp that lights is not a test. Polarity, ground, and the real load are the test.",
				steps: [
					{
						id: "e-tester",
						title: "Use a receptacle tester on every outlet",
						body: "The three-light tester catches open ground, hot-neutral reverse, and a few other ways to build a dangerous outlet that still runs a lamp. Then press the GFCI test button. It should die, and the reset should bring it back. Do this before furniture hides the receptacles.",
						why: "Reversed polarity and an open ground both ‘work’ until something fails.",
						watch: "A tester cannot find every AFCI problem or a loose neutral under load. It is necessary, not sufficient. If a plug feels warm, stop and open the box."
					},
					{
						id: "e-load",
						title: "Turn the house on until you are near the cord’s limit",
						body: "On 30 amps, run the kettle or microwave and watch what else you dared to leave on. A mini-split plus a hair dryer plus a toaster is how people melt inlets. Note the combination that is fine and the combination that is not. Put that note inside the door.",
						why: "The math in the planner is a ceiling. The test is the kitchen on a cold morning.",
						watch: "Continuous loads — heat, a charger left for hours — should sit around 80 percent of the breaker, not on the number printed on the handle."
					},
					{
						id: "e-cord",
						title: "Make the inlet the only way in",
						body: "Shore power enters through the inlet and a listed cord. No male plug with pigtails. No cord stuffed through a cracked window. No splitter that lets you ‘borrow’ 15 amps from a neighbor’s porch unless you enjoy warm plastic. Coil the cord so it can dry, and keep the inlet cover shut when you are off.",
						why: "Improvised shore cords are the injury and the fire that tiny-house forums are full of.",
						watch: "If the pedestal is damaged, don’t ‘make it work.’ Pedestals are the park’s equipment. Yours starts at the inlet."
					}
				]
			}
		]
	},
	heat: {
		id: "heat",
		name: "Heat",
		nav: "Heat",
		kicker: "Envelope, fuel, moisture",
		promise: "A small heater in a tight shell, combustion that stays outside the air you breathe, and a floor that is not an ice tray.",
		summary: "Buy insulation before you buy BTUs. A well-built 160-square-foot house often needs less heat than a single oversized furnace wants to give, and the belly loses more than the walls.",
		kit: [
			"Cavity insulation aimed at R-15 walls, R-20 in the belly, R-30 in the roof",
			"Air-sealing tape, gaskets, and a plan for the loft hatch and the wheel wells",
			"A sealed-combustion heater, or a mini-split, sized in the planner — not a 30,000 BTU furnace",
			"The vent or line-set path drawn before the siding goes on",
			"A bath fan ducted outdoors, not into the loft",
			"Smoke alarm and a CO alarm, plus a propane alarm if you carry propane",
			"Clearance notes from the heater’s own manual, copied onto a card at the unit"
		],
		phases: [
			{
				id: "decide",
				label: "Decide",
				lead: "The heater is the last decision. The shell is the first.",
				steps: [
					{
						id: "h-shell",
						title: "Insulate like the insulation is the appliance",
						body: "Aim for R-15 in the walls, and more if you can add a continuous layer outside the studs without blowing your trailer width. The belly wants R-20 and a full enclosure — no daylight at the wheel wells. The roof wants R-30. Windows can be double pane without covering half the south wall, unless you have a serious summer shade plan.",
						why: "Heat you don’t lose is heat you don’t have to make, vent, or insure. Oversized heaters short-cycle, sweat, and comfort nobody.",
						watch: "The floor over a moving trailer is the weak room. People toast the loft and freeze their feet, then buy a second heater. Fix the belly first."
					},
					{
						id: "h-fuel",
						title: "Match the fuel to how you actually camp",
						body: "Direct-vent propane is the classic: small, thermostatted, combustion air from outside. A quality diesel air heater is efficient and dry, with the same rule — exhaust stays outside and away from windows. A mini-split heats and cools if you have shore power or a serious electrical budget. A wood stove can make sense on a foundation and is a hard argument on a trailer. Electric resistance is a backup on a cord, not a plan.",
						why: "The wrong fuel ties you to a cord you don’t have, or to a flame in the room you sleep in.",
						watch: "Unvented cabinet heaters are for a workshop while you are awake. They are not a sleeping-loft strategy. Sealed combustion, or don’t sleep next to it."
					},
					{
						id: "h-size",
						title: "Size it from the loss, not from the fear",
						body: "Use the planner. A tight 8 by 20 in a mixed climate often lands near a 5,000 BTU heater. Cold country and a bigger box move you toward 8,000 or 12,000. Jumping to a big furnace because ‘it gets cold in January’ gives you a machine that never runs long enough to feel even.",
						why: "Short cycles leave the floor cold, the air hot at the ceiling, and moisture in the corners.",
						watch: "The planner assumes you actually built the shell it describes. A leaky belly can double the number. If your floor has daylight, do not trust the small heater yet."
					}
				]
			},
			{
				id: "rough",
				label: "Rough-in",
				lead: "The hole in the wall is part of the framing, not a Saturday surprise.",
				steps: [
					{
						id: "h-place",
						title: "Place the unit, the exhaust, and the outdoor half",
						body: "Propane and diesel want a listed vent path with the clearances in the manual, exhausting away from windows, the door, and the plumbing vent. A mini-split’s outdoor unit needs air through it and a place that isn’t the hitch you trip on — the tongue can work if drip water won’t ice the coupler. Wood needs the manual’s clearances, a hearth, and a chimney you can live with.",
						why: "Exhaust pulled back into a window is a CO event. A line set added after the siding is a leak in the envelope.",
						watch: "Do not share a penetration with the plumbing vent. Two holes, two jobs. Wind will find a combined stack and use it badly."
					},
					{
						id: "h-air",
						title: "Design combustion air on purpose",
						body: "Sealed-combustion appliances bring their own air through the vent. If you ever install something that is not sealed, it needs a dedicated combustion-air opening sized from the manual, not a cracked window you might close. The electrical panel does not count as an air path, and it should not share the closet.",
						why: "A tight tiny house can starve a flame. A starved flame makes carbon monoxide.",
						watch: "Range hoods and bath fans can pull a draft down a flue that wasn’t meant to reverse. Sealed combustion is how you stop playing that game."
					},
					{
						id: "h-belly",
						title: "Treat the floor as part of the heater",
						body: "Close the belly pan. Stuff the wheel wells. Keep tanks inside that envelope or on heat cable. If you dream of radiant floor tubing, know it is slow, lovely, and a freeze risk if the house sits empty — a project for later, not the thing that keeps you alive in January.",
						why: "Heat rises into the loft no matter what you buy. Comfort is a warm floor. The floor is a construction job.",
						watch: "Spray foam in the belly is sticky and permanent. Keep it off wires, dump valves, and anything you meant to service."
					}
				]
			},
			{
				id: "close",
				label: "Close up",
				lead: "Air leaks and missing alarms undo a good heater.",
				steps: [
					{
						id: "h-seal",
						title: "Air-seal the loft, the tongue, and the wheel wells",
						body: "Tape the sheathing seams you can reach. Gasket the loft hatch. Foam the wire and pipe holes. The tongue of the trailer is a wind tunnel into the floor if you leave it open. Do this before insulation where you can, and again after, wherever a gap laughs at you.",
						why: "Moving air carries more heat out than a thin spot of insulation, and it drags moisture into the cavity.",
						watch: "Do not seal a house and then skip ventilation. Tight plus a shower plus a pot of pasta is how sheathing rots."
					},
					{
						id: "h-alarms",
						title: "Put alarms where they can wake you",
						body: "A smoke alarm. A carbon monoxide alarm outside the sleeping area, and another if the heater is far from the loft. A propane alarm low in the room if you have propane — propane pools. Test them the day you move in, and put fresh dates on the planner card.",
						why: "Combustion appliances in a small volume do not give you much time. The alarm is the system, not an accessory.",
						watch: "A CO alarm in a drawer is a CO alarm you do not have. Follow the height in the instructions. Do not paint them."
					},
					{
						id: "h-fan",
						title: "Duct the bath fan all the way outside",
						body: "Shower moisture has to leave the building. A fan dumping into the loft, the wall, or the belly is a mold plan. A range hood should leave too if you cook like a person and not like a tourist. Tiny ERV units exist if you want fresh air without dumping all the heat.",
						why: "Condensation on the back of the siding is the repair that costs more than the heater.",
						watch: "The fan duct needs a damper or a hood that closes, or you have built a new hole for January wind."
					}
				]
			},
			{
				id: "prove",
				label: "Prove it",
				lead: "Run it on a cold night and believe the floor, the alarm, and a humidity number.",
				steps: [
					{
						id: "h-night",
						title: "Spend a cold night and check the floor",
						body: "Set the thermostat where you will actually live, not at 80 to ‘test it.’ In the morning, the loft will be warmer than the floor. That is physics. The question is whether the floor is bearable and whether the heater short-cycled all night. If the floor is miserable, you have a belly problem or a wildly oversized unit. You do not have a ‘need a second wood stove’ problem yet.",
						why: "Daytime tests lie. The house and the heater settle after midnight.",
						watch: "If the unit never shuts off in mild weather, it is small or the shell is open. If it blasts for two minutes and stops, it is big. Write down which one you saw."
					},
					{
						id: "h-exhaust",
						title: "Look at the exhaust while the wind blows",
						body: "Walk around the trailer with the heater running. You should not smell exhaust at the door, the windows, or the plumbing vent. Soot at the terminal means a bad burn. Condensate should drip where the manual says, not into the wall. For a mini-split, confirm the outdoor unit is not recirculating its own air against a skirt or a snowbank.",
						why: "The vent you liked on a calm afternoon can re-enter the house in a crosswind.",
						watch: "If a CO alarm sounds, turn the appliance off, get out, and ventilate. Do not troubleshoot it from the loft."
					},
					{
						id: "h-rh",
						title: "Read the humidity, not just the thermometer",
						body: "A cheap thermo-hygrometer on an interior wall is enough. In winter, aim to stay under about 50 percent relative humidity. Over that, you are cooking, showering, or breathing into a sealed box. Run the bath fan longer than feels necessary. Crack the strategy, not just the window for an hour and a prayer.",
						why: "Warm and wet is how a tiny house smells fine for a month and fails a year later.",
						watch: "A humidifier is the opposite of what this building needs. If your nose is dry and the windows are wet, you have uneven heat, not ‘air that wants a humidifier.’"
					}
				]
			}
		]
	}
};
var buildOrder = [
	{
		id: "b-draw",
		title: "Draw the service wall on the plan",
		detail: "Sink, shower, heater, panel clearance, and both vents, on one sheet, before you buy studs."
	},
	{
		id: "b-floor",
		title: "Frame the floor for tanks and the feeder",
		detail: "Leave the bay between the axles. Decide the dump side. Don’t cut a joist as a surprise later."
	},
	{
		id: "b-walls",
		title: "Frame the chase and the panel space",
		detail: "Twenty-four inches of wet wall, and a standing spot in front of the breakers that you never fill with a closet."
	},
	{
		id: "b-rough",
		title: "Rough in water, power, and heat together",
		detail: "PEX, drains, cable, and the heater penetration while every bay is open. Nail plates on all of it."
	},
	{
		id: "b-inspect",
		title: "Get eyes on it while it’s visible",
		detail: "Inspector, electrician, or a friend who has done this — anyone who will argue with you before the insulation."
	},
	{
		id: "b-insulate",
		title: "Test, air-seal, then insulate",
		detail: "Pressure on the water. A tester on the outlets. Then the belly, the walls, and the roof. In that spirit, if not that single day."
	},
	{
		id: "b-trim",
		title: "Set fixtures and commission the heater",
		detail: "Pump hatch labeled. Panel directory written. Heater started on its own instructions, not on hope."
	},
	{
		id: "b-winter",
		title: "Write the winter plan where you’ll find it",
		detail: "Drains, antifreeze, heat cable, alarm dates. Inside the hatch, not in a note on your phone."
	}
];
var collisions = [
	{
		title: "The panel is not a closet mate",
		body: "Leave a place to stand in front of the breakers. Don’t put that place inside a propane closet, and don’t steal the heater’s air from the electrical cabinet.",
		system: "electric",
		hash: "e-panel"
	},
	{
		title: "Two vents, never one stack",
		body: "The plumbing vent and the heater exhaust both want the roof. They do not want each other. Keep exhaust away from windows and away from the vent.",
		system: "plumbing",
		hash: "p-vent"
	},
	{
		title: "Hot PEX and cable can share a bay",
		body: "They cannot share a staple, and the cable cannot lie on the hot line. Nail plates over both before the finish boards go on.",
		system: "electric",
		hash: "e-runs"
	},
	{
		title: "The belly is a room",
		body: "Tanks, heat cable, and the feeder all live under the subfloor. Enclose it and insulate it, or winter and the highway will take turns.",
		system: "heat",
		hash: "h-belly"
	},
	{
		title: "The shower wall stays empty of boxes",
		body: "No device boxes in the wet wall. GFCI the bath circuit. Slope the pan before you fall in love with the tile.",
		system: "plumbing",
		hash: "p-drain"
	}
];
var systemOrder = [
	"plumbing",
	"electric",
	"heat"
];
function isSystemId(value) {
	return value === "plumbing" || value === "electric" || value === "heat";
}
function stepsFor(id) {
	return systems[id].phases.flatMap((phase) => phase.steps);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-NB6mE9bN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var defaultPlan = {
	lengthFt: 20,
	widthFt: 8,
	people: 2,
	loft: true,
	climate: "mixed",
	water: "tanks",
	days: 3,
	use: "careful",
	toilet: "compost",
	power: "shore30",
	heat: "propane"
};
var useGuideStore = create()(persist((set) => ({
	done: {},
	plan: defaultPlan,
	toggle: (id) => set((state) => ({ done: {
		...state.done,
		[id]: !state.done[id]
	} })),
	resetChecks: () => set({ done: {} }),
	setPlan: (patch) => set((state) => ({ plan: {
		...state.plan,
		...patch
	} }))
}), {
	name: "service-wall",
	version: 1,
	skipHydration: true
}));
var links = [
	{
		to: "/",
		label: "Guide",
		icon: BookOpen,
		exact: true
	},
	{
		to: "/systems/$system",
		params: { system: "plumbing" },
		label: "Water",
		icon: Droplets
	},
	{
		to: "/systems/$system",
		params: { system: "electric" },
		label: "Power",
		icon: Zap
	},
	{
		to: "/systems/$system",
		params: { system: "heat" },
		label: "Heat",
		icon: Flame
	},
	{
		to: "/planner",
		label: "Size",
		icon: Ruler
	}
];
function Shell({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		useGuideStore.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "font-display text-xl font-medium tracking-tight text-ink",
						children: "Service Wall"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						"aria-label": "Sections",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							params: "params" in link ? link.params : void 0,
							activeOptions: { exact: "exact" in link ? link.exact : true },
							className: "flex min-h-11 items-center rounded-full px-3 text-sm font-medium transition-colors duration-200",
							activeProps: { className: "bg-ink text-paper" },
							inactiveProps: { className: "text-ink hover:bg-paper-deep" },
							children: link.label
						}, link.label))
					})]
				})
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mx-auto max-w-6xl px-5 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl text-sm leading-relaxed text-muted",
					children: "A planning guide, not a permit and not a code book. Trailer houses are often reviewed as RVs. Houses on a foundation are dwellings, with different rules for the service, AFCI, and energy. Gas work, the electrical service, and structure may require a license where you live. Your inspector’s reading wins."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: "Service Wall · plumbing, power, and heat"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 backdrop-blur-md md:hidden",
				"aria-label": "Sections",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-5",
					children: links.map((link) => {
						const Icon = link.icon;
						const href = "params" in link ? `/systems/${link.params.system}` : link.to;
						const active = href === "/" ? pathname === "/" : pathname === href;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: link.to,
							params: "params" in link ? link.params : void 0,
							className: cn("flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-medium", active ? "text-copper-ink" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								"aria-hidden": true
							}), link.label]
						}) }, link.label);
					})
				})
			})
		]
	});
}
var styles_default = "/assets/styles-Dbi7JNeH.css";
var APP_NAME = "Service Wall";
var Route$3 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "A field guide to tiny-house plumbing, electricity, and heat — the service wall, the rough-in order, and a planner for tanks, breakers, and BTUs."
			},
			{
				name: "theme-color",
				content: "#f3efe6"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$2 = () => import("./routes-XO6vbdhD.mjs");
var Route$2 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Service Wall — tiny house plumbing, power, and heat" }] })
});
var $$splitComponentImporter$1 = () => import("./planner-BB7tKAfg.mjs");
var Route$1 = createFileRoute("/planner")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Size the systems — Service Wall" }] })
});
var $$splitComponentImporter = () => import("./systems._system-Cc5ymxRH.mjs");
var Route = createFileRoute("/systems/$system")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => ({ meta: [{ title: isSystemId(params.system) ? `${systems[params.system].name} — Service Wall` : "Service Wall" }] })
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	PlannerRoute: Route$1.update({
		id: "/planner",
		path: "/planner",
		getParentRoute: () => Route$3
	}),
	SystemsSystemRoute: Route.update({
		id: "/systems/$system",
		path: "/systems/$system",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { buildOrder as a, stepsFor as c, cn as i, systemOrder as l, Route as n, collisions as o, useGuideStore as r, isSystemId as s, router_exports as t, systems as u };
