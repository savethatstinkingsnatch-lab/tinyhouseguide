import { Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Flame, Zap } from "lucide-react";
import { buildOrder, collisions, stepsFor, systemOrder, systems } from "@/lib/guide-data";
import { cn } from "@/lib/cn";
import { useGuideStore } from "@/lib/store";
import { ServiceWallDiagram } from "@/components/service-wall";

const icons = { plumbing: Droplets, electric: Zap, heat: Flame } as const;

export function HomeView() {
  const done = useGuideStore((state) => state.done);
  const toggle = useGuideStore((state) => state.toggle);
  const resetChecks = useGuideStore((state) => state.resetChecks);
  const buildDone = buildOrder.filter((item) => done[item.id]).length;
  const anyDone = Object.values(done).some(Boolean);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-10 pb-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:pt-16">
        <div>
          <p className="rise text-sm font-semibold tracking-widest text-copper-ink uppercase">
            Field guide
          </p>
          <h1 className="rise rise-2 mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">
            Put water, power, and heat on one wall.
          </h1>
          <p className="rise rise-3 mt-5 max-w-xl text-lg leading-relaxed text-ink">
            A tiny house goes together around that wall. This is the rough-in order,
            the mistakes that rot a trailer, and a planner that sizes the tank, the
            cord, and the heater to your floor plan.
          </p>
          <div className="rise rise-3 mt-7 flex flex-wrap gap-3">
            <Link
              to="/planner"
              className="tap inline-flex min-h-11 items-center gap-2 rounded-full bg-copper px-5 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-copper-ink"
            >
              Size the systems
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/systems/$system"
              params={{ system: "plumbing" }}
              className="tap inline-flex min-h-11 items-center rounded-full bg-card px-5 text-sm font-semibold text-ink shadow-card"
            >
              Start with water
            </Link>
          </div>
        </div>
        <div className="rise rise-3">
          <ServiceWallDiagram />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-3 md:grid-cols-3">
          {systemOrder.map((id) => {
            const system = systems[id];
            const Icon = icons[id];
            const steps = stepsFor(id);
            const complete = steps.filter((step) => done[step.id]).length;
            const ratio = complete / steps.length;
            return (
              <Link
                key={id}
                to="/systems/$system"
                params={{ system: id }}
                className="tap shadow-card flex min-h-44 flex-col rounded-card bg-card p-5 transition-shadow duration-200"
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className="size-5 text-copper-ink" aria-hidden />
                  <span className="text-sm tabular-nums text-muted">
                    {complete}/{steps.length}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-3xl text-ink">{system.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{system.promise}</p>
                <div className="mt-5 h-1 overflow-hidden rounded-full bg-paper-deep" aria-hidden>
                  <div className="h-full bg-copper" style={{ width: `${ratio * 100}%` }} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">Where the three collide</h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Most failures are not mysterious. They are two trades asked to share a hole,
            a closet, or a cold belly.
          </p>
        </div>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {collisions.map((item, index) => (
            <li key={item.title}>
              <Link
                to="/systems/$system"
                params={{ system: item.system }}
                hash={item.hash}
                className="grid gap-2 py-5 transition-colors duration-200 hover:bg-paper-deep/70 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6 sm:px-2"
              >
                <span className="font-display text-xl text-copper tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-2xl text-ink">{item.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{item.body}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Build order</h2>
            <p className="mt-2 text-sm tabular-nums text-muted">
              {buildDone} of {buildOrder.length} marked
            </p>
          </div>
          {anyDone ? (
            <button
              type="button"
              onClick={resetChecks}
              className="tap min-h-11 rounded-full px-3 text-sm font-medium text-copper-ink"
            >
              Clear all checks
            </button>
          ) : null}
        </div>
        <ol className="mt-6 grid gap-3 md:grid-cols-2">
          {buildOrder.map((item, index) => {
            const checked = !!done[item.id];
            return (
              <li key={item.id}>
                <label
                  className={cn(
                    "shadow-card flex min-h-24 cursor-pointer gap-4 rounded-card bg-card p-4 transition-colors duration-200",
                    checked && "bg-paper-deep",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(item.id)}
                    className="mt-1 size-5 shrink-0 accent-pine"
                  />
                  <span>
                    <span className="block text-xs font-semibold tracking-widest text-copper-ink uppercase tabular-nums">
                      Step {index + 1}
                    </span>
                    <span className="mt-1 block font-medium text-ink">{item.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{item.detail}</span>
                  </span>
                </label>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6">
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Structure, the trailer itself, and finishes sit outside this book. The systems
          fail in predictable ways. Those are the pages.
        </p>
      </section>
    </main>
  );
}
