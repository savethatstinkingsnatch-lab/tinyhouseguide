import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/components/home-view";

export const Route = createFileRoute("/")({
  component: HomeView,
  head: () => ({
    meta: [{ title: "Service Wall — tiny house plumbing, power, and heat" }],
  }),
});
