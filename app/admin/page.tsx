"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, RefreshCw } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Lead = {
  id: string | number;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  budget?: string | null;
  project_description?: string | null;
  created_at: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [error, setError] = useState("");

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/admin/login");
      return;
    }

    setCheckingAuth(false);
    loadLeads();
  }

  async function loadLeads() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
      setLeads([]);
    } else {
      setLeads(data || []);
    }

    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  useEffect(() => {
    checkUser();
  }, []);

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <p className="text-sm text-white/40">
          Checking authentication...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* NAVBAR */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
              D
            </div>

            <span className="text-lg font-semibold">
              DataForge <span className="text-white/35">AI</span>
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <LogOut size={16} />
            Logout
          </button>

        </div>
      </nav>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              DataForge AI
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
              Lead Dashboard
            </h1>

            <p className="mt-4 text-sm text-white/40">
              Manage enquiries submitted through your website.
            </p>
          </div>

          <button
            onClick={loadLeads}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/20 hover:text-white disabled:opacity-50"
          >
            <RefreshCw
              size={16}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>

        </div>

        {/* STATS */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-widest text-white/30">
              Total enquiries
            </p>

            <p className="mt-3 text-3xl font-semibold">
              {leads.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-widest text-white/30">
              Services requested
            </p>

            <p className="mt-3 text-3xl font-semibold">
              {new Set(
                leads.map((lead) => lead.service).filter(Boolean)
              ).size}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-widest text-white/30">
              Latest enquiry
            </p>

            <p className="mt-3 text-sm font-medium">
              {leads.length
                ? new Date(
                    leads[0].created_at
                  ).toLocaleDateString()
                : "No enquiries"}
            </p>
          </div>

        </div>

        {/* ERROR */}
        {error && (
          <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* LEADS */}
        <div className="mt-10 space-y-5">

          {loading ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center text-sm text-white/40">
              Loading enquiries...
            </div>
          ) : leads.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <p className="text-lg font-medium">
                No enquiries yet
              </p>

              <p className="mt-2 text-sm text-white/35">
                New website enquiries will appear here.
              </p>
            </div>
          ) : (
            leads.map((lead) => (
              <article
                key={lead.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-5 lg:flex-row">

                  <div>

                    <h2 className="text-xl font-medium">
                      {lead.name}
                    </h2>

                    <p className="mt-1 text-sm text-white/30">
                      {lead.service || "General enquiry"}
                    </p>

                    <div className="mt-5 space-y-2 text-sm text-white/50">

                      <p>
                        <strong>Email:</strong>{" "}
                        {lead.email}
                      </p>

                      {lead.phone && (
                        <p>
                          <strong>Phone:</strong>{" "}
                          {lead.phone}
                        </p>
                      )}

                      {lead.company && (
                        <p>
                          <strong>Company:</strong>{" "}
                          {lead.company}
                        </p>
                      )}

                      {lead.budget && (
                        <p>
                          <strong>Budget:</strong>{" "}
                          {lead.budget}
                        </p>
                      )}

                    </div>

                  </div>

                  <p className="text-xs text-white/25">
                    {new Date(
                      lead.created_at
                    ).toLocaleString()}
                  </p>

                </div>

                {lead.project_description && (
                  <div className="mt-7 border-t border-white/10 pt-6">

                    <p className="text-xs uppercase tracking-widest text-white/25">
                      Project details
                    </p>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {lead.project_description}
                    </p>

                  </div>
                )}

              </article>
            ))
          )}

        </div>

      </section>

    </main>
  );
}