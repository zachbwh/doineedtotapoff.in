"use client";

import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import GpsLocator from "./gpsLocator";

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

export default function LocationForm() {
  const router = useRouter();

  const submitHandler: (formData: FormData) => void = (formData) => {
    const location = formData.get("location");
    const encodedLocation = encodeURIComponent(location as string);
    router.push(`locations/${encodedLocation}`);
  };

  return (
    <form action={submitHandler}>
      <H1 className="block md:inline pb-2">Do I need to tap off in</H1>
      <H1 className="block md:inline">
        <Input
          className="!text-4xl !font-extrabold !tracking-tight lg:!text-5xl max-w-[225px] lg:!max-w-[280px] md:mx-2 px-2 inline !rounded-r-none !mr-0"
          placeholder="Melbourne"
          name="location"
        />
        <GpsLocator />?
      </H1>
    </form>
  );
}
