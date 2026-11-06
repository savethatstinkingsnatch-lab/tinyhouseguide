import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/glossary-fRJDoa-X.js
var import_jsx_runtime = require_jsx_runtime();
var terms = [
	["Service wall", "the wall that holds plumbing, panel, and often heat."],
	["RV / trailer tiny house", "often inspected under RV-style rules."],
	["Foundation dwelling", "usually under house building codes."],
	["Gray water", "sink and shower drain water (not toilet)."],
	["Black water", "toilet waste."],
	["PEX", "flexible plastic water supply pipe."],
	["GFCI / AFCI", "shock and arc-fault protection."],
	["Sealed combustion", "heater that takes air from outside and sends exhaust outside."],
	["Shore power", "plug-in power from a pedestal or house."],
	["Boondock", "camping without hookups."],
	["Egress", "a legal escape opening."],
	["CO", "carbon monoxide."]
];
function GlossaryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-5 pt-8 pb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-copper-ink uppercase",
				children: "Terms"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
				children: "Glossary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-8",
				children: terms.map(([term, meaning]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-2xl text-ink",
						children: term
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-base leading-relaxed text-muted",
						children: meaning
					})]
				}, term))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex min-h-11 items-center text-sm font-semibold text-copper-ink",
					children: "Back to the guide"
				})
			})
		]
	});
}
//#endregion
export { GlossaryPage as component };
