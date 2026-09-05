"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">

      <div className="w-full max-w-md">

        <div className="mb-10 text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white font-black text-black">
            D
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight">
            DataForge AI
          </h1>

          <p className="mt-2 text-sm text-white/40">
            Admin Dashboard
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
        >

          <h2 className="text-xl font-medium">
            Sign in
          </h2>

          <p className="mt-2 text-sm text-white/40">
            Access your website enquiries.
          </p>

          <div className="mt-8">

            <label className="text-xs uppercase tracking-widest text-white/30">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@dataforge.ai"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
            />

          </div>

          <div className="mt-5">

            <label className="text-xs uppercase tracking-widest text-white/30">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
            />

          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

        </form>

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