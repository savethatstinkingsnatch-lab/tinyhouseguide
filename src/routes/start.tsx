import { createFileRoute, Link } from "@tanstack/react-router";
import { NotePage } from "@/components/note-page";

export const Route = createFileRoute("/start")({
  component: StartPage,
  head: () => ({
    meta: [{ title: "Start here — Tiny Houses: Service Wall" }],
  }),
});

const steps = [
  "Call planning and building where you will live.",
  "Decide trailer (RV rules) or foundation (dwelling rules).",
  "Draw one wet wall for water, power, and heat.",
  "Run the planner for tanks, cord, and heater size.",
  "Hire licensed help for gas and service gear.",
  "Install smoke, CO, and propane alarms.",
  "Test for leaks and cold nights before you move in.",
];

function StartPage() {
  return (
    <NotePage
      kicker="Volume 24"
      title="New to tiny houses?"
      blocks={[{ ordered: true, items: steps }]}
    >
      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Read next">
        <Link to="/before" className="tap inline-flex min-h-11 items-center rounded-full bg-card px-4 text-sm font-semibold text-ink shadow-card">
          Before you build
        </Link>
        <Link to="/trailer" className="tap inline-flex min-h-11 items-center rounded-full bg-card px-4 text-sm font-semibold text-ink shadow-card">
          Trailer and towing
        </Link>
        <Link to="/egress" className="tap inline-flex min-h-11 items-center rounded-full bg-card px-4 text-sm font-semibold text-ink shadow-card">
          Egress and fire
        </Link>
        <Link to="/glossary" className="tap inline-flex min-h-11 items-center rounded-full bg-card px-4 text-sm font-semibold text-ink shadow-card">
          Glossary
        </Link>
        <Link to="/planner" className="tap inline-flex min-h-11 items-center rounded-full bg-copper px-4 text-sm font-semibold text-paper">
          Open the planner
        </Link>
      </nav>
    </NotePage>
  );
}
