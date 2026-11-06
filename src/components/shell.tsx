import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Droplets, Flame, ListChecks, Ruler, Zap } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/cn";
import { useGuideStore } from "@/lib/store";

const links = [
  { to: "/start", label: "Start", icon: ListChecks, exact: true },
  { to: "/", label: "Guide", icon: BookOpen, exact: true },
  { to: "/systems/$system", params: { system: "plumbing" }, label: "Water", icon: Droplets },
  { to: "/systems/$system", params: { system: "electric" }, label: "Power", icon: Zap },
  { to: "/systems/$system", params: { system: "heat" }, label: "Heat", icon: Flame },
  { to: "/planner", label: "Size", icon: Ruler },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    void useGuideStore.persist.rehydrate();
  }, []);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
            Tiny Houses: Service Wall
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                params={"params" in link ? link.params : undefined}
                activeOptions={{ exact: "exact" in link ? link.exact : true }}
                className="flex min-h-11 items-center rounded-full px-3 text-sm font-medium transition-colors duration-200"
                activeProps={{ className: "bg-ink text-paper" }}
                inactiveProps={{ className: "text-ink hover:bg-paper-deep" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <footer className="mx-auto max-w-6xl px-5 py-12">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          A planning guide, not a permit and not a code book. Trailer houses are often
          reviewed as RVs. Houses on a foundation are dwellings, with different rules for
          the service, AFCI, and energy. Gas work, the electrical service, and structure
          may require a license where you live. Your inspector’s reading wins. Blue and
          the Awesome Dudes are not responsible for fines, failed inspections, fire,
          carbon monoxide, water damage, or injury. Part of The Education Revolution
          pocket guide series. Privacy: This guide does not collect your name, email, or
          any personal information. Your checklist marks are saved only on your own device.
        </p>
      </footer>
      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 backdrop-blur-md md:hidden"
        aria-label="Sections"
      >
        <ul className="grid grid-cols-6">
          {links.map((link) => {
            const Icon = link.icon;
            const href =
              "params" in link ? `/systems/${link.params.system}` : link.to;
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href;
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  params={"params" in link ? link.params : undefined}
                  className={cn(
                    "flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-medium",
                    active ? "text-copper-ink" : "text-muted",
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
