"use client";

import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { LocateIcon, RefreshCw } from "lucide-react";
import { useCallback, useState } from "react";
import { locationEntries } from "./locations/entries";

export default function Home() {
  const router = useRouter();

  const submitHandler: (formData: FormData) => void = (formData) => {
    const location = formData.get("location");
    const encodedLocation = encodeURIComponent(location as string);
    router.push(`locations/${encodedLocation}`);
  };

  const [loading, setLoading] = useState(false);
  const getLocation = useCallback(() => {
    const geolocationApi = navigator.geolocation;
    if (geolocationApi) {
      setLoading(true);
      geolocationApi.getCurrentPosition(
        (result) => {
          console.log(result.coords);
          const { latitude, longitude } = result.coords;
          setLoading(false);
          const filteredLocations = locationEntries.filter(
            ({ latitude: locationLatitude, longitude: locationLongitude }) => {
              const lattitudeClose =
                locationLatitude < latitude + 1 &&
                locationLatitude > latitude - 1;
              const longitudeClose =
                locationLongitude < longitude + 1 &&
                locationLongitude > longitude - 1;
              return lattitudeClose && longitudeClose;
            }
          );
          if (locationEntries.length > 0) {
            const locationName = filteredLocations[0].names[0];
            const encodedLocation = encodeURIComponent(locationName);
            router.push(`locations/${encodedLocation}`);
          } else {
            router.push("locations");
          }
        },
        () => {
          setLoading(false);
        }
      );
    }
  }, [loading]);

  return (
    <div className="m-auto max-w-4xl items-center h-full">
      <form action={submitHandler}>
        <H1 className="block md:inline pb-2">Do I need to tap off in</H1>
        <H1 className="block md:inline">
          <Input
            className="!text-4xl !font-extrabold !tracking-tight lg:!text-5xl max-w-[225px] lg:!max-w-[280px] md:mx-2 px-2 inline !rounded-r-none !mr-0"
            placeholder="Melbourne"
            name="location"
          />
          {loading ? (
            <span className="bg-orange-400 mr-2 inline-block min-h-[58px] md:min-h-[76px] rounded-r-md align-top cursor-pointer">
              <RefreshCw
                className="animate-[spin_1500ms_ease-in-out_infinite] h-[58px] md:h-[76px] w-14 md:w-16 inline p-3"
                strokeWidth={2}
                onClick={getLocation}
              />
            </span>
          ) : (
            <LocateIcon
              className="inline bg-orange-400 h-[58px] md:h-[76px] w-14 md:w-16 mr-2 rounded-r-md align-top p-2 cursor-pointer"
              strokeWidth={2}
              onClick={getLocation}
            />
          )}
          ?
        </H1>
      </form>
    </div>
  );
}
