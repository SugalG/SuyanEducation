"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  Tag,
  ExternalLink,
  BookOpen,
  Globe,
  Sparkles,
  ChevronRight,
} from "lucide-react";

/**
 * IMPORTANT (Images):
 * This page uses Unsplash "source" URLs for fast, good-looking placeholders.
 * If you use next/image with remote images, allow domains in next.config.js:
 *   images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }, { protocol:"https", hostname:"source.unsplash.com" }] }
 *
 * Later: swap these to Cloudinary URLs (recommended).
 */

const COUNTRIES = [
  { key: "all", label: "All", pin: "🌍" },
  { key: "japan", label: "Japan", pin: "🇯🇵" },
  { key: "uk", label: "UK", pin: "🇬🇧" },
  { key: "germany", label: "Germany", pin: "🇩🇪" },
  { key: "finland", label: "Finland", pin: "🇫🇮" },
  { key: "italy", label: "Italy", pin: "🇮🇹" },
  { key: "spain", label: "Spain", pin: "🇪🇸" },
  { key: "malta", label: "Malta", pin: "🇲🇹" },
];

const CATEGORIES = [
  "Admissions",
  "Visas",
  "Scholarships",
  "Costs",
  "Work Rights",
  "Student Life",
  "Language",
];

/**
 * Curated, ORIGINAL content:
 * - Titles/excerpts are written from scratch (no copying).
 * - "sources" are official/reputable links you can show as citations on each post.
 */
const POSTS = [
  // FINLAND
  {
    id: "fi-01",
    country: "finland",
    category: "Admissions",
    title: "Study in Finland: How Applications Work (Joint vs Separate)",
    excerpt:
      "Finland’s Studyinfo portal is the starting point for most degrees. Learn the difference between joint application and separate application, and how to plan your intake timeline.",
    readTime: "6 min",
    date: "2026-01-06",
    image:
      "https://source.unsplash.com/featured/1200x800?finland,helsinki,university",
    tags: ["Studyinfo", "Intakes", "Eligibility"],
    sources: [
      {
        label: "Studyinfo — Admissions basics",
        href: "https://www.studyinfinland.fi/admissions/bachelors-and-masters-admissions",
      },
      {
        label: "Studyinfo — Joint application",
        href: "https://opintopolku.fi/konfo/en/sivu/joint-application-to-higher-education",
      },
    ],
    featured: true,
  },
  {
    id: "fi-02",
    country: "finland",
    category: "Visas",
    title: "Finland Student Residence Permit: What to Prepare Early",
    excerpt:
      "Non-EU students typically need a residence permit for studies. Here’s what to gather early—funding proof, admission documents, timelines—and how this affects your start date planning.",
    readTime: "7 min",
    date: "2026-01-05",
    image:
      "https://source.unsplash.com/featured/1200x800?finland,student,passport",
    tags: ["Residence Permit", "Timeline"],
    sources: [
      {
        label: "Studyinfo note on residence permits",
        href: "https://opintopolku.fi/konfo/en/sivu/how-to-apply-in-joint-application-to-higher-education",
      },
    ],
  },

  // UK
  {
    id: "uk-01",
    country: "uk",
    category: "Visas",
    title: "UK Student Visa (CAS → Visa → Arrival): The Practical Sequence",
    excerpt:
      "The UK process becomes easy when you treat it as a sequence: offer → CAS → funds → visa → arrival prep. This guide breaks the steps into a checklist you can actually follow.",
    readTime: "8 min",
    date: "2026-01-04",
    image: "https://source.unsplash.com/featured/1200x800?london,university",
    tags: ["CAS", "UKVI", "Checklist"],
    sources: [
      {
        label: "British Council — Student visas overview",
        href: "https://study-uk.britishcouncil.org/moving-uk/student-visas",
      },
      {
        label: "British Council — How to apply",
        href: "https://study-uk.britishcouncil.org/plan-studies/apply",
      },
    ],
    featured: true,
  },

  // GERMANY
  {
    id: "de-01",
    country: "germany",
    category: "Visas",
    title: "Germany Student Visa: Key Documents Students Usually Miss",
    excerpt:
      "Germany is document-driven. We outline the common misses (financial proof format, health insurance, translations) and how to avoid delays at the appointment stage.",
    readTime: "7 min",
    date: "2026-01-03",
    image:
      "https://source.unsplash.com/featured/1200x800?germany,berlin,university",
    tags: ["Blocked Account", "Insurance", "Translations"],
    sources: [
      {
        label: "German Federal Foreign Office — Visa info (overview)",
        href: "https://www.auswaertiges-amt.de/en/",
      },
      {
        label: "DAAD — Study in Germany (starting point)",
        href: "https://www.daad.de/en/",
      },
    ],
  },

  // ITALY
  {
    id: "it-01",
    country: "italy",
    category: "Admissions",
    title: "Italy Intake Planning: When to Start If You Don’t Want to Rush",
    excerpt:
      "Italy admissions and visa steps often overlap. Here’s a timeline approach—shortlisting, document prep, pre-enrollment, and how to keep enough buffer for embassy dates.",
    readTime: "6 min",
    date: "2026-01-02",
    image:
      "https://source.unsplash.com/featured/1200x800?italy,rome,university",
    tags: ["Timeline", "Intakes", "Documents"],
    sources: [
      {
        label: "Universitaly (official portal)",
        href: "https://www.universitaly.it/",
      },
    ],
  },

  // SPAIN
  {
    id: "es-01",
    country: "spain",
    category: "Visas",
    title: "Spain Student Visa: What the Consulate Typically Requires",
    excerpt:
      "Spain student visa requirements can vary slightly by consulate, but the core set stays consistent. We break the checklist down into: identity, admission, financials, and legalizations.",
    readTime: "8 min",
    date: "2026-01-01",
    image:
      "https://source.unsplash.com/featured/1200x800?spain,madrid,university",
    tags: ["Apostille", "Translations", "Checklist"],
    sources: [
      {
        label: "Spanish Embassy/Consulate — Student visa requirements (example)",
        href: "https://www.exteriores.gob.es/Embajadas/dhaka/en/ServiciosConsulares/Paginas/Consular/Visado-de-estudios.aspx",
      },
    ],
    featured: true,
  },

  // MALTA
  {
    id: "mt-01",
    country: "malta",
    category: "Student Life",
    title: "Why Malta Works for Some Students (And When It Doesn’t)",
    excerpt:
      "Malta can be a strong fit depending on your budget, course type, and long-term plan. We cover lifestyle, part-time realities, and what questions to ask before committing.",
    readTime: "5 min",
    date: "2025-12-28",
    image:
      "https://source.unsplash.com/featured/1200x800?malta,valletta,sea",
    tags: ["Lifestyle", "Budget", "Fit"],
    sources: [
      {
        label: "Identity Malta (starting point)",
        href: "https://identita.gov.mt/",
      },
    ],
  },

  // JAPAN (core brand focus)
  {
    id: "jp-01",
    country: "japan",
    category: "Language",
    title: "JLPT Strategy: How to Choose the Right Level and Study Plan",
    excerpt:
      "Choosing N5–N1 depends on your timeline, target school, and visa pathway. Here’s how we map a JLPT plan to your intake and course requirements (without burnout).",
    readTime: "6 min",
    date: "2025-12-25",
    image:
      "https://source.unsplash.com/featured/1200x800?japan,tokyo,study",
    tags: ["JLPT", "Study Plan"],
    sources: [
      { label: "JLPT official site (general)", href: "https://www.jlpt.jp/e/" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Pill({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-4 py-2 rounded-full text-sm font-semibold transition-all border",
        active
          ? "bg-brand-gradient text-white border-transparent shadow-md"
          : "bg-white text-foreground border-subtle hover:bg-accent/40",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}

function CountryChip({ countryKey, label, pin, active, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={[
        "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all",
        active
          ? "bg-brand-gradient text-white border-transparent shadow-md"
          : "bg-white text-foreground border-subtle hover:bg-accent/40",
      ].join(" ")}
      aria-pressed={active}
    >
      <span>{pin}</span>
      <span>{label}</span>
    </button>
  );
}

function PostCard({ post }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group bg-white rounded-2xl border border-subtle overflow-hidden shadow-sm hover:shadow-xl transition-all"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={post.featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-white/40 text-xs font-bold text-foreground">
            <Tag className="w-3.5 h-3.5 text-primary" />
            {post.category}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-white/40 text-xs font-bold text-foreground">
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            {COUNTRIES.find((c) => c.key === post.country)?.label ?? "Global"}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-extrabold leading-tight">
            {post.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-muted leading-relaxed">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-soft-gradient text-foreground border border-subtle"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-5 pt-5 border-t border-subtle">
          <div className="flex items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-secondary" />
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {post.readTime}
            </span>
          </div>

          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-primary font-bold hover:opacity-90"
          >
            Read
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {post.sources?.length ? (
          <div className="mt-4 text-xs text-muted">
            <div className="font-semibold text-foreground mb-2">
              Sources / official references:
            </div>
            <ul className="space-y-1">
              {post.sources.slice(0, 2).map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-secondary"
                    title={s.label}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

function FeaturedCard({ post }) {
  const countryLabel =
    COUNTRIES.find((c) => c.key === post.country)?.label ?? "Global";

  return (
    <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-8">
      <div className="relative rounded-3xl overflow-hidden border border-subtle shadow-xl">
        <div className="relative aspect-[16/11]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-extrabold text-foreground">
                Featured
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-extrabold text-foreground">
                {countryLabel}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-extrabold text-foreground">
                {post.category}
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight">
              {post.title}
            </h2>
            <p className="text-white/90 mt-4 max-w-xl leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white font-extrabold shadow-lg hover:opacity-95"
              >
                Read full guide <ChevronRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/90 backdrop-blur text-foreground font-extrabold border border-white/40 hover:bg-white"
              >
                Free consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-subtle p-8 shadow-lg">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-gradient border border-subtle">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-foreground">
            Curated by Suyan Education
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-extrabold text-foreground">
          What you’ll get in every country guide
        </h3>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Realistic timelines",
              desc: "Intakes, document prep, and buffer planning—so you don’t rush.",
            },
            {
              title: "Visa-ready checklists",
              desc: "Documents, translations, and steps mapped to your destination.",
            },
            {
              title: "Costs & funding",
              desc: "Tuition patterns, living costs, and scholarship opportunities to watch.",
            },
            {
              title: "Work & student life",
              desc: "Practical expectations: part-time reality, housing, and culture fit.",
            },
          ].map((i) => (
            <div
              key={i.title}
              className="p-4 rounded-2xl border border-subtle bg-accent/20 hover:bg-accent/30 transition-colors"
            >
              <div className="font-extrabold text-foreground">{i.title}</div>
              <div className="text-muted mt-1 leading-relaxed">{i.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-brand-gradient text-white shadow-xl">
          <div className="flex items-start gap-3">
            <Globe className="w-6 h-6" />
            <div>
              <div className="font-extrabold">Want country-specific guidance?</div>
              <div className="text-white/90 mt-1 leading-relaxed">
                Tell us your target country + intake. We’ll respond with a clean
                roadmap and checklist.
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-4 font-extrabold underline underline-offset-4 hover:opacity-95"
              >
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const [country, setCountry] = useState("all");
  const [category, setCategory] = useState("All");
  const [q, setQ] = useState("");
  const [visible, setVisible] = useState(9);

  const featured = useMemo(
    () => POSTS.find((p) => p.featured) ?? POSTS[0],
    []
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return POSTS.filter((p) => {
      const matchCountry = country === "all" ? true : p.country === country;
      const matchCategory = category === "All" ? true : p.category === category;
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));

      return matchCountry && matchCategory && matchQuery;
    })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, visible);
  }, [country, category, q, visible]);

  return (
    <main className="relative">
      {/* Soft global background (your site-frame already exists; this is local flavor) */}
      <div className="absolute inset-0 -z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mt-14 h-[260px] rounded-3xl bg-soft-gradient border border-subtle" />
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 mt-24">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-subtle shadow-sm">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-foreground">
              Latest Study Abroad Guides
            </span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Real guidance for{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Japan + Europe
            </span>{" "}
            destinations
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-muted max-w-3xl leading-relaxed">
            Country-by-country blog posts designed like checklists—admissions,
            visas, costs, scholarships, and student life. Always linked to
            official references.
          </p>

          {/* Search bar */}
          <div className="mt-8 bg-white border border-subtle rounded-2xl shadow-lg p-3 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 px-3">
              <Search className="w-5 h-5 text-muted" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search: visa checklist, costs, intakes, scholarships..."
                className="w-full py-3 outline-none text-foreground placeholder:text-muted"
              />
            </div>

            <button
              type="button"
              onClick={() => setVisible(9)}
              className="px-6 py-3 rounded-xl bg-brand-gradient text-white font-extrabold shadow-md hover:opacity-95"
            >
              Search
            </button>
          </div>

          {/* Country filter */}
          <div className="mt-6 flex flex-wrap gap-3">
            {COUNTRIES.map((c) => (
              <CountryChip
                key={c.key}
                countryKey={c.key}
                label={c.label}
                pin={c.pin}
                active={country === c.key}
                onClick={() => {
                  setCountry(c.key);
                  setVisible(9);
                }}
              />
            ))}
          </div>

          {/* Category filter */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill
              active={category === "All"}
              onClick={() => {
                setCategory("All");
                setVisible(9);
              }}
            >
              All topics
            </Pill>
            {CATEGORIES.map((c) => (
              <Pill
                key={c}
                active={category === c}
                onClick={() => {
                  setCategory(c);
                  setVisible(9);
                }}
              >
                {c}
              </Pill>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <FeaturedCard post={featured} />
        </motion.div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16 pb-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Browse guides
            </h2>
            <p className="text-muted mt-2">
              Filter by destination and topic to find the exact guidance you need.
            </p>
          </div>

          <Link
            href="/destinations"
            className="hidden sm:inline-flex items-center gap-2 font-extrabold text-secondary hover:opacity-90"
          >
            Explore destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </motion.div>

        {/* Load more */}
        <div className="mt-10 flex justify-center">
          {visible < POSTS.length ? (
            <button
              type="button"
              onClick={() => setVisible((v) => v + 6)}
              className="px-8 py-3 rounded-xl bg-white border border-subtle text-foreground font-extrabold shadow-sm hover:shadow-md hover:bg-accent/30 transition-all"
            >
              Load more
            </button>
          ) : (
            <div className="text-muted text-sm">
              You’ve reached the end of the curated list.
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl bg-brand-gradient text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-extrabold">
                  Personal roadmap for your destination
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-extrabold">
                Want a country-specific checklist?
              </h3>
              <p className="mt-3 text-white/90 leading-relaxed">
                Tell us your destination (Japan / UK / Germany / Finland / Italy /
                Spain / Malta) and intake month. We’ll prepare a clear plan: docs,
                timeline, budget, and next steps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-foreground font-extrabold shadow-lg hover:opacity-95"
              >
                Book free consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/40 bg-white/10 backdrop-blur font-extrabold hover:bg-white/15"
              >
                View services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter (optional) */}
        <div className="mt-10 bg-white rounded-3xl border border-subtle p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <div className="text-2xl font-extrabold text-foreground">
                Get updates (no spam)
              </div>
              <p className="text-muted mt-2">
                Monthly destination updates: intakes, scholarship windows, and visa
                checklist reminders.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
            >
              <input
                className="w-full sm:w-[320px] px-4 py-3 rounded-xl border border-subtle outline-none text-foreground"
                placeholder="Email address"
              />
              <button className="px-6 py-3 rounded-xl bg-brand-gradient text-white font-extrabold shadow-md hover:opacity-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
