import type { Metadata } from "next";
import MentoringContent from "@/components/MentoringContent";
import JsonLd from "@/components/JsonLd";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata, mentoringServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/mentoring",
  title: getTranslation("en", "mentoring.title"),
  description: getTranslation("en", "mentoring.intro"),
});

export default function EnMentoringPage() {
  return (
    <>
      <JsonLd data={mentoringServiceJsonLd("en")} />
      <MentoringContent locale="en" />
    </>
  );
}
