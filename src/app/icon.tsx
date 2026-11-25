import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = { width: 32, height: 32 };

// Palette matches the globals.css design tokens (inlined here because the icon
// route paints with Satori inline styles, not Tailwind utilities):
//   --color-primary: #99462a (deep terracotta)
//   --color-surface-container-low: #f7f3ed (warm archival paper cream)
const TERRACOTTA = "#99462a";
const CREAM = "#f7f3ed";

/**
 * Load the headline serif (Playfair Display 700) so the "60" matches the site's
 * editorial display face. Falls back to Satori's default face if the CDN is
 * unreachable at build time — the badge still renders, just without serifs.
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

export default async function Icon() {
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
        {/* Warm terracotta wax-seal badge */}
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            background: TERRACOTTA,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Thin cream inner ring */}
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              border: `2px solid ${CREAM}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                color: CREAM,
                fontSize: 13,
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
    ),
    {
      ...size,
      ...(font ? { fonts: [font] } : {}),
    }
  );
}
