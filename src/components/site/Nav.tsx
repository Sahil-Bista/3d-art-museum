import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { IconMenu2, IconX } from "@tabler/icons-react";

const WA_BOOK =
  "https://wa.me/9779860250866?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20school%20excursion%20visit.";

const links = [
  { href: "#about", label: "About" },
  { href: "#offer", label: "What We Offer" },
  { href: "#excursion", label: "School Excursion" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-background"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#top">
          <Logo />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground shadow-sm hover:brightness-105 transition"
          >
            Book a School Visit
          </a>
          <button
            aria-label="Menu"
            className="lg:hidden p-2 text-ink"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground"
            >
              Book a School Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
