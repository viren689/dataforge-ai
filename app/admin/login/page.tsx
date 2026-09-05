"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Temporary local admin login.
      // No Supabase required.
      if (email === "admin@dataforgeai.com" && password === "admin123") {
        localStorage.setItem("dataforge_admin", "true");
        router.push("/admin");
        return;
      }

      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-black text-black">
            D
          </div>

          <h1 className="mt-6 text-3xl font-semibold">
            DataForge AI
          </h1>

          <p className="mt-2 text-sm text-white/40">
            Admin Dashboard
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
          <div className="mb-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
              <LockKeyhole size={19} />
            </div>

            <h2 className="mt-5 text-2xl font-semibold">
              Admin Login
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Sign in to access the dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-xs text-white/40">
                Email
              </label>

              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@dataforgeai.com"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-white/40">
                Password
              </label>

              <input
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}

              {!loading && (
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button>
          </form>
        </div>

        <a
          href="/"
          className="mt-6 block text-center text-sm text-white/30 transition hover:text-white"
        >
          ← Back to website
        </a>
      </div>
    </main>
  );
}