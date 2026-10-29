import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import BookCall from "@/components/BookCall";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/book-call",
  title: getTranslation("en", "bookCall.title"),
  description: getTranslation("en", "bookCall.description"),
});

export default function EnBookCallPage() {
  return (
    <>
      <Navigation />
      <BookCall />
    </>
  );
}
