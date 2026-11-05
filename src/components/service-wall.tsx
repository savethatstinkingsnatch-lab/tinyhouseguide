import { Link } from "@tanstack/react-router";

const zones = [
  {
    title: "Plumbing vent",
    note: "Through the roof, alone",
    system: "plumbing",
    hash: "p-vent",
  },
  {
    title: "Heater exhaust",
    note: "Not the same hole",
    system: "heat",
    hash: "h-place",
  },
  {
    title: "Panel",
    note: "Room to stand in front",
    system: "electric",
    hash: "e-panel",
  },
  {
    title: "Water heater",
    note: "Fuel, or a small tank",
    system: "plumbing",
    hash: "p-fixtures",
  },
  {
    title: "Pump hatch",
    note: "Valves you can reach",
    system: "plumbing",
    hash: "p-hatch",
  },
  {
    title: "Shower valve",
    note: "Interior wall, not the skin",
    system: "plumbing",
    hash: "p-wall",
  },
] as const;

export function ServiceWallDiagram() {
  return (
    <figure className="shadow-card rounded-card bg-card p-4 sm:p-5">
      <div className="flex items-baseline justify-between gap-3">
        <figcaption className="font-display text-2xl text-ink">The service wall</figcaption>
        <p className="text-xs tracking-widest text-muted uppercase">Not to scale</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {zones.map((zone) => (
          <Link
            key={zone.hash}
            to="/systems/$system"
            params={{ system: zone.system }}
            hash={zone.hash}
            className="tap flex min-h-20 flex-col justify-between rounded-xl bg-paper px-3 py-3 transition-colors duration-200 hover:bg-paper-deep"
          >
            <span className="text-sm font-semibold text-ink">{zone.title}</span>
            <span className="text-xs leading-snug text-muted">{zone.note}</span>
          </Link>
        ))}
      </div>
      <div className="mt-2 rounded-xl border border-dashed border-line bg-paper px-3 py-3">
        <Link
          to="/systems/$system"
          params={{ system: "plumbing" }}
          hash="p-tanks"
          className="flex items-baseline justify-between gap-3"
        >
          <span className="text-sm font-semibold">Belly · tanks between the axles</span>
          <span className="text-xs text-copper-ink">Fresh, grey, black</span>
        </Link>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        One chase near mid-trailer. Water on the wall, the panel beside it, heat
        exhausted on its own path, weight low and centered.
      </p>
    </figure>
  );
}
