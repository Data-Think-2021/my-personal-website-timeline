import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/contact",
  title: getTranslation("en", "contact.title"),
  description: getTranslation("en", "contact.connectIntro"),
});

export default function EnContactPage() {
  return <ContactContent locale="en" />;
}
