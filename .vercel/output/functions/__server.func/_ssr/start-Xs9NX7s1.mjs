import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as NotePage } from "./note-page-D3o5eEPp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-Xs9NX7s1.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"Call planning and building where you will live.",
	"Decide trailer (RV rules) or foundation (dwelling rules).",
	"Draw one wet wall for water, power, and heat.",
	"Run the planner for tanks, cord, and heater size.",
	"Hire licensed help for gas and service gear.",
	"Install smoke, CO, and propane alarms.",
	"Test for leaks and cold nights before you move in."
];
function StartPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotePage, {
		kicker: "Volume 24",
		title: "New to tiny houses?",
		blocks: [{
			ordered: true,
			items: steps
		}],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-8 flex flex-wrap gap-2",
			"aria-label": "Read next",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/before",
					className: "tap inline-flex min-h-11 items-center rounded-full bg-card px-4 text-sm font-semibold text-ink shadow-card",
					children: "Before you build"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/trailer",
					className: "tap inline-flex min-h-11 items-center rounded-full bg-card px-4 text-sm font-semibold text-ink shadow-card",
					children: "Trailer and towing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/egress",
					className: "tap inline-flex min-h-11 items-center rounded-full bg-card px-4 text-sm font-semibold text-ink shadow-card",
					children: "Egress and fire"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/glossary",
					className: "tap inline-flex min-h-11 items-center rounded-full bg-card px-4 text-sm font-semibold text-ink shadow-card",
					children: "Glossary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/planner",
					className: "tap inline-flex min-h-11 items-center rounded-full bg-copper px-4 text-sm font-semibold text-paper",
					children: "Open the planner"
				})
			]
		})
	});
}
//#endregion
export { StartPage as component };
