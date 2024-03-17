import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="m-auto max-w-4xl flex items-center justify-center flex-col h-full">
      <H1 className="pb-4">{"Uh oh! We couldn't find this location."}</H1>
      <H2>
        Have a look at our other locations{" "}
        <Link className="underline" href="/locations">
          here
        </Link>
        .
      </H2>
      <Link className="underline fixed bottom-0 p-4" href="/">
        Go Back
      </Link>
    </div>
  );
}
