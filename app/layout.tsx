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
    "DataForge AI helps businesses turn data, artificial intelligence and automation into practical technology that creates measurable value.",

  keywords: [
    "DataForge AI",
    "AI data analysis",
    "data analytics",
    "AI solutions",
    "business automation",
    "data engineering",
    "machine learning",
    "data visualization",
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
      "DataForge AI provides practical technology solutions across data analytics, AI solutions, business automation and data engineering.",
    url: "https://dataforge-ai-nine.vercel.app/",
    siteName: "DataForge AI",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "DataForge AI | AI-Powered Data Analysis",
    description:
      "Practical technology solutions across data analytics, AI solutions, business automation and data engineering.",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dataforge-ai-nine.vercel.app/#organization",
        name: "DataForge AI",
        url: "https://dataforge-ai-nine.vercel.app/",
        email: "hello@dataforgeai.com",
        description:
          "DataForge AI helps businesses turn data, artificial intelligence and automation into practical technology that creates measurable value.",
      },
      {
        "@type": "WebSite",
        "@id": "https://dataforge-ai-nine.vercel.app/#website",
        url: "https://dataforge-ai-nine.vercel.app/",
        name: "DataForge AI",
        description:
          "Practical technology solutions across data analytics, AI solutions, business automation and data engineering.",
        publisher: {
          "@id": "https://dataforge-ai-nine.vercel.app/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://dataforge-ai-nine.vercel.app/#webpage",
        url: "https://dataforge-ai-nine.vercel.app/",
        name: "DataForge AI | AI-Powered Data Analysis",
        description:
          "DataForge AI helps businesses turn data, artificial intelligence and automation into practical technology that creates measurable value.",
        isPartOf: {
          "@id": "https://dataforge-ai-nine.vercel.app/#website",
        },
        about: {
          "@id": "https://dataforge-ai-nine.vercel.app/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={
        geistSans.variable +
        " " +
        geistMono.variable +
        " h-full antialiased"
      }
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}