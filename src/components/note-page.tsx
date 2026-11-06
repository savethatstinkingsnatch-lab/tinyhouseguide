import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type NoteBlock = {
  heading?: string;
  items: string[];
  ordered?: boolean;
};

export function NotePage({
  kicker,
  title,
  blocks,
  children,
}: {
  kicker: string;
  title: string;
  blocks: NoteBlock[];
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 pt-8 pb-4">
      <p className="text-sm font-semibold tracking-widest text-copper-ink uppercase">{kicker}</p>
      <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">{title}</h1>
      <div className="mt-8 space-y-10">
        {blocks.map((block) => {
          const List = block.ordered ? "ol" : "ul";
          return (
            <section key={block.heading ?? block.items[0]}>
              {block.heading ? (
                <h2 className="font-display text-3xl text-ink">{block.heading}</h2>
              ) : null}
              <List className={block.heading ? "mt-4" : undefined}>
                {block.items.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-line py-4 text-base leading-relaxed"
                  >
                    <span className="font-display text-xl text-copper tabular-nums">
                      {block.ordered ? index + 1 : String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </List>
            </section>
          );
        })}
      </div>
      {children}
      <p className="mt-10">
        <Link to="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-copper-ink">
          Back to the guide
        </Link>
      </p>
    </main>
  );
}
