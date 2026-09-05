import type { Metadata } from "next";
import Image from "next/image";
import { getLeadershipProfiles, getPageContent } from "@/lib/wordpress/client";
import { pageField, pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("leadership"), "/leadership");
}

export default async function LeadershipPage() {
  const [page, profiles] = await Promise.all([getPageContent("leadership"), getLeadershipProfiles()]);

  const executives = profiles.filter((p) => p.leadership_group === "executive");
  const divisionHeads = profiles.filter((p) => p.leadership_group === "division-head");

  return (
    <main className="bg-tlg-midnight text-white min-h-screen">
      {/* ── CINEMATIC HERO ── */}
      <section className="relative flex flex-col justify-end min-h-[55vh] pt-40 pb-16 px-6 md:px-16 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-tlg-midnight via-[#0d1f1a] to-tlg-midnight opacity-95" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gold accent bar */}
        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-tlg-signatureGold to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <span className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block animate-reveal-up">
            {pageField(page, "hero_eyebrow") || "The People Behind The Mission"}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-tight max-w-4xl">
            {pageField(page, "hero_title") || (
              <>
                Our
                <em className="not-italic text-tlg-signatureGold"> Leadership</em>
              </>
            )}
          </h1>
          {pageField(page, "hero_description") && (
            <p className="text-white/60 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
              {pageField(page, "hero_description")}
            </p>
          )}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-16 bg-tlg-signatureGold/50" />
            <span className="text-white/40 text-xs uppercase tracking-widest font-bold">
              {profiles.length} Leader{profiles.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE LEADERSHIP — HORIZONTAL SCROLL PANELS ── */}
      {executives.length > 0 && (
        <section className="border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-20 pb-8">
            <div className="flex items-center gap-5 mb-12">
              <span className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.5em]">01</span>
              <h2 className="text-2xl md:text-3xl font-serif">Executive Leadership</h2>
              <div className="flex-1 h-px bg-white/10 ml-4" />
            </div>
          </div>

          {/* Horizontal scroll container */}
          <div className="relative">
            <div
              className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {executives.map((profile, i) => (
                <LeaderPanel key={profile.slug} profile={profile} index={i} total={executives.length} />
              ))}
            </div>
            {/* Scroll hint */}
            {executives.length > 1 && (
              <div className="flex items-center justify-center gap-3 py-8 text-white/30 text-xs font-bold uppercase tracking-widest">
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="opacity-50">
                  <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Scroll to explore
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── DIVISION LEADERSHIP — GRID ── */}
      {divisionHeads.length > 0 && (
        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex items-center gap-5 mb-16">
              <span className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.5em]">02</span>
              <h2 className="text-2xl md:text-3xl font-serif">Division Leadership</h2>
              <div className="flex-1 h-px bg-white/10 ml-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {divisionHeads.map((profile) => (
                <DivisionCard key={profile.slug} profile={profile} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EMPTY STATE ── */}
      {profiles.length === 0 && (
        <section className="py-40 text-center text-white/40 text-lg">
          Leadership profiles will be published after review.
        </section>
      )}

      {/* ── CLOSING CTA ── */}
      <section className="border-t border-white/10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Work With Us</p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-lg">
              Ready to connect with our team?
            </h2>
          </div>
          <a
            href="/contact?book=true"
            className="shrink-0 inline-flex items-center gap-3 bg-tlg-signatureGold text-tlg-midnight px-9 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
          >
            Book a Consultation
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
              <path d="M1 5h11M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}

/* ─────────────────────────────────────
   Executive Full-Screen Horizontal Panel
───────────────────────────────────────*/
function LeaderPanel({
  profile,
  index,
  total,
}: {
  profile: import("@/lib/wordpress/client").LeadershipProfile;
  index: number;
  total: number;
}) {
  return (
    <article
      className="group relative shrink-0 w-[92vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] snap-start snap-always"
      style={{ minHeight: "75vh" }}
    >
      <div className="relative h-full flex flex-col lg:flex-row overflow-hidden border-r border-white/10">
        {/* Photo */}
        <div className="relative lg:w-[42%] aspect-[3/4] lg:aspect-auto flex-shrink-0 overflow-hidden bg-tlg-stone/20">
          {profile.photo ? (
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width:1024px) 92vw, 35vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-tlg-midnight to-tlg-emerald/30 flex items-end p-8">
              <span className="text-6xl font-serif text-white/20">{profile.name.charAt(0)}</span>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-tlg-midnight/80" />
          {/* Index badge */}
          <div className="absolute top-6 left-6 w-9 h-9 rounded-full border border-tlg-signatureGold/50 flex items-center justify-center">
            <span className="text-tlg-signatureGold text-[10px] font-bold">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:flex-1 flex flex-col justify-center p-8 md:p-10 lg:p-12 bg-tlg-midnight">
          {/* Name & role */}
          <div className="mb-8">
            <p className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
              {profile.job_title}
            </p>
            <h3 className="text-3xl md:text-4xl font-serif leading-tight">{profile.name}</h3>
            <div className="mt-4 h-px w-12 bg-tlg-signatureGold/40" />
          </div>

          {/* Bio */}
          <div
            className="text-white/70 text-sm leading-relaxed line-clamp-6 mb-8"
            dangerouslySetInnerHTML={{ __html: profile.content }}
          />

          {/* Expertise pills */}
          {profile.core_expertise.length > 0 && (
            <div className="mb-6">
              <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold mb-3">Core Expertise</p>
              <div className="flex flex-wrap gap-2">
                {profile.core_expertise.slice(0, 4).map((e) => (
                  <span
                    key={e}
                    className="px-3 py-1 rounded-full border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-wider"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Qualifications */}
          {profile.qualifications.length > 0 && (
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold mb-3">Qualifications</p>
              <ul className="space-y-1">
                {profile.qualifications.slice(0, 3).map((q) => (
                  <li key={q} className="text-white/50 text-xs leading-relaxed flex gap-2">
                    <span className="text-tlg-signatureGold/60 mt-[3px] shrink-0">—</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* LinkedIn */}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-white/40 hover:text-tlg-signatureGold transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn Profile
            </a>
          )}
        </div>
      </div>

      {/* Panel counter */}
      <div className="absolute bottom-6 right-8 text-white/20 text-xs font-bold tracking-widest">
        {index + 1} / {total}
      </div>
    </article>
  );
}

/* ─────────────────────────────────────
   Division Leader Card
───────────────────────────────────────*/
function DivisionCard({
  profile,
}: {
  profile: import("@/lib/wordpress/client").LeadershipProfile;
}) {
  return (
    <article className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-tlg-signatureGold/40 transition-colors duration-500">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-tlg-stone/10">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-tlg-midnight to-tlg-emerald/20">
            <span className="text-5xl font-serif text-white/20">{profile.name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/20 to-transparent" />
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="text-tlg-signatureGold text-[9px] font-bold uppercase tracking-[0.4em] mb-2">
          {profile.job_title}
        </p>
        <h3 className="text-lg font-serif leading-snug">{profile.name}</h3>

        {profile.core_expertise.length > 0 && (
          <p className="text-white/40 text-[11px] mt-3 leading-relaxed">
            {profile.core_expertise.slice(0, 2).join(" · ")}
          </p>
        )}

        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-white/25 hover:text-tlg-signatureGold transition-colors text-[10px] font-bold uppercase tracking-widest"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        )}
      </div>

      {/* Hover gold accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-tlg-signatureGold group-hover:w-full transition-all duration-500" />
    </article>
  );
}
