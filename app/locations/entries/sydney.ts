import { LocationEntry } from "./LocationEntry";

export const SydneyEntry: LocationEntry = {
  names: ["Sydney"],
  state: "New South Wales",
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
      modeType: "FERRY",
      localisedName: "Ferry",
      tapOffRequired: "SOMETIMES",
      details: "YES unless travelling on the Manly F1 service",
    },
    {
      modeType: "TRAM",
      localisedName: "Tram",
      tapOffRequired: "YES",
    },
  ],
  source: "https://transportnsw.info/tickets-opal/opal/tapping-on-tapping-off",
  lastChecked:
    "Sun Feb 20 2024 20:53:52 GMT+1100 (Australian Eastern Daylight Time)",
};
