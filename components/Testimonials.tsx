import Image from "next/image";
import Reveal from "./Reveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-10 pb-16">
      <Reveal className="wrap grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-grad-orange text-white rounded-lg2 p-8 relative"
          >
            <div className="w-14 h-14 rounded-full bg-white overflow-hidden mb-3.5 border-[3px] border-white/60 relative">
              <Image src={t.photo} alt={t.name} fill sizes="56px" className="object-cover" />
            </div>
            <h4 className="font-display text-[1.1rem] font-bold">{t.name}</h4>
            <div className="text-[0.82rem] font-semibold opacity-90 mb-3.5">{t.role}</div>
            <p className="text-[0.98rem] leading-relaxed">{t.quote}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
