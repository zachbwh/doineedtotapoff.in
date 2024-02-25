"use client";

import { useRouter } from "next/navigation";
import { LocateIcon, RefreshCw } from "lucide-react";
import { useCallback, useState } from "react";
import { locationEntries } from "./locations/entries";

export default function GpsLocator() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const getLocation = useCallback(() => {
    const geolocationApi = navigator.geolocation;
    if (geolocationApi) {
      setLoading(true);
      geolocationApi.getCurrentPosition(
        (result) => {
          const { latitude, longitude } = result.coords;
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

  return loading ? (
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
  );
}
