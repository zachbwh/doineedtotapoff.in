import H1 from "@/components/ui/h1";
import { LocationEntry } from "../entries/LocationEntry";
import { notFound } from "next/navigation";
import locationEntryMap from "../entries";
import H2 from "@/components/ui/h2";

const getLocationEntry = (locationName: string): LocationEntry | null => {
  return locationEntryMap[locationName.toLowerCase()];
};

export const generateMetadata = ({
  params: { location },
}: {
  params: { location: string };
}) => {
  const locationEntry = getLocationEntry(location);
  const title = `Do I Have To Tap Off In ${locationEntry?.names[0]}`;
  const description = `${locationEntry?.tapOffRequired}${
    locationEntry?.details && ": " + locationEntry.details
  }`;
  return {
    title,
    description,
    keywords: [
      "Public Transport",
      "Tap Off",
      "Touch Off",
      "Tag OFF",
      "Card",
      ...(locationEntry?.names || []),
      locationEntry?.country,
    ],
    authors: [{ name: "Zach Huxford" }],
    creator: "Zach Huxford",
    publisher: "Zach Huxford",
    openGraph: {
      title,
      description,
      siteName: "Do I Need To Tap Off In?",
    },
  };
};

export default function Location({
  params: { location },
}: {
  params: { location: string };
}) {
  const locationEntry = getLocationEntry(location);
  if (!locationEntry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-orange-500 flex w-full">
      <div className="m-auto max-w-4xl flex items-center flex-col h-full">
        <H1 className="pb-8">
          Do I have to tap off in {locationEntry.names[0]}?
        </H1>
        <H2>{locationEntry.tapOffRequired}</H2>
      </div>
    </main>
  );
}
