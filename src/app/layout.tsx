import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import LangSetter from "@/components/LangSetter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empowering Women in Tech through Data, Cloud & AI",
  description: "Data leader providing mentorship for transition to tech, career growth, entrepreneur journey, and women empowerment",
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
