import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import LangSetter from "@/components/LangSetter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.datathinker.de"),
  title: "Helping people thrive in Data, Cloud & AI through learning and mentorship",
  description: "Data leader providing mentorship for transition to tech, career growth, entrepreneur journey, and women empowerment",
  openGraph: {
    title: "Helping people thrive in Data, Cloud & AI through learning and mentorship",
    description: "Data leader providing mentorship for transition to tech, career growth, entrepreneur journey, and women empowerment",
    url: "/",
    siteName: "DataThinker",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DataThinker - Empowering Women in Tech",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helping people thrive in Data, Cloud & AI through learning and mentorship",
    description: "Data leader providing mentorship for transition to tech, career growth, entrepreneur journey, and women empowerment",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <LangSetter />
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
