import { ImageResponse } from "next/og";

export const alt = "Rahul Paul — Systems & Backend";
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
          background: "#080808",
          color: "#e0e0e0",
          border: "1px solid #1f1f1f",
          padding: "72px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#777777",
            fontSize: 28,
          }}
        >
          <span>rahul@arch:~$ whoami</span>
          <span>rahulpaul.me</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 82, letterSpacing: -3, lineHeight: 1 }}>
            Rahul Paul
          </div>
          <div style={{ color: "#bdbdbd", fontSize: 40, lineHeight: 1.25 }}>
            Systems & Security engineer | OSS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            color: "#999999",
            fontSize: 28,
          }}
        >
          <span>Available for remote work</span>
          {/*<span>Rust</span>
          <span>·</span>
          <span>Tokio</span>
          <span>·</span>
          <span>OWASP</span>
          <span>·</span>
          <span>FreeCAD</span>
          <span>·</span>
          <span>Linux</span>*/}
        </div>
      </div>
    ),
    size,
  );
}
