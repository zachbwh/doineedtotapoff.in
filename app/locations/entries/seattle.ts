import { LocationEntry } from "./LocationEntry";

export const SeattleEntry: LocationEntry = {
  names: ["Seattle"],
  state: "Washington",
  country: "United States",
  tapOffRequired: "SOMETIMES",
  rules: [
    {
      modeType: "TRAIN",
      localisedName: "Train",
      tapOffRequired: "YES",
    },
    {
      modeType: "BUS",
      localisedName: "Bus",
      tapOffRequired: "NO",
    },
    {
      modeType: "TRAM",
      localisedName: "Light Rail/Streetcar",
      tapOffRequired: "YES",
    },
  ],
  source:
    "https://support.myorca.com/hc/en-us/articles/9286130645389-Paying-for-transit-with-your-ORCA-card",
  lastChecked:
    "Sun Feb 24 2024 11:28:52 GMT+1100 (Australian Eastern Daylight Time)",
  latitude: 47.6061,
  longitude: -122.3328,
};
