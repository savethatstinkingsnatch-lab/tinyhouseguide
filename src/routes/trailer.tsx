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
            "Water alone is about 8.3 pounds per gallon. The planner can show that water weight. It is not a loaded-trailer weight, not an axle load, not a tongue weight, and not a towing-capacity assessment.",
            "Weigh the finished, loaded rig before you trust a rating. You need the trailer’s total loaded weight, the load on each axle, and the tongue weight. NHTSA treats tongue weight as part of the tow vehicle’s load, so it counts against the truck’s payload, not only against the trailer.",
            "Compare each measured number with the manufacturer ratings on the trailer, the axles, the tires, the hitch, and the tow vehicle: GVWR, GAWR, tire load, hitch rating, payload, and tow rating. A rating that covers the empty house does not cover water, propane, and belongings.",
            "Match the tow vehicle, hitch, brakes, and lights to the loaded trailer. Learn from a qualified trailer dealer or driving course. Do not guess.",
            "Before a highway trip: check tire pressure, lug nuts, lights, chains, and that nothing under the belly can drag.",
          ],
        },
      ]}
    />
  );
}
