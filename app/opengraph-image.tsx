import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "BOW DIARY — 愛犬とのいつもの散歩を、小さな物語に。";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

const loadFont = async (filename: string) => {
  const buffer = await readFile(path.join(process.cwd(), "app/fonts", filename));
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
};

const zenKaku = loadFont("ZenKakuGothicNew-Medium.ttf");

export default async function Image() {
  const zenKakuData = await zenKaku;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FBFAF7", color: "#252421", padding: "72px 84px", fontFamily: "Zen Kaku Gothic New", fontWeight: 500 }}>
      <div style={{ fontSize: 22, letterSpacing: "0.22em", color: "#ee776f" }}>WALK. SHOOT. REMEMBER.</div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, fontWeight: 500, letterSpacing: "-0.055em" }}>BOW DIARY</div>
          <div style={{ fontSize: 34, marginTop: 22 }}>愛犬との「いつもの散歩」を、小さな物語に。</div>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: 16, background: "#ee776f" }} />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Zen Kaku Gothic New", data: zenKakuData, style: "normal", weight: 500 },
      ],
    },
  );
}
