import { createFileRoute } from "@tanstack/react-router";
import { NotePage } from "@/components/note-page";

export const Route = createFileRoute("/before")({
  component: BeforePage,
  head: () => ({
    meta: [{ title: "Before you build — Tiny Houses: Service Wall" }],
  }),
});

function BeforePage() {
  return (
    <NotePage
      kicker="Zoning and legal reality"
      title="Before you build"
      blocks={[
        {
          items: [
            "Talk to the county or city planning and building offices BEFORE you buy land, a trailer, or a kit. Ask what is legal to live in, where, and for how long.",
            "Zoning decides if you can live on the lot. Building codes decide how the house must be built. A camping stay and a permanent home are different permissions.",
            "A tiny house on a trailer is often treated like an RV. The same house on a foundation is usually a dwelling. Those are different rulebooks for power, energy, and inspections.",
            "Do not rely on shed, barn, or 'agricultural building' loopholes to live in a structure. People get fined, ordered to move, or denied utilities. Get it in writing.",
            "This guide is not a permit, not an inspection, and not a lawyer.",
          ],
        },
        {
          heading: "Loans and insurance",
          items: [
            "Many banks will not mortgage a tiny house on a trailer the way they mortgage a site-built house. Insurance can also be hard, especially with wood stoves or nonstandard builds. Ask insurers and lenders early, before you spend the build budget.",
          ],
        },
      ]}
    />
  );
}
