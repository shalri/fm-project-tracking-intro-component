import { details } from "@/lib/data";
import Image from "next/image";

export default function Intro() {
  return (
    <main className="overflow-hidden sm:mx-auto sm:mt-[58px] sm:grid sm:max-w-[1174] sm:grid-cols-2 sm:items-center sm:overflow-visible">
      <div className="relative mb-[86px] mt-[58px] h-[245px] w-[140%] sm:col-start-2 sm:mb-0 sm:mt-0 sm:h-auto sm:w-[168.5%] sm:pl-[28px]">
        <div className="relative h-[calc(100vw*0.65)] max-h-[300px] sm:max-h-[578px]">
          <Image
            src="/images/illustration-devices.svg"
            fill
            className="right-0 object-contain"
            alt="devices"
          />
        </div>
      </div>

      <section className="px-8 sm:col-start-1 sm:row-start-1 sm:self-center">
        <div className="flex items-center gap-x-4 font-barlow-condensed uppercase">
          <div className="rounded-full bg-pt-very-dark-blue px-[10px] py-[1px] text-[16px] font-bold tracking-wider text-white">
            {details.status}
          </div>
          <div className="text-[16px] tracking-[0.280em] text-pt-grayish-blue">
            {details.category}
          </div>
        </div>
        <div className="mt-4">
          <div className="font-barlow-condensed text-[40px] font-bold uppercase leading-[1] text-pt-very-dark-blue sm:text-[64px]">
            {details.header}
          </div>
          <div className="mt-4 max-w-[280px] text-pt-dark-grayish-blue sm:mt-8">
            {details.description}
          </div>
        </div>

        <div className="mb-[84px] mt-6 flex items-center gap-x-5 uppercase sm:mb-0 sm:mt-[60px] sm:gap-x-6">
          <div className="cursor-pointer rounded-md bg-pt-red px-[25px] py-[10px] font-barlow-condensed text-[14px] font-bold tracking-[0.066em] text-white transition-colors duration-300 peer hover:bg-pt-red/80 sm:flex-shrink-0 sm:px-8 sm:py-[14px] sm:text-[16px]">
            Schedule a demo
          </div>
          <div className="font-barlow-condensed text-[14px] font-normal tracking-[0.180em] text-pt-grayish-blue transition-colors duration-300 peer-hover:text-pt-very-dark-blue sm:flex-shrink-0 sm:tracking-[0.380em]">
            To see a preview
          </div>
        </div>
      </section>
    </main>
  );
}
