import { PublicTransportMode, RuleEntry } from "../entries/LocationEntry";
import locationEntryMap from "../entries";
import { notFound } from "next/navigation";
import { format } from "date-fns/format";
import { Separator } from "@/components/ui/separator";
import {
  BusFront,
  TrainFront,
  ShipIcon,
  TramFront,
  TrainFrontTunnel,
  LucideProps,
} from "lucide-react";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import { getLocationEntry } from "./get-location-entry";

export function generateStaticParams() {
  return Object.keys(locationEntryMap).map((locationName) => {
    return { location: locationName };
  });
}

export const generateMetadata = ({
  params: { location },
}: {
  params: { location: string };
}) => {
  const locationEntry = getLocationEntry(location);
  const title = `Do I need to tap off in ${locationEntry?.names[0]}?`;
  const description = `${locationEntry?.tapOffRequired}${
    locationEntry?.details ? ": " + locationEntry.details : ""
  }`;
  return {
    metadataBase: new URL("https://doineedtotapoff.in"),
    title,
    description,
    keywords: [
      "Public Transport",
      "Tap Off",
      "Touch Off",
      "Tag Off",
      "Card",
      ...(locationEntry?.names || []),
      locationEntry?.country,
    ],
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

const props: LucideProps = {
  size: 56,
  strokeWidth: 1.5,
  color: "#FFFFFF",
  className: "min-w-10 w-10 sm:min-w-12 sm:w-10 md:min-w-14 md:w-14",
};
const publicTransportModeIconMap: Record<
  PublicTransportMode,
  React.ReactElement
> = {
  BUS: <BusFront {...props} />,
  TRAIN: <TrainFront {...props} />,
  FERRY: <ShipIcon {...props} />,
  TRAM: <TramFront {...props} />,
  METRO: <TrainFrontTunnel {...props} />,
};
function Rule({ rule }: { rule: RuleEntry }) {
  const ruleIcon = publicTransportModeIconMap[rule.modeType];
  return (
    <div className="p-4 flex flex-row w-full">
      {ruleIcon}
      <div className="pl-4 flex justify-center flex-col">
        <H3>
          {rule.localisedName} - {rule.tapOffRequired}
        </H3>
        {rule.details}
      </div>
    </div>
  );
}

export default function Location({
  params: { location },
}: {
  params: { location: string };
}) {
  const locationEntry = getLocationEntry(location);
  if (!locationEntry) {
    notFound();
  }

  return (
    <div className="m-auto max-w-4xl flex items-center flex-col h-full">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="flex flex-col justify-center flex-grow">
          <H1 className="py-8 text-center">
            Do I need to tap off in {locationEntry.names[0]}?
          </H1>
          <H2 className="text-center">{locationEntry.tapOffRequired}</H2>
          <div className="w-full px-4 mt-4 md:mt-12">
            {locationEntry.rules.map((rule, index) => {
              return (
                <>
                  <Rule rule={rule} />
                  {locationEntry.rules.length - 1 > index && <Separator />}
                </>
              );
            })}
          </div>
        </div>
        <div className="w-full text-center p-4 mt-auto">
          <a className="underline" target="_blank" href={locationEntry.source}>
            Source
          </a>{" "}
          - Last updated:{" "}
          {format(new Date(locationEntry.lastChecked), "dd MMM yyyy")}
        </div>
      </div>
      <div className="w-full text-center pt-0 p-4">
        Something wrong? Create an issue{" "}
        <a
          className="underline"
          target="_blank"
          href={`https://github.com/zachbwh/doineedtotapoff.in/issues/new?assignees=zachbwh&labels=bad+information&projects=&template=bad-information.md&title=Information+about+${locationEntry.names[0]}+is+wrong+or+missing`}
        >
          here
        </a>
        .
      </div>
    </div>
  );
}
