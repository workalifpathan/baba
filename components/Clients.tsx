import Image from "next/image";
import Reveal from "./Reveal";
import { clients } from "@/data/content";

export default function Clients() {
  return (
    <>
      <div className="divider" />
      <section className="py-16 text-center" id="clients">
        <Reveal className="wrap">
          <h2 className="font-display italic font-bold text-orange-deep text-[clamp(1.8rem,3.6vw,2.6rem)] mb-9">
            Clients &amp; Collaborations
          </h2>

          <div className="flex flex-nowrap justify-center items-start gap-4 sm:gap-6 md:gap-7 overflow-x-auto px-2 -mx-2 pb-2">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center gap-2 shrink-0"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-grad-orange flex items-center justify-center overflow-hidden shadow-[0_8px_18px_rgba(226,112,31,0.25)] relative">
                  <Image src={c.logo} alt={c.name} fill sizes="80px" className="object-cover" />
                </div>
                <p className="font-display font-semibold text-[0.68rem] sm:text-xs text-dark-soft leading-tight whitespace-nowrap">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
