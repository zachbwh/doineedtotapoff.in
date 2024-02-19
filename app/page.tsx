"use client";

import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const submitHandler: (formData: FormData) => void = (formData) => {
    const location = formData.get("location");
    const encodedLocation = encodeURIComponent(location as string);
    router.push(`locations/${encodedLocation}`);
  };

  return (
    <div className="m-auto max-w-4xl items-center h-full">
      <form action={submitHandler}>
        <H1 className="block md:inline pb-2">Do I need to tap off in</H1>
        <H1 className="block md:inline">
          <Input
            className="!text-4xl !font-extrabold !tracking-tight lg:!text-5xl max-w-[250px] lg:!max-w-[350px] mr-2 md:mx-2 px-2 inline"
            placeholder="Melbourne"
            name="location"
          />
          ?
        </H1>
      </form>
    </div>
  );
}
