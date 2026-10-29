import type { Metadata } from "next";
import AISprintContent from "@/components/AISprintContent";
import JsonLd from "@/components/JsonLd";
import { getTranslation } from "@/lib/i18n";
import { aiSprintCourseJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/ai-kickstart-sprint",
  title: getTranslation("en", "aiSprint.headline"),
  description: getTranslation("en", "aiSprint.subheadline"),
  ogImage: "/ai-kickstart-sprint/opengraph-image",
});

export default function EnAIKickstartSprintPage() {
  return (
    <>
      <JsonLd data={aiSprintCourseJsonLd("en")} />
      <AISprintContent locale="en" />
    </>
  );
}
