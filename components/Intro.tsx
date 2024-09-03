import { details } from "@/lib/data";
import Image from "next/image";

export default function Intro() {
  return (
    <main className="z-10 overflow-hidden">
      <div className="relative z-10 mb-[86px] mt-[58px] h-[245px] w-[140%]">
        {/* <div className="relative h-[calc(100vw*0.65)] md:h-[calc(100vw*0.4)] lg:h-[calc(100vw*0.3)]"> */}
        <div className="relative h-[calc(100vw*0.65)] sm:h-[calc(100vw*0.4)]">
          <Image
            src="/images/illustration-devices.svg"
            fill
            className="right-0 object-contain"
            alt="devices"
          />
        </div>
      </div>

      <section className="px-8">
        <div className="flex items-center font-barlow-condensed uppercase">
          <div className="rounded-full bg-pt-very-dark-blue px-[10px] py-[1px] text-[16px] font-bold tracking-wider text-white">
            {details.status}
          </div>
          <div className="pl-4 text-[16px] tracking-[0.280em] text-pt-grayish-blue">
            {details.category}
          </div>
        </div>
        <div className="mt-4">
          <div className="font-barlow-condensed text-[40px] font-bold uppercase leading-[1]">
            {details.header}
          </div>
          <div className="mt-4 max-w-[292px]">{details.description}</div>
        </div>

        <div className="">
          <div className="">Schedule a demo</div>
          <div className="">To see a preview</div>
        </div>
      </section>
    </main>
  );
}
