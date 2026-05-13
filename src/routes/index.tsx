import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { FloatingWA } from "@/components/site/FloatingWA";
import {
  Hero,
  Why,
  Offer,
  Excursion,
  Testimonials,
  About,
  ArtSala,
  FAQ,
  Contact,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3D Art Museum — A Creative Learning Excursion for Schools" },
      {
        name: "description",
        content:
          "Nepal's firstinteractive 3D art museum and creative learning destination — designed for school excursions from Montessori to Grade 12. Located in Tikathali, 5 minutes from Gwarko Chowk.",
      },
      { property: "og:title", content: "3D Art Museum — Creative Learning Excursion for Schools" },
      {
        property: "og:description",
        content:
          "Hands-on art workshops, 3D optical illusion museum, mini zoo and more — built for school excursions in the Kathmandu Valley.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Why />
        <Offer />
        <Excursion />
        <Testimonials />
        <About />
        <ArtSala />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
