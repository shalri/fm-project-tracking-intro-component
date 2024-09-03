import { details } from "@/lib/data";
import Image from "next/image";

export default function Intro() {
  return (
    <main className="z-10 overflow-hidden">
      <div className="z-10 mt-[58px] h-[245px] w-[140%]">
        <div className="relative h-[calc(100vw*0.65)] md:h-[calc(100vw*0.4)] lg:h-[calc(100vw*0.3)]">
          <Image
            src="/images/illustration-devices.svg"
            fill
            className="right-0 object-contain"
            alt="devices"
          />
        </div>
      </div>

      <section className="px-8">
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
