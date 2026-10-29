import type { Metadata } from "next";
import SpeakingContent from "@/components/SpeakingContent";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/speaking",
  title: getTranslation("en", "speaking.title"),
  description: getTranslation("en", "speaking.metaDescription"),
});

export default function EnSpeakingPage() {
  return <SpeakingContent locale="en" />;
}
