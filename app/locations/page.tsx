import { LocationEntry } from "./entries/LocationEntry";
import { locationEntries } from "./entries";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import Link from "next/link";

export const generateMetadata = ({}: {}) => {
  const title = "Do I Need To Tap Off In - Location List";
  const description = "Find your city!";
  return {
    metadataBase: new URL("https://doineedtotapoff.in"),
    title,
    description,
    keywords: ["Public Transport", "Tap Off", "Touch Off", "Tag Off", "Card"],
    authors: [{ name: "Zach Huxford" }],
    creator: "Zach Huxford",
    publisher: "Zach Huxford",
    openGraph: {
      title,
      description,
      siteName: "Do I Need To Tap Off In?",
    },
  };
};

type GroupedLocations = {
  // Country Group
  [key: string]: {
    entries: LocationEntry[];
    stateEntries: {
      // State Group
      [key: string]: { entries: LocationEntry[] };
    };
  };
};
const getGroupedLocations = (): GroupedLocations => {
  const groupedLocations: GroupedLocations = {};
  locationEntries.forEach((location) => {
    const countryName = location.country;
    if (!groupedLocations[countryName]) {
      groupedLocations[countryName] = { entries: [], stateEntries: {} };
    }
    const countryGroup = groupedLocations[countryName];
    const stateName = location.state;
    if (stateName) {
      if (!countryGroup.stateEntries[stateName]) {
        countryGroup.stateEntries[stateName] = { entries: [] };
      }
      const stateEnties = countryGroup.stateEntries[stateName];
      stateEnties.entries.push(location);
    } else {
      countryGroup.entries.push(location);
    }
  });
  return groupedLocations;
};

type GroupedEntry = [name: string, details: any];
function compareEntriesAlphabetically([a]: GroupedEntry, [b]: GroupedEntry) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function LocationLink({ location }: { location: LocationEntry }) {
  const locationName = location.names[0];
  return (
    <p>
      <Link
        className="underline p-1 leading-8"
        href={`/locations/${locationName.toLowerCase()}`}
      >
        {locationName}
      </Link>
    </p>
  );
}

export default function LocationsList() {
  const groupedLocations = getGroupedLocations();
  return (
    <div className="m-auto max-w-4xl flex items-center flex-col h-full">
      <H1 className="pb-8 text-center">Do I need to tap off in?</H1>
      <H1 className="pb-8 text-center">Locations List</H1>
      <div className="w-full px-4 mt-12">
        {Object.entries(groupedLocations)
          .sort(compareEntriesAlphabetically)
          .map(([countryName, { entries, stateEntries }]) => {
            return (
              <div className="py-4" key={countryName}>
                <H2 className="pb-2">{countryName}</H2>
                {Object.entries(stateEntries)
                  .sort(compareEntriesAlphabetically)
                  .map(([stateName, { entries }]) => {
                    return (
                      <div className="pb-2" key={stateName}>
                        <H3>{stateName}</H3>
                        {entries.map((location, index) => (
                          <LocationLink location={location} key={index} />
                        ))}
                      </div>
                    );
                  })}
                {entries.length > 0 && (
                  <div className="pb-2">
                    {Object.keys(stateEntries).length > 0 && <H3>Others</H3>}
                    {entries.map((location, index) => (
                      <LocationLink location={location} key={index} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
