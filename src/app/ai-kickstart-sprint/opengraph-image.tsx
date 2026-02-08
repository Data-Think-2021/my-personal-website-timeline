import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.datathinker.de";

export default async function Image() {
  const profileUrl = new URL("/profile.png", siteUrl);
  const profileImage = await fetch(profileUrl).then((res) => res.blob());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0f172a, #1f2937)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 640 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
            AI KICKSTART SPRINT:
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#e2e8f0" }}>
            From AI-curious to AI-productive
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8" }}>datathinker.de</div>
        </div>
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 28,
            background: "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            border: "2px solid #1f2937",
          }}
        >
          <img
            src={profileImage}
            alt="Profile portrait"
            width={360}
            height={360}
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>
    ),
    size
  );
}
