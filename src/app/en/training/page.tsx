import type { Metadata } from "next";
import TrainingContent from "@/components/TrainingContent";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/training",
  title: getTranslation("en", "training.title"),
  description: getTranslation("en", "training.metaDescription"),
});

export default function EnTrainingPage() {
  return <TrainingContent locale="en" />;
}
