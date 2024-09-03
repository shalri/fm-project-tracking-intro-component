import { details } from "@/lib/data";
import Image from "next/image";

export default function Intro() {
  return (
    <main className="overflow-hidden">
      <div className="relative mb-[86px] mt-[58px] h-[245px] w-[140%]">
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
        <div className="flex items-center gap-x-4 font-barlow-condensed uppercase">
          <div className="rounded-full bg-pt-very-dark-blue px-[10px] py-[1px] text-[16px] font-bold tracking-wider text-white">
            {details.status}
          </div>
          <div className="text-[16px] tracking-[0.280em] text-pt-grayish-blue">
            {details.category}
          </div>
        </div>
        <div className="mt-4">
          <div className="font-barlow-condensed text-[40px] font-bold uppercase leading-[1] text-pt-very-dark-blue">
            {details.header}
          </div>
          <div className="mt-4 max-w-[292px] text-pt-dark-grayish-blue">
            {details.description}
          </div>
        </div>

        <div className="mb-[84px] mt-6 flex items-center gap-x-5 uppercase">
          <div className="rounded-md bg-pt-red px-[25px] py-[10px] font-barlow-condensed text-[14px] font-bold tracking-[0.066em] text-white">
            Schedule a demo
          </div>
          <div className="font-barlow-condensed text-[14px] font-normal tracking-[0.180em] text-pt-grayish-blue">
            To see a preview
          </div>
        </div>
      </section>
    </main>
  );
}
