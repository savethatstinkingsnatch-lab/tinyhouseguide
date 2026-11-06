import { createFileRoute } from "@tanstack/react-router";
import { NotePage } from "@/components/note-page";

export const Route = createFileRoute("/egress")({
  component: EgressPage,
  head: () => ({
    meta: [{ title: "Egress and fire — Tiny Houses: Service Wall" }],
  }),
});

function EgressPage() {
  return (
    <NotePage
      kicker="Stub"
      title="Egress and fire"
      blocks={[
        {
          items: [
            "Sleeping lofts need a legal way out. Many codes want a window big enough to escape through, and a path that is not only a steep ladder in a fire. Ask your inspector before you frame the loft.",
            "Keep a working smoke alarm and carbon monoxide alarm. Add a propane alarm if you carry propane. Keep a fire extinguisher by the cook area.",
            "Snow and wind loads on the roof and walls are a structural design problem. Use an engineer or a code-compliant plan for your climate. This systems guide does not size beams.",
          ],
        },
      ]}
    />
  );
}
