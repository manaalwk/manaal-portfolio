import { Pill } from "./ui";
import { ArrowUpRight } from "lucide-react";

export function Card({
  title,
  description,
  tags,
  href,
  meta
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
  meta?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>
            {meta ? <span className="text-xs text-white/45">{meta}</span> : null}
          </div>
          <p className="mt-2 text-sm text-white/70">{description}</p>
        </div>
        <ArrowUpRight size={18} className="mt-1 opacity-0 transition group-hover:opacity-90" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </a>
  );
}
