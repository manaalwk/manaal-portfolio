import { site, projects, skills, experience, writeups } from "@/content/site";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { LinkButton, Pill } from "@/components/ui";
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm text-white/70 hover:text-white">
          {site.name}
        </a>
        <nav className="flex items-center gap-5 text-sm text-white/65">
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#security">Security</a>
          <a className="hover:text-white" href="#experience">Experience</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function Page() {
  const web3 = projects.filter((p) => p.kind === "web3");
  const web2 = projects.filter((p) => p.kind === "web2");

  return (
    <main className="min-h-screen bg-black text-white">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[10%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-10">
        <FadeIn>
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{site.name}</h1>
                <p className="mt-2 text-white/70">{site.headline}</p>
                <p className="mt-4 max-w-2xl text-white/70">{site.bio}</p>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-white/60">
                  <span className="inline-flex items-center gap-2 text-sm">
                    <MapPin size={16} /> {site.location}
                  </span>
                  <a className="inline-flex items-center gap-2 text-sm hover:text-white" href={`mailto:${site.email}`}>
                    <Mail size={16} /> {site.email}
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <LinkButton href={site.links.resume} variant="primary">
                    <FileText size={16} /> Resume
                  </LinkButton>
                  <LinkButton href={site.links.github}>
                    <Github size={16} /> GitHub
                  </LinkButton>
                  <LinkButton href={site.links.linkedin}>
                    <Linkedin size={16} /> LinkedIn
                  </LinkButton>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Pill>Open to roles</Pill>
                  <Pill>Smart contract security</Pill>
                  <Pill>Full‑stack</Pill>
                  <Pill>Web3 x AI</Pill>
                </div>
              </div>

              <div className="md:text-right">
                <div className="text-sm text-white/55">Quick intro</div>
                <div className="mt-2 text-sm text-white/70">
                  I like security work that’s concrete: clear impact, reproducible PoCs, and fixes that ship.
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <Section
          id="skills"
          title="Skills"
          subtitle="A focused snapshot of what I use to ship products and security work."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm font-semibold text-white/85">{group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <Pill key={it}>{it}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="On-chain web3 projects and web2 products."
        >
          <div className="grid gap-10">
            <div>
              <div className="mb-3 text-sm text-white/60">Web3</div>
              <div className="grid gap-4 md:grid-cols-2">
                {web3.map((p) => (
                  <Card
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    tags={p.tags}
                    href={p.href}
                    meta={p.year}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm text-white/60">Web2</div>
              <div className="grid gap-4 md:grid-cols-2">
                {web2.map((p) => (
                  <Card
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    tags={p.tags}
                    href={p.href}
                    meta={p.year}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold">More work</div>
              <p className="mt-2 text-sm text-white/70">
                My GitHub is the source of truth for repos and experiments.
              </p>
              <div className="mt-4">
                <LinkButton href={site.links.github}>Browse GitHub</LinkButton>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="security"
          title="Security writeups"
          subtitle="Other submissions include submission which are not accepted and needs to be updated"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {writeups.map((w) => (
              <div key={w.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold">{w.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                    {w.severity}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70">{w.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {w.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 text-xs text-white/50">
                  https://code4rena.com/audits/2025-10-reflector-v3/submissions/S-697
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-base font-semibold">Other submissions</div>
              <p className="mt-3 text-sm text-white/70">
                Needs to be updated.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Submitted</Pill>
                <Pill>Pending</Pill>
                <Pill>Not accepted</Pill>
              </div>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience" subtitle="Highlights pulled from my resume and research work.">
          <div className="grid gap-4">
            {experience.map((e) => (
              <div key={e.role + e.org} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div className="text-base font-semibold">
                    {e.role} <span className="text-white/55">— {e.org}</span>
                  </div>
                  <div className="text-sm text-white/55">{e.year}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Fastest way to reach me.">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold">Let’s build.</div>
                <p className="mt-2 max-w-xl text-sm text-white/70">
                  If you’re hiring for smart contract security, Web3 product engineering, or Web3 x AI roles — I’d love to talk.
                </p>
                <div className="mt-4 text-sm text-white/70">
                  <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
                  <span className="text-white/35"> · </span>
                  <span className="text-white/55">{site.phone}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <LinkButton href={`mailto:${site.email}`} variant="primary">
                  <Mail size={16} /> Email me
                </LinkButton>
                <LinkButton href={site.links.linkedin}>
                  <Linkedin size={16} /> LinkedIn
                </LinkButton>
              </div>
            </div>
          </div>

          <footer className="mt-10 pb-10 text-center text-xs text-white/45">
            © {new Date().getFullYear()} {site.name}. Built with Next.js + Tailwind.
          </footer>
        </Section>
      </div>
    </main>
  );
}
