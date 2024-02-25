import { Metadata } from "next";
import LocationForm from "./locationForm";

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
    <div className="m-auto max-w-4xl items-center h-full">
      <LocationForm />
    </div>
  );
}
