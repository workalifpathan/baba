"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { contact } from "@/data/content";

type Status = "idle" | "loading" | "success" | "error" | "not-configured";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!contact.formEndpoint) {
      setStatus("not-configured");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    try {
      await fetch(contact.formEndpoint, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      // Google Apps Script web apps don't return readable CORS responses
      // in "no-cors" mode, so a successful fetch (no thrown error) is our
      // best signal that the request went through.
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-16" id="contact">
      <Reveal className="wrap border-t border-orange-pale pt-14">
        <div className="grid md:grid-cols-[.9fr_1.1fr] gap-10 md:gap-14 items-start">
          <div>
            <h2 className="font-display font-extrabold text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.15]">
              {contact.heading}
              <span className="text-orange-deep">{contact.headingAccent}</span>
              {contact.headingEnd}
            </h2>
            <p className="mt-4 text-dark-soft text-[1.02rem] max-w-sm">{contact.subtext}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-orange-pale rounded-lg2 p-6 md:p-8 shadow-[0_10px_30px_rgba(226,112,31,0.08)] grid sm:grid-cols-2 gap-5"
          >
            <Field label="Full name" name="fullName" required placeholder="Jane Smith" />
            <Field label="Email" name="email" type="email" required placeholder="jane@acme.com" />
            <Field label="WhatsApp number" name="whatsapp" type="tel" placeholder="+1 555 123 4567" />
            <div className="sm:col-span-2">
              <label className="block font-display font-semibold text-sm mb-1.5" htmlFor="reason">
                Reason for reaching out
              </label>
              <textarea
                id="reason"
                name="reason"
                required
                rows={4}
                placeholder="Tell me a bit about your project..."
                className="w-full rounded-md border-2 border-orange-pale bg-cream/40 px-4 py-3 text-[0.95rem] focus:outline-none focus:border-orange-deep transition-colors resize-none"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="font-display font-semibold text-sm bg-dark text-white px-7 py-3.5 rounded-md inline-block hover:-translate-y-0.5 hover:shadow-xl transition-transform disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {status === "loading" ? "Sending…" : "Send message"}
                {status !== "loading" && <> &rarr;</>}
              </button>

              {status === "success" && (
                <p className="mt-3 text-sm font-semibold text-orange-deep">
                  Thanks — your message is in. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm font-semibold text-red-600">
                  Something went wrong sending that. Mind trying again in a moment?
                </p>
              )}
              {status === "not-configured" && (
                <p className="mt-3 text-sm font-semibold text-red-600">
                  This form isn&apos;t connected yet — add your Google Sheet link in
                  data/content.ts (contact.formEndpoint).
                </p>
              )}
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-display font-semibold text-sm mb-1.5" htmlFor={name}>
        {label} {required && <span className="text-orange-deep">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border-2 border-orange-pale bg-cream/40 px-4 py-3 text-[0.95rem] focus:outline-none focus:border-orange-deep transition-colors"
      />
    </div>
  );
}
