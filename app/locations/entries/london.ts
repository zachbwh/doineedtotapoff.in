import { LocationEntry } from "./LocationEntry";

export const LondonEntry: LocationEntry = {
  names: ["London"],
  country: "United Kingdom",
  tapOffRequired: "SOMETIMES",
  rules: [
    {
      modeType: "METRO",
      localisedName: "Tube",
      tapOffRequired: "YES",
      details: "Touch a pink card reader when changing trains.",
    },
    {
      modeType: "TRAIN",
      localisedName: "Overground",
      tapOffRequired: "YES",
      details: "Touch a pink card reader when changing trains.",
    },
    {
      modeType: "BUS",
      localisedName: "Bus",
      tapOffRequired: "NO",
    },
    {
      modeType: "TRAM",
      localisedName: "Tram",
      tapOffRequired: "NO",
    },
  ],
  source:
    "https://tfl.gov.uk/fares/how-to-pay-and-where-to-buy-tickets-and-oyster/pay-as-you-go/touching-in-and-out",
  lastChecked:
    "Sun Feb 25 2024 19:39:52 GMT+1100 (Australian Eastern Daylight Time)",
  latitude: 51.5072,
  longitude: -0.1276,
};
