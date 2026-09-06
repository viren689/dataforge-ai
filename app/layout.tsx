import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dataforge-ai-nine.vercel.app"),

  title: {
    default: "DataForge AI | AI-Powered Data Analysis",
    template: "%s | DataForge AI",
  },

  description:
    "DataForge AI is an AI-powered data analysis platform that helps you explore, analyze, and understand your data with intelligent insights.",

  keywords: [
    "DataForge AI",
    "AI data analysis",
    "data analysis",
    "AI analytics",
    "data analytics",
    "machine learning",
    "data visualization",
    "CSV data analysis",
    "AI-powered analytics",
  ],

  alternates: {
    canonical: "https://dataforge-ai-nine.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "DataForge AI | AI-Powered Data Analysis",
    description:
      "Analyze your data with AI-powered insights, analytics, and visualization using DataForge AI.",
    url: "https://dataforge-ai-nine.vercel.app/",
    siteName: "DataForge AI",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "DataForge AI | AI-Powered Data Analysis",
    description:
      "Analyze your data with AI-powered insights, analytics, and visualization.",
  },

  verification: {
    google: "6LXAV8XxLSLbovX-W7S2jJZGaYXoGYN-1jR6WrXjs50",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={geistSans.variable + " " + geistMono.variable + " h-full antialiased"}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}