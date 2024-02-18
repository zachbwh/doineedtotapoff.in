import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="m-auto max-w-4xl items-center h-full">
      <H1 className="block md:inline pb-2">Do I need to tap off in</H1>
      <H1 className="block md:inline">
        <Input
          className="!text-4xl !font-extrabold !tracking-tight lg:!text-5xl max-w-[250px] lg:!max-w-[350px] mr-2 md:mx-2 px-2 inline"
          placeholder="Melbourne"
        />
        ?
      </H1>
    </div>
  );
}
