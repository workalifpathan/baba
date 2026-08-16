import Reveal from "./Reveal";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <>
      <div className="divider" />
      <section className="py-16 bg-cream">
        <Reveal className="wrap">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.items.map((item) => {
              // Longer numbers (like "100,000,000+") get a smaller font so
              // they don't overflow the card on narrow screens.
              const isLong = item.number.replace(/[^0-9]/g, "").length > 5;
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-lg2 border border-orange-pale px-4 py-8 text-center shadow-[0_10px_30px_rgba(226,112,31,0.08)] overflow-hidden"
                >
                  <div
                    className={`font-display font-black text-orange-deep leading-none ${
                      isLong
                        ? "text-[clamp(1.3rem,3.2vw,2.1rem)]"
                        : "text-[clamp(2rem,4vw,2.8rem)]"
                    }`}
                  >
                    {item.number}
                  </div>
                  <div className="font-bold text-lg mt-2">{item.label}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center max-w-xl mx-auto">
            <p className="font-display font-bold text-[1.2rem]">{stats.tagHeadline}</p>
            <p className="mt-2 text-dark-soft text-[0.98rem]">{stats.tagBody}</p>
          </div>
        </Reveal>
      </section>
      <div className="divider" />
    </>
  );
}
