import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  path: "/contact",
  title: getTranslation("de", "contact.title"),
  description: getTranslation("de", "contact.connectIntro"),
});

export default function ContactPage() {
  return <ContactContent locale="de" />;
}
