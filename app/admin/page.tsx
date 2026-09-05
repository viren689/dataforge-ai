"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  LogOut,
  RefreshCw,
  Users,
} from "lucide-react";

type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  project_description: string;
  created_at: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticated = localStorage.getItem("dataforge_admin");

    if (authenticated !== "true") {
      router.push("/admin/login");
      return;
    }

    loadLeads();
  }, [router]);

  function loadLeads() {
    setLoading(true);

    // No database is connected.
    // This keeps the admin page functional without Supabase.
    const storedLeads = localStorage.getItem("dataforge_leads");

    if (storedLeads) {
      try {
        setLeads(JSON.parse(storedLeads));
      } catch {
        setLeads([]);
      }
    } else {
      setLeads([]);
    }

    setLoading(false);
  }

  function handleLogout() {
    localStorage.removeItem("dataforge_admin");
    router.push("/admin/login");
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
              D
            </div>

            <div>
              <p className="text-sm font-semibold">
                DataForge AI
              </p>

              <p className="text-xs text-white/30">
                Admin Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadLeads}
              className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
            >
              <RefreshCw size={16} />
              Refresh
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Dashboard
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Enquiries
            </h1>

            <p className="mt-3 text-sm text-white/40">
              Manage enquiries submitted through the website.
            </p>
          </div>

          <a
            href="/"
            className="flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to website
          </a>
        </div>

        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
              <Users size={19} />
            </div>

            <p className="mt-6 text-sm text-white/40">
              Total enquiries
            </p>

            <p className="mt-2 text-4xl font-semibold">
              {leads.length}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
          {loading ? (
            <div className="flex min-h-[300px] items-center justify-center text-sm text-white/40">
              Loading enquiries...
            </div>
          ) : leads.length === 0 ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10">
                <Users size={22} />
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                No enquiries yet
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/35">
                New website enquiries will appear here once a backend or
                storage system is connected.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                <thead className="border-b border-white/10">
                  <tr className="text-xs uppercase tracking-wider text-white/30">
                    <th className="px-6 py-5">Name</th>
                    <th className="px-6 py-5">Email</th>
                    <th className="px-6 py-5">Company</th>
                    <th className="px-6 py-5">Service</th>
                    <th className="px-6 py-5">Budget</th>
                    <th className="px-6 py-5">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-white/5 text-sm last:border-0"
                    >
                      <td className="px-6 py-5 font-medium">
                        {lead.name}
                      </td>

                      <td className="px-6 py-5 text-white/50">
                        {lead.email}
                      </td>

                      <td className="px-6 py-5 text-white/50">
                        {lead.company || "—"}
                      </td>

                      <td className="px-6 py-5 text-white/50">
                        {lead.service}
                      </td>

                      <td className="px-6 py-5 text-white/50">
                        {lead.budget || "—"}
                      </td>

                      <td className="px-6 py-5 text-white/40">
                        {lead.created_at
                          ? new Date(
                              lead.created_at
                            ).toLocaleDateString()
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}