import Image from "next/image";
import Reveal from "./Reveal";
import { hero, socialLinks } from "@/data/content";
import { iconMap } from "./Icons";

export default function Hero() {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-14">
      <Reveal className="wrap grid md:grid-cols-[1.15fr_.85fr] gap-10 md:gap-12 items-center text-center md:text-left">
        <div>
          <h1 className="font-display font-extrabold leading-[1.12] text-[clamp(2.1rem,4.4vw,3.4rem)] tracking-tight">
            {hero.headline.map((line, i) => (
              <span key={i} className={i === hero.accentLine ? "text-orange-deep" : undefined}>
                {line}
                {i < hero.headline.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-[460px] mx-auto md:mx-0 text-dark-soft text-[1.05rem]">
            {hero.lead}
          </p>
          <div className="mt-7 flex gap-3.5 flex-wrap justify-center md:justify-start">
            <a
              href={hero.primaryButton.href}
              className="font-display font-semibold text-[0.95rem] px-7 py-3.5 rounded-md border-2 border-dark bg-dark text-white inline-block transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              {hero.primaryButton.label} &rarr;
            </a>
            <a
              href={hero.secondaryButton.href}
              className="font-display font-semibold text-[0.95rem] px-7 py-3.5 rounded-md border-2 border-dark bg-transparent text-dark inline-block transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              {hero.secondaryButton.label}
            </a>
          </div>
          <div className="mt-7 flex gap-3.5 justify-center md:justify-start">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.platform];
              if (!Icon) return null;
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  aria-label={s.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center transition-colors hover:bg-orange-deep hover:-translate-y-0.5"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative rounded-lg2 overflow-hidden bg-orange-pale mx-auto max-w-sm md:max-w-none w-full" style={{ aspectRatio: "4 / 5" }}>
          <Image
            src={hero.photo}
            alt={hero.photoAlt}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
