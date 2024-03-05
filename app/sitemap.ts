import { MetadataRoute } from "next";
import locationEntryMap from "./locations/entries";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://doineedtotapoff.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...Object.keys(locationEntryMap).map((locationName) => {
      return {
        url: `https://doineedtotapoff.in/locations/${encodeURIComponent(
          locationName
        )}`,
        lastModified: new Date(locationEntryMap[locationName].lastChecked),
        changeFrequency: "weekly",
        priority: 0.95,
      } as MetadataRoute.Sitemap[0];
    }),
    {
      url: "https://doineedtotapoff.in/locations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://doineedtotapoff.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
