import type { Metadata } from "next";
import TrainingContent from "@/components/TrainingContent";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  path: "/training",
  title: getTranslation("de", "training.title"),
  description: getTranslation("de", "training.metaDescription"),
});

export default function TrainingPage() {
  return <TrainingContent locale="de" />;
}
