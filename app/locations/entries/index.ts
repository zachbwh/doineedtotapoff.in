import { LocationEntry } from "./LocationEntry";
import { AdelaideEntry } from "./adelaide";
import { AucklandEntry } from "./auckland";
import { BerlinEntry } from "./berlin";
import { ChristchurchEntry } from "./christchurch";
import { DunedinEntry } from "./dunedin";
import { LondonEntry } from "./london";
import { LosAngelesEntry } from "./los angeles";
import { MelbourneEntry } from "./melbourne";
import { NewYorkCityEntry } from "./new york city";
import { SeattleEntry } from "./seattle";
import { SydneyEntry } from "./sydney";
import { WashingtonDCEntry } from "./washington dc";
import { WellingtonEntry } from "./wellington";

export const locationEntries = [
  AucklandEntry,
  MelbourneEntry,
  SydneyEntry,
  AdelaideEntry,
  WellingtonEntry,
  ChristchurchEntry,
  DunedinEntry,
  SeattleEntry,
  LosAngelesEntry,
  NewYorkCityEntry,
  WashingtonDCEntry,
  BerlinEntry,
  LondonEntry,
];
const locationEntryMap: Record<string, LocationEntry> = {};
// duplicate locations for each name variant so alternative names have their own paths too
locationEntries.forEach((locationEntry) => {
  locationEntry.names.forEach((locationName) => {
    locationEntryMap[locationName.toLowerCase()] = locationEntry;
  });
});

export default locationEntryMap;
