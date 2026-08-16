import Reveal from "./Reveal";
import { drives } from "@/data/content";
import { Fragment } from "react";

function renderParagraph(text: string) {
  // Supports **bold** and line breaks written as \n, so the content
  // file can stay plain text while still allowing simple emphasis.
  const lines = text.split("\n");
  return lines.map((line, li) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <Fragment key={li}>
        {parts.map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={i} className="font-bold">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <Fragment key={i}>{part}</Fragment>
          )
        )}
        {li < lines.length - 1 && <br />}
      </Fragment>
    );
  });
}

export default function Drives() {
  return (
    <section className="py-16 bg-grad-orange text-white" id="about">
      <Reveal className="wrap text-center">
        <p className="font-hand text-2xl md:text-3xl font-bold text-white">
          &ldquo;{drives.caption}&rdquo;
        </p>

        <h2 className="font-display font-extrabold text-[clamp(2.1rem,4.6vw,3.2rem)] mt-4 mb-6">
          {drives.heading}
        </h2>

        <div className="flex gap-3 flex-wrap justify-center mb-10">
          {drives.tags.map((tag) => (
            <span
              key={tag}
              className="font-hand text-lg font-bold bg-white/20 px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-left max-w-3xl mx-auto">
          {drives.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 text-[1.05rem] leading-[1.75]">
              {renderParagraph(p)}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
