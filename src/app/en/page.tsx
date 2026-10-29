import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/",
  title: getTranslation("en", "home.headline"),
  description: getTranslation("en", "home.metaDescription"),
});

export default function EnHome() {
  return <HomeContent locale="en" />;
}
