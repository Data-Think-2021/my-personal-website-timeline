import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import BookCall from "@/components/BookCall";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  path: "/book-call",
  title: getTranslation("de", "bookCall.title"),
  description: getTranslation("de", "bookCall.description"),
});

export default function BookCallPage() {
  return (
    <>
      <Navigation />
      <BookCall />
    </>
  );
}
