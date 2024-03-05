import { Metadata } from "next";
import LocationForm from "./locationForm";
import Link from "next/link";

const title = "Do I Need To Tap Off In";
const description = "Find your city!";
export const metadata: Metadata = {
  metadataBase: new URL("https://doineedtotapoff.in"),
  title,
  description,
  keywords: ["Public Transport", "Tap Off", "Touch Off", "Tag Off", "Card"],
  authors: [{ name: "Zach Huxford" }],
  creator: "Zach Huxford",
  publisher: "Zach Huxford",
  openGraph: {
    title,
    description,
    siteName: "Do I Need To Tap Off In?",
  },
};

export default function Home() {
  return (
    <div className="max-w-4xl h-full w-full grow -mt-8 m-auto">
      <div className="min-h-screen m-auto flex justify-center items-center w-full">
        <LocationForm />
      </div>
      <div className="w-full max-w-md m-auto flex flex-row pt-0 p-4 justify-around">
        <Link className="underline" href="/about">
          About
        </Link>
        <Link className="underline" href="/locations">
          Locations
        </Link>
      </div>
    </div>
  );
}
