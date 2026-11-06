import { createFileRoute, Link } from "@tanstack/react-router";
import { SystemView } from "@/components/system-view";
import { isSystemId, systems } from "@/lib/guide-data";

export const Route = createFileRoute("/systems/$system")({
  component: SystemPage,
  head: ({ params }) => ({
    meta: [
      {
        title: isSystemId(params.system)
          ? `${systems[params.system].name} — Tiny Houses: Service Wall`
          : "Tiny Houses: Service Wall",
      },
    ],
  }),
});

function SystemPage() {
  const { system } = Route.useParams();
  if (!isSystemId(system)) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-4xl text-ink">That page isn’t in the guide.</h1>
        <Link to="/" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-copper-ink">
          Back to the field guide
        </Link>
      </main>
    );
  }
  return <SystemView systemId={system} />;
}
