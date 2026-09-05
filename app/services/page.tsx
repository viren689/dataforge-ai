"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  Database,
  Workflow,
  Check,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw business data into dashboards, insights and decisions your team can actually use.",
    features: [
      "Business dashboards",
      "Sales & revenue analysis",
      "Customer analytics",
      "KPI reporting",
      "Data visualization",
    ],
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Solutions",
    description:
      "Use practical artificial intelligence to reduce manual work, improve decisions and create new capabilities.",
    features: [
      "AI assistants",
      "Document intelligence",
      "Predictive analytics",
      "AI-powered workflows",
      "Custom AI solutions",
    ],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Business Automation",
    description:
      "Connect your tools and automate repetitive processes so your team can focus on higher-value work.",
    features: [
      "Workflow automation",
      "Lead automation",
      "Report generation",
      "Data processing",
      "System integrations",
    ],
  },
  {
    number: "04",
    icon: Database,
    title: "Data Engineering",
    description:
      "Build reliable data foundations that make your information cleaner, faster and easier to work with.",
    features: [
      "Data cleaning",
      "ETL pipelines",
      "Database design",
      "Data integration",
      "Data preparation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-[#050505]/90">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <a href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
              D
            </div>

            <span className="text-lg font-semibold">
              DataForge <span className="text-white/35">AI</span>
            </span>
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back home
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 py-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              What we do
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Technology that
              <br />
              <span className="text-white/35">moves business forward.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              We combine data, artificial intelligence and automation to
              create practical solutions for modern businesses.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-5 md:grid-cols-2">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.045] sm:p-10"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon size={24} className="text-white/80" />
                    </div>

                    <span className="text-sm text-white/20">
                      {service.number}
                    </span>

                  </div>

                  <h2 className="mt-12 text-3xl font-medium tracking-tight">
                    {service.title}
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/40">
                    {service.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-6">

                    <p className="mb-4 text-xs uppercase tracking-widest text-white/25">
                      What we can build
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">

                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/55"
                        >
                          <Check size={14} className="text-white/40" />
                          {feature}
                        </div>
                      ))}

                    </div>
                  </div>

                  <a
                    href="/#contact"
                    className="mt-9 inline-flex items-center gap-2 text-sm text-white/55 transition group-hover:text-white"
                  >
                    Discuss this service
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-20 text-center sm:px-10">

          <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[100px]" />

          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            Have a project?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Let's build something
            <span className="text-white/35"> useful.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40">
            Tell us what you're trying to solve and we'll help you find the
            right technology approach.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
          >
            Start a project
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-white/30">
            © 2026 DataForge AI
          </p>

          <a
            href="/"
            className="text-sm text-white/40 transition hover:text-white"
          >
            Back to homepage
          </a>

        </div>
      </footer>

    </main>
  );
}