import { IconBrandWhatsapp } from "@tabler/icons-react";

export function FloatingWA() {
  return (
    <a
      href="https://wa.me/9779860250866?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%203D%20Art%20Museum."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="pulse-ring fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cta text-cta-foreground shadow-lg hover:scale-105 transition"
    >
      <IconBrandWhatsapp size={28} />
    </a>
  );
}
