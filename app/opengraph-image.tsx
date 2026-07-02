import { ImageResponse } from "next/server";
import { siteConfig } from "@/data/profile";

export const runtime = "edge";
export const alt = `${siteConfig.name} engineering portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          color: "#f5f5f7",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            fontSize: 28,
            color: "#a1a1a6",
          }}
        >
          <div>Engineering Portfolio</div>
          <div>TP</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              maxWidth: 860,
              fontSize: 34,
              lineHeight: 1.3,
              color: "#d1d1d6",
            }}
          >
            4th-year Electrical and Information Engineering student building
            education, transport, HPC, robotics, and embedded systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
