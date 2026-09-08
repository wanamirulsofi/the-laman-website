import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6b8566",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "serif",
          }}
        >
          L
        </div>
      </div>
    ),
    { ...size }
  );
}
