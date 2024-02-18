import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="m-auto max-w-4xl flex items-center h-full">
      <H1>Do I need to tap off in </H1>
      <Input
        className="!text-4xl !font-extrabold !tracking-tight lg:!text-5xl max-w-[250px] lg:!max-w-[350px] mx-2 px-2"
        placeholder="Melbourne"
      />
      <H1>?</H1>
    </div>
  );
}
