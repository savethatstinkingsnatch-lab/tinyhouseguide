import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { systemOrder, systems, type SystemId } from "@/lib/guide-data";
import { useGuideStore } from "@/lib/store";

export function SystemView({ systemId }: { systemId: SystemId }) {
  const guide = systems[systemId];
  const done = useGuideStore((state) => state.done);
  const toggle = useGuideStore((state) => state.toggle);
  const [phaseId, setPhaseId] = useState(guide.phases[0]?.id ?? "decide");
  const phase = guide.phases.find((item) => item.id === phaseId) ?? guide.phases[0];
  const steps = guide.phases.flatMap((item) => item.steps);
  const complete = steps.filter((step) => done[step.id]).length;
  const index = systemOrder.indexOf(systemId);
  const next = systemOrder[index + 1];

  useEffect(() => {
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

  return (
    <main className="mx-auto max-w-3xl px-5 pt-8 pb-4">
      <p className="text-sm font-semibold tracking-widest text-copper-ink uppercase">{guide.kicker}</p>
      <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">{guide.name}</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink">{guide.summary}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink">
        These checks are not an engineered plan and not code approval.
      </p>
      <p className="mt-3 text-sm tabular-nums text-muted">
        {complete} of {steps.length} field checks
      </p>

      <div
        className="sticky top-16 z-20 -mx-5 mt-8 border-y border-line bg-paper/95 px-5 py-3 backdrop-blur-md"
        role="tablist"
        aria-label="Phases"
      >
        <div className="flex gap-2 overflow-x-auto">
          {guide.phases.map((item) => {
            const selected = item.id === phase.id;
            const phaseDone = item.steps.filter((step) => done[step.id]).length;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`${item.label}, ${phaseDone} of ${item.steps.length}`}
                onClick={() => {
                  setPhaseId(item.id);
                  document.getElementById("phase-lead")?.scrollIntoView({ block: "start" });
                }}
                className={cn(
                  "tap min-h-11 shrink-0 rounded-full px-4 text-sm font-medium transition-colors duration-200",
                  selected ? "bg-ink text-paper" : "bg-card text-ink shadow-card",
                )}
              >
                {item.label}
                <span className={cn("ml-2 tabular-nums", selected ? "text-paper" : "text-muted")}>
                  {phaseDone}/{item.steps.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p id="phase-lead" className="mt-6 scroll-mt-36 text-base leading-relaxed text-muted">{phase.lead}</p>

      <div className="mt-2" role="tabpanel">
        {phase.steps.map((step, stepIndex) => {
          const checked = !!done[step.id];
          return (
            <article key={step.id} id={step.id} className="scroll-mt-36 border-b border-line py-8">
              <p className="font-display text-sm text-copper tabular-nums">
                {String(stepIndex + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">{step.title}</h2>
              <p className="mt-3 text-base leading-relaxed">{step.body}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="border-l-2 border-copper pl-4">
                  <p className="text-xs font-semibold tracking-widest text-copper-ink uppercase">Why</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">{step.why}</p>
                </div>
                <div className="border-l-2 border-pine pl-4">
                  <p className="text-xs font-semibold tracking-widest text-pine uppercase">Watch</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">{step.watch}</p>
                </div>
              </div>
              <label className="mt-5 flex min-h-11 cursor-pointer items-center gap-3 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(step.id)}
                  className="size-5 accent-pine"
                />
                {checked ? "Marked done" : "Mark this done"}
              </label>
            </article>
          );
        })}
      </div>

      <section className="mt-10">
        <h2 className="font-display text-3xl text-ink">What to have on the bench</h2>
        <ul className="mt-4">
          {guide.kit.map((item) => (
            <li key={item} className="flex gap-3 border-t border-line py-3 text-sm leading-relaxed">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-copper" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        {next ? (
          <Link
            to="/systems/$system"
            params={{ system: next }}
            className="tap inline-flex min-h-11 items-center gap-2 rounded-full bg-copper px-5 text-sm font-semibold text-paper hover:bg-copper-ink"
          >
            Next: {systems[next].name}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        ) : (
          <Link
            to="/planner"
            className="tap inline-flex min-h-11 items-center gap-2 rounded-full bg-copper px-5 text-sm font-semibold text-paper hover:bg-copper-ink"
          >
            Size it to your house
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        )}
        <Link
          to="/"
          className="tap inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold text-copper-ink"
        >
          Back to the guide
        </Link>
      </div>
    </main>
  );
}
