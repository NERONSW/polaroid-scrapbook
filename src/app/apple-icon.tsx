import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = { width: 180, height: 180 };

// Palette matches the globals.css design tokens (inlined — see icon.tsx).
const TERRACOTTA = "#99462a"; // --color-primary
const CREAM = "#f7f3ed"; // --color-surface-container-low

/**
 * Load the headline serif (Playfair Display 700); falls back to Satori's
 * default face if the CDN is unreachable at build time.
 */
async function loadSerifFont() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-700-normal.ttf",
      { signal: controller.signal }
    );
    if (!res.ok) return undefined;
    const data = await res.arrayBuffer();
    return {
      name: "Playfair Display",
      data,
      weight: 700 as const,
      style: "normal" as const,
    };
  } catch {
    return undefined;
  } finally {
    clearTimeout(timer);
  }
}

export default async function AppleIcon() {
  const font = await loadSerifFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer wax-seal badge */}
        <div
          style={{
            width: 168,
            height: 168,
            borderRadius: 84,
            background: TERRACOTTA,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Outer cream ring */}
          <div
            style={{
              width: 142,
              height: 142,
              borderRadius: 71,
              border: `4px solid ${CREAM}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Inner finer cream ring — archival double-ring stamp detail */}
            <div
              style={{
                width: 122,
                height: 122,
                borderRadius: 61,
                border: `2px solid ${CREAM}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  color: CREAM,
                  fontSize: 74,
                  fontWeight: 700,
                  fontFamily: "Playfair Display, Georgia, serif",
                  lineHeight: 1,
                }}
              >
                60
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      ...(font ? { fonts: [font] } : {}),
    }
  );
}
