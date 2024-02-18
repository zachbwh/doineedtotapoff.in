import { LocationEntry } from "./LocationEntry";
import { AucklandEntry } from "./auckland";
import { MelbourneEntry } from "./melbourne";

const locationEntries = [AucklandEntry, MelbourneEntry];
const locationEntryMap: Record<string, LocationEntry> = {};
// duplicate locations for each name variant so alternative names have their own paths too
locationEntries.forEach((locationEntry) => {
  locationEntry.names.forEach((locationName) => {
    locationEntryMap[locationName.toLowerCase()] = locationEntry;
  });
});

export default locationEntryMap;
