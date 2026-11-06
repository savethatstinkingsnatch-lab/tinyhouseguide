import { createFileRoute } from "@tanstack/react-router";
import { NotePage } from "@/components/note-page";

export const Route = createFileRoute("/trailer")({
  component: TrailerPage,
  head: () => ({
    meta: [{ title: "Trailer, weight, and towing — Tiny Houses: Service Wall" }],
  }),
});

function TrailerPage() {
  return (
    <NotePage
      kicker="Stub"
      title="Trailer, weight, and towing"
      blocks={[
        {
          items: [
            "Structure, axles, and towing are mostly outside this volume. Still: the trailer’s axle and tire ratings must cover the finished house, water, propane, and belongings.",
            "Water alone is about 8.3 pounds per gallon. The planner shows full-tank weight for a reason.",
            "Match the tow vehicle, hitch, brakes, and lights to the loaded trailer. Learn from a qualified trailer dealer or driving course. Do not guess.",
            "Before a highway trip: check tire pressure, lug nuts, lights, chains, and that nothing under the belly can drag.",
          ],
        },
      ]}
    />
  );
}
