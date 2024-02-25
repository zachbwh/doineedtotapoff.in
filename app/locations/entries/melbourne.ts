import { LocationEntry } from "./LocationEntry";

export const MelbourneEntry: LocationEntry = {
  names: ["Melbourne", "Naarm"],
  state: "Victoria",
  country: "Australia",
  tapOffRequired: "USUALLY",
  rules: [
    {
      modeType: "TRAIN",
      localisedName: "Train",
      tapOffRequired: "YES",
    },
    {
      modeType: "BUS",
      localisedName: "Bus",
      tapOffRequired: "YES",
    },
    {
      modeType: "TRAM",
      localisedName: "Tram",
      tapOffRequired: "SOMETIMES",
      details: "NO unless travelling within fare zone 2.",
    },
  ],
  source: "https://www.ptv.vic.gov.au/tickets/myki/travel-with-myki",
  lastChecked:
    "Sun Feb 18 2024 16:20:52 GMT+1100 (Australian Eastern Daylight Time)",
  latitude: -37.840935,
  longitude: 144.946457,
};
