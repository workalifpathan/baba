import { footer, socialLinks } from "@/data/content";
import { iconMap } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-8">
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-sm">
          &copy; {year} {footer.text}{" "}
          <a href={footer.linkHref} className="text-orange-light font-semibold">
            {footer.linkLabel}
          </a>
        </p>
        <div className="flex items-center gap-4">
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
                className="text-white/70 hover:text-orange-light transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
        <p className="text-xs text-white/50">{footer.tagline}</p>
      </div>
    </footer>
  );
}
