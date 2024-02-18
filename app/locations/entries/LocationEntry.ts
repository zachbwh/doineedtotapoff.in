type TapOffRequired = "YES" | "NO" | "SOMETIMES";
// Not exhaustive, mostly meant to map to icons. Names can be localised based on region
type PublicTransportMode = "BUS" | "TRAIN" | "FERRY" | "TRAM" | "METRO";
export type LocationEntry = {
  names: string[];
  state?: string;
  country: string;
  tapOffRequired: TapOffRequired;
  details?: string;
  rules: {
    modeType: PublicTransportMode;
    localisedName: string;
    tapOffRequired: TapOffRequired;
    localisedLogo?: string;
    details?: string;
  }[];
  source: string;
  lastChecked: string;
};
