import { ArrowUpRight } from "lucide-react";

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      {children}
    </span>
  );
}

export function LinkButton({
  href,
  children,
  variant = "ghost"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/[0.06]";
  return (
    <a className={`${base} ${styles}`} href={href} target={href.startsWith("/") ? undefined : "_blank"} rel="noreferrer">
      {children} <ArrowUpRight size={16} className="opacity-80" />
    </a>
  );
}
