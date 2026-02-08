import type { Metadata } from "next";
import AISprintContent from "@/components/AISprintContent";

export const metadata: Metadata = {
  title: "AI Kickstart Sprint: From AI-curious to AI-productive",
  description:
    "Intensive sprint to build practical AI skills, ship outcomes, and grow confidence with guidance and templates.",
  openGraph: {
    title: "AI Kickstart Sprint: From AI-curious to AI-productive",
    description:
      "Intensive sprint to build practical AI skills, ship outcomes, and grow confidence with guidance and templates.",
    url: "/ai-kickstart-sprint",
    images: [
      {
        url: "/ai-kickstart-sprint/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Kickstart Sprint",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Kickstart Sprint: From AI-curious to AI-productive",
    description:
      "Intensive sprint to build practical AI skills, ship outcomes, and grow confidence with guidance and templates.",
    images: ["/ai-kickstart-sprint/opengraph-image"],
  },
};

export default function AIKickstartSprintPage() {
  return <AISprintContent locale="de" />;
}
