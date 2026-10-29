import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  path: "/",
  title: getTranslation("de", "home.headline"),
  description: getTranslation("de", "home.metaDescription"),
});

export default function Home() {
  return <HomeContent locale="de" />;
}
