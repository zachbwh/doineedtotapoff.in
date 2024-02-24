import { LocationEntry } from "./LocationEntry";

export const WashingtonDCEntry: LocationEntry = {
  names: ["Washington DC", "Washington D.C."],
  country: "United States",
  tapOffRequired: "SOMETIMES",
  rules: [
    {
      modeType: "METRO",
      localisedName: "Metrorail",
      tapOffRequired: "YES",
    },
    {
      modeType: "BUS",
      localisedName: "Metrobus",
      tapOffRequired: "NO",
    },
  ],
  source: "https://www.wmata.com/fares/smartrip/faq.cfm#faq8",
  lastChecked:
    "Sun Feb 24 2024 12:22:52 GMT+1100 (Australian Eastern Daylight Time)",
  lattidude: 38.9072,
  longitude: -77.0369,
};
