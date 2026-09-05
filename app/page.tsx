"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Database,
  Mail,
  MessageCircle,
  Phone,
  Workflow,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turn your business data into clear dashboards, insights and decisions.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Build practical AI systems that reduce manual work and improve productivity.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive processes and connect the tools your business already uses.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Create reliable data pipelines, integrations and foundations for your business.",
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        company: String(formData.get("company") || ""),
        service: String(formData.get("service") || ""),
        budget: String(formData.get("budget") || ""),
        project_description: String(
          formData.get("project_description") || ""
        ),
      });

      if (error) {
        alert("Supabase Error: " + error.message);
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Unable to submit the enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <a href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
              D
            </div>

            <span className="text-lg font-semibold">
              DataForge <span className="text-white/35">AI</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <a
              href="#services"
              className="transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105 sm:block"
          >
            Start a project
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">

        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[150px]" />

        <div className="mx-auto w-full max-w-7xl px-6 py-28">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />

              <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                Data · AI · Automation
              </span>
            </div>

            <h1 className="max-w-6xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[100px]">
              Build smarter.
              <br />

              <span className="text-white/30">
                Move faster.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              DataForge AI helps businesses turn data, artificial
              intelligence and automation into practical technology
              that creates measurable value.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
              >
                Start a project

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-4 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
              >
                Explore services
              </a>

            </div>

          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-t border-white/10 py-28"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              What we do
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Technology built around
              <span className="text-white/30">
                {" "}real problems.
              </span>
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.045] sm:p-10"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon
                      size={24}
                      className="text-white/80"
                    />
                  </div>

                  <h3 className="mt-10 text-2xl font-medium tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/40">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm text-white/40 transition group-hover:text-white">
                    Learn more

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 py-28"
      >

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Why DataForge AI
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Less complexity.
              <br />
              <span className="text-white/30">
                More impact.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-base leading-8 text-white/45">
              We focus on practical technology rather than technology
              for its own sake. Our goal is to help businesses understand
              their data, automate repetitive work and use AI where it
              actually creates value.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Business-focused solutions",
                "Modern AI and data technologies",
                "Scalable architecture",
                "Clear and measurable outcomes",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/55"
                >
                  <Check
                    size={16}
                    className="text-white/50"
                  />

                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 py-28"
      >

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* CONTACT INFO */}
          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Start a conversation
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Let&apos;s build
              <br />
              <span className="text-white/30">
                something useful.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
              Tell us what you&apos;re trying to solve and we&apos;ll
              help you find the right technology approach.
            </p>

            <div className="mt-10 space-y-4">

              <a
                href="mailto:hello@dataforgeai.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:bg-white/[0.05]"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/30">
                    Email
                  </p>

                  <p className="mt-1 text-sm">
                    hello@dataforgeai.com
                  </p>
                </div>

              </a>

              <a
                href="https://wa.me/"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:bg-white/[0.05]"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/30">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm">
                    Chat with us
                  </p>
                </div>

              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/30">
                    Response
                  </p>

                  <p className="mt-1 text-sm">
                    We&apos;ll get back to you soon
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-9">

            {submitted ? (

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[550px] flex-col items-center justify-center text-center"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <Check
                    size={30}
                    className="text-white/80"
                  />
                </div>

                <h3 className="mt-7 text-3xl font-semibold">
                  Thanks for reaching out.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  Your enquiry has been received. We&apos;ll review
                  the details and get back to you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
                >
                  Send another enquiry
                </button>

              </motion.div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME + EMAIL */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-xs text-white/40">
                      Your name *
                    </label>

                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-xs text-white/40">
                      Email *
                    </label>

                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                    />

                  </div>

                </div>

                {/* PHONE + COMPANY */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-xs text-white/40">
                      Phone / WhatsApp
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-xs text-white/40">
                      Company
                    </label>

                    <input
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                    />

                  </div>

                </div>

                {/* SERVICE */}
                <div>

                  <label className="mb-2 block text-xs text-white/40">
                    What do you need? *
                  </label>

                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white/70 outline-none focus:border-white/30"
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>
                      Data Analytics
                    </option>

                    <option>
                      AI Solutions
                    </option>

                    <option>
                      Business Automation
                    </option>

                    <option>
                      Data Engineering
                    </option>

                    <option>
                      Custom Solution
                    </option>

                  </select>

                </div>

                {/* BUDGET */}
                <div>

                  <label className="mb-2 block text-xs text-white/40">
                    Estimated budget
                  </label>

                  <select
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white/70 outline-none focus:border-white/30"
                  >

                    <option value="" disabled>
                      Select a range
                    </option>

                    <option>
                      Under ₹25,000
                    </option>

                    <option>
                      ₹25,000 – ₹50,000
                    </option>

                    <option>
                      ₹50,000 – ₹1,00,000
                    </option>

                    <option>
                      ₹1,00,000+
                    </option>

                    <option>
                      Not sure yet
                    </option>

                  </select>

                </div>

                {/* PROJECT */}
                <div>

                  <label className="mb-2 block text-xs text-white/40">
                    Tell us about your project *
                  </label>

                  <textarea
                    required
                    name="project_description"
                    rows={6}
                    placeholder="What are you trying to achieve? What problem are you facing?"
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                  />

                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {loading
                    ? "Sending..."
                    : "Send enquiry"}

                  {!loading && (
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}

                </button>

                <p className="text-center text-[11px] leading-5 text-white/20">
                  By submitting this form, you agree that DataForge AI
                  can contact you regarding your enquiry.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-semibold">
              DataForge AI
            </p>

            <p className="mt-1 text-xs text-white/25">
              Data · AI · Automation
            </p>
          </div>

          <p className="text-sm text-white/30">
            © 2026 DataForge AI
          </p>

        </div>

      </footer>

    </main>
  );
}