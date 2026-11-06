import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/glossary")({
  component: GlossaryPage,
  head: () => ({
    meta: [{ title: "Glossary — Tiny Houses: Service Wall" }],
  }),
});

const terms = [
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
  ["CO", "carbon monoxide."],
] as const;

function GlossaryPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pt-8 pb-4">
      <p className="text-sm font-semibold tracking-widest text-copper-ink uppercase">Terms</p>
      <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Glossary</h1>
      <dl className="mt-8">
        {terms.map(([term, meaning]) => (
          <div key={term} className="border-t border-line py-4">
            <dt className="font-display text-2xl text-ink">{term}</dt>
            <dd className="mt-1 text-base leading-relaxed text-muted">{meaning}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-10">
        <Link to="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-copper-ink">
          Back to the guide
        </Link>
      </p>
    </main>
  );
}
