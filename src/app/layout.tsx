import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LangSetter from "@/components/LangSetter";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { AUTHOR_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Data, Cloud & AI — with purpose and impact",
    template: `%s | ${AUTHOR_NAME}`,
  },
  description:
    "Xia He-Bleinagel, Head of Data & Cloud at NOW GmbH, Berlin. Data & AI strategy that ships. Cloud Governance. Speaker and mentor on tech, leadership and career growth.",
  openGraph: {
    title: "Data, Cloud & AI — with purpose and impact",
    description:
      "Xia He-Bleinagel, Head of Data & Cloud at NOW GmbH, Berlin. Data & AI strategy that ships. Cloud Governance. Speaker and mentor on tech, leadership and career growth.",
    url: "/",
    siteName: "DataThinker",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DataThinker — Data, Cloud & AI Leadership",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data, Cloud & AI — with purpose and impact",
    description:
      "Xia He-Bleinagel, Head of Data & Cloud at NOW GmbH, Berlin. Data & AI strategy that ships. Cloud Governance. Speaker and mentor on tech, leadership and career growth.",
    images: ["/opengraph-image"],
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const lang = pathname.startsWith("/en") ? "en" : "de";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <JsonLd data={[personJsonLd(), websiteJsonLd()]} />
        <LangSetter />
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
