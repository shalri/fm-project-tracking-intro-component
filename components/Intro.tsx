import { details } from "@/lib/data";
import Image from "next/image";

export default function Intro() {
  return (
    <main className="">
      <div className=" flex w-full flex-col items-center justify-center text-center">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/illustration-devices.svg"
            fill
            className="object-contain"
            alt="devices"
          />
        </div>
      </div>

      <section className="">
        <div className="">
          <div className="">{details.status}</div>
          <div className="">{details.category}</div>
        </div>
        <div className="">
          <div className="">{details.header}</div>
          <div className="">{details.description}</div>
        </div>

        <div className="">
          <div className="">Schedule a demo</div>
          <div className="">To see a preview</div>
        </div>
      </section>
    </main>
  );
}
