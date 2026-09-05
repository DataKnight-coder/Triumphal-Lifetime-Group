import type { Metadata } from "next";
import Image from "next/image";
import { SafeImage } from "@/components/ui/SafeImage";
import { getLeadershipProfiles, getPageContent } from "@/lib/wordpress/client";
import { pageField, pageMetadata } from "@/lib/wordpress/page-content";

export const revalidate = 60; // Revalidate every 60 seconds

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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-tight max-w-4xl !text-white">
            {pageField(page, "hero_title") || (
              <>
                Our
                <em className="not-italic text-tlg-signatureGold"> Leadership</em>
              </>
            )}
          </h1>
          {pageField(page, "hero_description") && (
            <p className="text-lg md:text-xl mt-8 max-w-2xl leading-relaxed !text-white/70">
              {pageField(page, "hero_description")}
            </p>
          )}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-16 bg-tlg-signatureGold/50" />
            <span className="text-[10px] uppercase tracking-widest font-bold !text-white/40">
              {profiles.length} Leader{profiles.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE LEADERSHIP — BENTO GRID ── */}
      {executives.length > 0 && (
        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex items-center gap-5 mb-16">
              <span className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.5em]">01</span>
              <h2 className="text-2xl md:text-3xl font-serif !text-white">Executive Leadership</h2>
              <div className="flex-1 h-px bg-white/10 ml-4" />
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {executives.map((profile) => (
                <ExecutiveBentoCard key={profile.slug} profile={profile} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── DIVISION LEADERSHIP — BENTO GRID ── */}
      {divisionHeads.length > 0 && (
        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex items-center gap-5 mb-16">
              <span className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.5em]">02</span>
              <h2 className="text-2xl md:text-3xl font-serif !text-white">Division Leadership</h2>
              <div className="flex-1 h-px bg-white/10 ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {divisionHeads.map((profile, i) => {
                // A true dynamic Bento Grid logic:
                // Pattern: Wide (2), Square (1), Square (1), Wide (2), Wide (3, full width)
                let spanClass = "lg:col-span-1 md:col-span-1"; 
                let useWideCard = false;

                if (i % 5 === 0) {
                  spanClass = "lg:col-span-2 md:col-span-2";
                  useWideCard = true;
                } else if (i % 5 === 3) {
                  spanClass = "lg:col-span-2 md:col-span-2";
                  useWideCard = true;
                } else if (i % 5 === 4) {
                  spanClass = "lg:col-span-3 md:col-span-2";
                  useWideCard = true;
                }

                // If it's the very last item and it's alone on a row, make it span full to avoid awkward space
                const remainingInRow = (divisionHeads.length - i) % 3;
                if (i === divisionHeads.length - 1) {
                   if (remainingInRow === 1) {
                      spanClass = "lg:col-span-3 md:col-span-2";
                      useWideCard = true;
                   } else if (remainingInRow === 2) {
                      spanClass = "lg:col-span-2 md:col-span-2";
                      useWideCard = true;
                   }
                }

                return (
                  <div key={profile.slug} className={spanClass}>
                    {useWideCard ? (
                      <ExecutiveBentoCard profile={profile} isDivisionBento />
                    ) : (
                      <DivisionCard profile={profile} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── EMPTY STATE ── */}
      {profiles.length === 0 && (
        <section className="py-40 text-center text-lg !text-white/40">
          Leadership profiles will be published after review.
        </section>
      )}

      {/* ── CLOSING CTA ── */}
      <section className="border-t border-white/10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Work With Us</p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-lg !text-white">
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
   Executive Bento Grid Card
───────────────────────────────────────*/
function ExecutiveBentoCard({
  profile,
  isDivisionBento = false,
}: {
  profile: import("@/lib/wordpress/client").LeadershipProfile;
  isDivisionBento?: boolean;
}) {
  return (
    <article className="h-full group relative bg-[#0a1512] border border-white/10 rounded-[32px] overflow-hidden flex flex-col xl:flex-row shadow-2xl hover:border-tlg-signatureGold/30 transition-all duration-700">
      {/* Photo */}
      <div className={`relative w-full ${isDivisionBento ? "xl:w-[40%]" : "xl:w-[45%]"} shrink-0 aspect-[4/3] xl:aspect-auto bg-tlg-stone/10 overflow-hidden`}>
        <SafeImage
          src={profile.photo || ""}
          alt={profile.name}
          fill
          className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width:1280px) 100vw, 35vw"
          fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f1a] to-tlg-midnight flex items-center justify-center p-8">
              <span className="text-6xl font-serif !text-white/10">{profile.name.charAt(0)}</span>
            </div>
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1512] via-transparent to-transparent xl:bg-gradient-to-r xl:from-transparent xl:via-transparent xl:to-[#0a1512]" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center p-8 sm:p-10 z-10">
        <p className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
          {profile.job_title}
        </p>
        <h3 className={`font-serif leading-tight mb-6 !text-white ${isDivisionBento ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}>{profile.name}</h3>
        
        {/* Bio */}
        <div
          className="text-sm leading-relaxed mb-8 !text-white/60 line-clamp-4 prose-p:!text-white/60 prose-p:my-2"
          dangerouslySetInnerHTML={{ __html: profile.content }}
        />

        {/* Expertise pills */}
        {profile.core_expertise.length > 0 && (
          <div className="mt-auto">
            <p className="text-[9px] uppercase tracking-widest font-bold mb-3 !text-white/30">Core Expertise</p>
            <div className="flex flex-wrap gap-2">
              {profile.core_expertise.slice(0, 3).map((e) => (
                <span
                  key={e}
                  className="px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-wider !text-white/50 bg-white/5"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* LinkedIn */}
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors !text-white/40 hover:!text-tlg-signatureGold"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn Profile
          </a>
        )}
      </div>
    </article>
  );
}

/* ─────────────────────────────────────
   Division Leader Card (Square/Portrait)
───────────────────────────────────────*/
function DivisionCard({
  profile,
}: {
  profile: import("@/lib/wordpress/client").LeadershipProfile;
}) {
  return (
    <article className="h-full group relative bg-[#0a1512] border border-white/10 rounded-2xl overflow-hidden hover:border-tlg-signatureGold/40 transition-colors duration-500 shadow-xl flex flex-col">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-tlg-stone/10 shrink-0">
        <SafeImage
          src={profile.photo || ""}
          alt={profile.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0d1f1a] to-tlg-midnight">
              <span className="text-5xl font-serif !text-white/10">{profile.name.charAt(0)}</span>
            </div>
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1512] via-[#0a1512]/40 to-transparent" />
      </div>

      {/* Info */}
      <div className="p-6 relative z-10 flex flex-col flex-1">
        <p className="text-tlg-signatureGold text-[9px] font-bold uppercase tracking-[0.4em] mb-2">
          {profile.job_title}
        </p>
        <h3 className="text-lg font-serif leading-snug !text-white">{profile.name}</h3>

        {profile.core_expertise.length > 0 && (
          <p className="text-[11px] mt-3 leading-relaxed !text-white/50">
            {profile.core_expertise.slice(0, 2).join(" · ")}
          </p>
        )}

        <div className="mt-auto pt-5">
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors !text-white/30 hover:!text-tlg-signatureGold"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* Hover gold accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-tlg-signatureGold group-hover:w-full transition-all duration-500" />
    </article>
  );
}
