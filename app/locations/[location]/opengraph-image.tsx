import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { getLocationEntry } from "./page";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params: { location },
}: {
  params: { location: string };
}) {
  const locationEntry = getLocationEntry(location);
  if (!locationEntry) {
    notFound();
  }

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 56,
          background: "rgb(249 115 22)",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <H1 style={{ textAlign: "center", fontWeight: "bolder" }}>
          Do I need to tap off in {locationEntry.names[0]}?
        </H1>
        <H2 style={{ textAlign: "center", fontWeight: "lighter" }}>
          {locationEntry.tapOffRequired}
        </H2>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
