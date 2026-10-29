import type { Metadata } from "next";
import AISprintContent from "@/components/AISprintContent";
import JsonLd from "@/components/JsonLd";
import { getTranslation } from "@/lib/i18n";
import { aiSprintCourseJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  path: "/ai-kickstart-sprint",
  title: getTranslation("de", "aiSprint.headline"),
  description: getTranslation("de", "aiSprint.subheadline"),
  ogImage: "/ai-kickstart-sprint/opengraph-image",
});

export default function AIKickstartSprintPage() {
  return (
    <>
      <JsonLd data={aiSprintCourseJsonLd("de")} />
      <AISprintContent locale="de" />
    </>
  );
}
