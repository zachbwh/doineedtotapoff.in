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
    },
    {
      modeType: "TRAM",
      localisedName: "Tram",
      tapOffRequired: "SOMETIMES",
      details:
        "Dont tap on or off if you're only in the free tram zone. More info in source link",
    },
  ],
  source: "https://www.ptv.vic.gov.au/tickets/myki/travel-with-myki",
  lastChecked:
    "Sun Feb 18 2024 16:20:52 GMT+1100 (Australian Eastern Daylight Time)",
};
