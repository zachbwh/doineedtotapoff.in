import { LocationEntry } from "./LocationEntry";
import { AdelaideEntry } from "./adelaide";
import { AucklandEntry } from "./auckland";
import { MelbourneEntry } from "./melbourne";
import { SydneyEntry } from "./sydney";
import { WellingtonEntry } from "./wellington";

const locationEntries = [
  AucklandEntry,
  MelbourneEntry,
  SydneyEntry,
  AdelaideEntry,
  WellingtonEntry,
];
const locationEntryMap: Record<string, LocationEntry> = {};
// duplicate locations for each name variant so alternative names have their own paths too
locationEntries.forEach((locationEntry) => {
  locationEntry.names.forEach((locationName) => {
    locationEntryMap[locationName.toLowerCase()] = locationEntry;
  });
});

export default locationEntryMap;
