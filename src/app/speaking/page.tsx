import type { Metadata } from "next";
import SpeakingContent from "@/components/SpeakingContent";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  path: "/speaking",
  title: getTranslation("de", "speaking.title"),
  description: getTranslation("de", "speaking.metaDescription"),
});

export default function SpeakingPage() {
  return <SpeakingContent locale="de" />;
}
