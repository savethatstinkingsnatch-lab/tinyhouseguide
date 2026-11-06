import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/components/home-view";

export const Route = createFileRoute("/")({
  component: HomeView,
  head: () => ({
    meta: [{ title: "Tiny Houses: Service Wall — plumbing, power, and heat" }],
  }),
});
