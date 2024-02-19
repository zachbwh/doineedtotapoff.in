import { LocationEntry } from "./LocationEntry";

export const MelbourneEntry: LocationEntry = {
  names: ["Melbourne", "Naarm"],
  state: "Victoria",
  country: "Australia",
  tapOffRequired: "SOMETIMES",
  rules: [
    {
      modeType: "TRAIN",
      localisedName: "Train",
      tapOffRequired: "YES",
      details: "Tap off when leaving the station",
    },
    {
      modeType: "BUS",
      localisedName: "Bus",
      tapOffRequired: "YES",
      details: "Tap off when leaving the bus",
    },
    {
      modeType: "TRAM",
      localisedName: "Tram",
      tapOffRequired: "SOMETIMES",
      details: "YES if outside the free tram zone.",
    },
  ],
  source: "https://www.ptv.vic.gov.au/tickets/myki/travel-with-myki",
  lastChecked:
    "Sun Feb 18 2024 16:20:52 GMT+1100 (Australian Eastern Daylight Time)",
};
