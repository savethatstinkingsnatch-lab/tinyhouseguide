import { createFileRoute } from "@tanstack/react-router";
import { PlannerView } from "@/components/planner-view";

export const Route = createFileRoute("/planner")({
  component: PlannerView,
  head: () => ({
    meta: [{ title: "Size the systems — Service Wall" }],
  }),
});
