import Link from "next/link";
import { nav, site } from "@/data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-orange-pale">
      <div className="wrap flex items-center justify-between py-4">
        <Link href="#" className="font-display font-extrabold text-lg tracking-tight whitespace-nowrap shrink-0">
          {site.name.split(" ")[0]}{" "}
          <span className="text-orange-deep">{site.name.split(" ").slice(1).join(" ")}.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-display text-sm font-semibold">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-orange-deep transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.ctaHref}
          className="font-display font-semibold text-sm bg-dark text-white px-5 py-2.5 rounded-md hover:-translate-y-0.5 hover:shadow-lg transition-transform"
        >
          {nav.ctaLabel} &rarr;
        </a>
      </div>
    </header>
  );
}
