import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as cn, l as systemOrder, n as Route, r as useGuideStore, s as isSystemId, u as systems } from "./router-C2HB2T4m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/systems._system-BSYTuRL7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SystemView({ systemId }) {
	const guide = systems[systemId];
	const done = useGuideStore((state) => state.done);
	const toggle = useGuideStore((state) => state.toggle);
	const [phaseId, setPhaseId] = (0, import_react.useState)(guide.phases[0]?.id ?? "decide");
	const phase = guide.phases.find((item) => item.id === phaseId) ?? guide.phases[0];
	const steps = guide.phases.flatMap((item) => item.steps);
	const complete = steps.filter((step) => done[step.id]).length;
	const index = systemOrder.indexOf(systemId);
	const next = systemOrder[index + 1];
	(0, import_react.useEffect)(() => {
		const first = guide.phases[0]?.id ?? "decide";
		const hash = window.location.hash.replace("#", "");
		const match = guide.phases.find((item) => item.steps.some((step) => step.id === hash));
		setPhaseId(match?.id ?? first);
		if (!hash) return;
		const frame = window.requestAnimationFrame(() => {
			document.getElementById(hash)?.scrollIntoView({ block: "start" });
		});
		return () => window.cancelAnimationFrame(frame);
	}, [guide]);
	if (!phase) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-5 pt-8 pb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-copper-ink uppercase",
				children: guide.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
				children: guide.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-ink",
				children: guide.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-ink",
				children: "These checks are not an engineered plan and not code approval."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm tabular-nums text-muted",
				children: [
					complete,
					" of ",
					steps.length,
					" field checks"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-16 z-20 -mx-5 mt-8 border-y border-line bg-paper/95 px-5 py-3 backdrop-blur-md",
				role: "tablist",
				"aria-label": "Phases",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 overflow-x-auto",
					children: guide.phases.map((item) => {
						const selected = item.id === phase.id;
						const phaseDone = item.steps.filter((step) => done[step.id]).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							"aria-selected": selected,
							"aria-label": `${item.label}, ${phaseDone} of ${item.steps.length}`,
							onClick: () => {
								setPhaseId(item.id);
								document.getElementById("phase-lead")?.scrollIntoView({ block: "start" });
							},
							className: cn("tap min-h-11 shrink-0 rounded-full px-4 text-sm font-medium transition-colors duration-200", selected ? "bg-ink text-paper" : "bg-card text-ink shadow-card"),
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("ml-2 tabular-nums", selected ? "text-paper" : "text-muted"),
								children: [
									phaseDone,
									"/",
									item.steps.length
								]
							})]
						}, item.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: "phase-lead",
				className: "mt-6 scroll-mt-36 text-base leading-relaxed text-muted",
				children: phase.lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				role: "tabpanel",
				children: phase.steps.map((step, stepIndex) => {
					const checked = !!done[step.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: step.id,
						className: "scroll-mt-36 border-b border-line py-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-copper tabular-nums",
								children: String(stepIndex + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl text-ink",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed",
								children: step.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-l-2 border-copper pl-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold tracking-widest text-copper-ink uppercase",
										children: "Why"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-ink",
										children: step.why
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-l-2 border-pine pl-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold tracking-widest text-pine uppercase",
										children: "Watch"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-ink",
										children: step.watch
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-5 flex min-h-11 cursor-pointer items-center gap-3 text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked,
									onChange: () => toggle(step.id),
									className: "size-5 accent-pine"
								}), checked ? "Marked done" : "Mark this done"]
							})
						]
					}, step.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-ink",
					children: "What to have on the bench"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4",
					children: guide.kit.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 border-t border-line py-3 text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 size-1.5 shrink-0 rounded-full bg-copper",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
					}, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/systems/$system",
					params: { system: next },
					className: "tap inline-flex min-h-11 items-center gap-2 rounded-full bg-copper px-5 text-sm font-semibold text-paper hover:bg-copper-ink",
					children: [
						"Next: ",
						systems[next].name,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": true
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/planner",
					className: "tap inline-flex min-h-11 items-center gap-2 rounded-full bg-copper px-5 text-sm font-semibold text-paper hover:bg-copper-ink",
					children: ["Size it to your house", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4",
						"aria-hidden": true
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "tap inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold text-copper-ink",
					children: "Back to the guide"
				})]
			})
		]
	});
}
function SystemPage() {
	const { system } = Route.useParams();
	if (!isSystemId(system)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-5 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl text-ink",
			children: "That page isn’t in the guide."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-copper-ink",
			children: "Back to the field guide"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemView, { systemId: system });
}
//#endregion
export { SystemPage as component };
