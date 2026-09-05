"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

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

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Start a conversation
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Let's build
              <br />
              <span className="text-white/35">something useful.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Tell us about your business, your challenge and what you want
              to achieve. We'll figure out the right approach together.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 sm:py-28">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT */}
          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Get in touch
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us what
              <br />
              you're working on.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
              Whether you need analytics, AI, automation or a completely
              custom solution, we'd love to hear about it.
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
                  <p className="text-xs text-white/30">Email</p>
                  <p className="mt-1 text-sm">hello@dataforgeai.com</p>
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
                  <p className="text-xs text-white/30">WhatsApp</p>
                  <p className="mt-1 text-sm">Chat with us</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/30">Response</p>
                  <p className="mt-1 text-sm">We'll get back to you soon</p>
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
                <CheckCircle2 size={55} className="text-white/80" />

                <h2 className="mt-7 text-3xl font-semibold">
                  Thanks for reaching out.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  Your enquiry has been received. We'll review the details
                  and get back to you.
                </p>

                <a
                  href="/"
                  className="mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
                >
                  Back to homepage
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-xs text-white/40">
                      Your name *
                    </label>

                    <input
                      required
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
                      type="email"
                      placeholder="john@company.com"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                    />
                  </div>

                </div>

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-xs text-white/40">
                      Phone / WhatsApp
                    </label>

                    <input
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
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-xs text-white/40">
                    What do you need? *
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white/70 outline-none focus:border-white/30"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Data Analytics</option>
                    <option>AI Solutions</option>
                    <option>Business Automation</option>
                    <option>Data Engineering</option>
                    <option>Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs text-white/40">
                    Estimated budget
                  </label>

                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white/70 outline-none focus:border-white/30"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option>Under ₹25,000</option>
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs text-white/40">
                    Tell us about your project *
                  </label>

                  <textarea
                    required
                    rows={6}
                    placeholder="What are you trying to achieve? What problem are you facing?"
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.01]"
                >
                  Send enquiry
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-[11px] leading-5 text-white/20">
                  By submitting this form, you agree that DataForge AI can
                  contact you regarding your enquiry.
                </p>

              </form>
            )}

          </div>

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