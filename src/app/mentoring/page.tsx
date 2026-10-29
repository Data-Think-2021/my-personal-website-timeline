import type { Metadata } from "next";
import MentoringContent from "@/components/MentoringContent";
import JsonLd from "@/components/JsonLd";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata, mentoringServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  path: "/mentoring",
  title: getTranslation("de", "mentoring.title"),
  description: getTranslation("de", "mentoring.intro"),
});

export default function MentoringPage() {
  return (
    <>
      <JsonLd data={mentoringServiceJsonLd("de")} />
      <MentoringContent locale="de" />
    </>
  );
}
