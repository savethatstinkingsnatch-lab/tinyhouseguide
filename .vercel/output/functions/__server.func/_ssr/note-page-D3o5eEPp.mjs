import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/note-page-D3o5eEPp.js
var import_jsx_runtime = require_jsx_runtime();
function NotePage({ kicker, title, blocks, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-5 pt-8 pb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-copper-ink uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-10",
				children: blocks.map((block) => {
					const List = block.ordered ? "ol" : "ul";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [block.heading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink",
						children: block.heading
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
						className: block.heading ? "mt-4" : void 0,
						children: block.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 border-t border-line py-4 text-base leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl text-copper tabular-nums",
								children: block.ordered ? index + 1 : String(index + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					})] }, block.heading ?? block.items[0]);
				})
			}),
			children,
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
export { NotePage as t };
