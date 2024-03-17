import { LocationEntry } from "../entries/LocationEntry";
import locationEntryMap from "../entries";

export const getLocationEntry = (
  locationName: string
): LocationEntry | null => {
  const decodedLocationName = decodeURIComponent(locationName);
  const locationEntry = locationEntryMap[decodedLocationName.toLowerCase()];
  if (locationEntry) {
    return {
      ...locationEntry,
      names: locationEntry.names.sort((a, b) => {
        if (a.toLowerCase() === decodedLocationName.toLowerCase()) {
          return -1;
        } else if (b.toLowerCase() === decodedLocationName.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }),
    };
  }
  return null;
};
