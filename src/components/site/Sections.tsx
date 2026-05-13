import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";
import {
  IconPalette,
  IconPaw,
  IconEye,
  IconStar,
  IconBrush,
  IconCircle,
  IconMoodSmile,
  IconTrophy,
  IconDimensions,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconClock,
  IconCalendar,
  IconBrandFacebook,
  IconBrandInstagram,
  IconChevronDown,
  IconCheck,
} from "@tabler/icons-react";
import { useState, type FormEvent } from "react";
import { Logo } from "./Logo";
import hero from "@/assets/Image.jpg";
import two from "@/assets/2.png";
import three from "@/assets/zoo.jpg";

const WA_BOOK =
  "https://wa.me/9779860250866?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20school%20excursion%20visit.";
const WA_MURAL =
  "https://wa.me/9779860250866?text=Hello%2C%20I%20am%20interested%20in%20a%20school%20mural%20from%20Art%20Sala.";
const WA_GENERIC =
  "https://wa.me/9779860250866?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%203D%20Art%20Museum.";

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="top" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:py-0">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[90vh]">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src={two}
                alt="Students from V.S Niketan at 3D Art Museum, Tikathali"
                className="w-full object-cover shadow-2xl ring-1 ring-black/5"
              />

              <div className="absolute inset-0 flex items-end bg-black/0 transition duration-300 group-hover:bg-black/30">
                <div className="translate-y-full p-5 text-sm text-white transition duration-300 group-hover:translate-y-0">
                  Students from V.S Niketan at 3D Art Museum, Tikathali
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal mb-5">
                Tikathali · Lalitpur
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-semibold text-forest leading-[1.05]">
                A Creative Learning Excursion for Schools
              </h1>
              <p className="mt-5 text-lg text-ink/70 leading-relaxed">
                Where students don't just visit — they create, discover, and explore what a life in
                the arts feels like.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex justify-center items-center rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground shadow hover:brightness-105 transition"
                >
                  Plan Your School Excursion
                </a>
                <a
                  href="#offer"
                  className="inline-flex justify-center items-center rounded-full border-2 border-teal px-6 py-3 text-sm font-semibold text-ink hover:bg-teal hover:text-ink transition"
                >
                  See What We Offer
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-ink/70">
                {[
                  "200+ Schools Visited",
                  "Nepal's first Only 3D Art Museum",
                  "Fully Supervised",
                  "Curriculum-Aligned Activities",
                ].map((t, i) => (
                  <div key={t} className="flex items-center gap-3">
                    {i > 0 && <span className="hidden sm:block h-4 w-px bg-border" />}
                    <span className="font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY ---------------- */
const whyCards = [
  {
    Icon: IconPalette,
    title: "Hands-on creative skills",
    text: "Students paint, sculpt, and create under the guidance of our resident artists. They leave with something they made themselves.",
  },
  {
    Icon: IconPaw,
    title: "Live nature education",
    text: "Animal feeding and interaction at our mini zoo supports EVS and science curriculum in a way no classroom can replicate.",
  },
  {
    Icon: IconEye,
    title: "Interactive art session",
    text: "100+ optical illusion installations teach perception, light, and spatial reasoning through direct experience — not explanation.",
  },
  {
    Icon: IconStar,
    title: "Career orientation in arts",
    text: "Students experience what a professional creative career actually feels like, guided by practicing artists. A first for most of them.",
  },
];
export function Why() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-5xl">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
            Built for modern education
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest font-semibold leading-tight">
            Schools today need more than a field trip. They need an excursion that delivers.
          </h2>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Practical, skills-based learning is no longer optional — it is expected. Every
            experience at 3D Art Museum is designed to meet that standard.
          </p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-5 lg:gap-6">
          {whyCards.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="h-full p-7 lg:p-8 rounded-2xl bg-background border border-border hover:border-teal transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-white mb-5">
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest mb-2">{title}</h3>
                <p className="text-ink/70 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- OFFER ---------------- */
const offerCards = [
  {
    Icon: IconBrush,
    title: "Canvas Painting",
    text: "Each student works on their own personal canvas, guided step by step by our artist. They take it home the same day.",
    tag: "Take-home artwork",
  },
  {
    Icon: IconCircle,
    title: "Stone Painting",
    text: "Students paint river stones with acrylic colors — tactile, simple, and deeply satisfying. Perfect for all age groups.",
    tag: "All ages",
  },
  {
    Icon: IconMoodSmile,
    title: "Face Painting",
    text: "Professional face painting that children wear home — it's the first thing parents notice at pickup and the first conversation starter.",
    tag: "Ages KG–Grade 5",
  },
  {
    Icon: IconTrophy,
    title: "Pottery",
    text: "Wheel and hand-build pottery with our dedicated instructor. A skilled, premium experience students never forget.",
    tag: "Limited slots · Premium",
  },
  {
    Icon: IconDimensions,
    title: "3D Art Museum Tour",
    text: "A guided exploration of 100+ interactive optical illusion installations across themed rooms — aquarium, jungle, and more.",
    tag: "Curriculum: Art + Science",
  },
  {
    Icon: IconPaw,
    title: "Mini Zoo & Animal Feeding",
    text: "Supervised interaction and feeding with our live animals — rabbits, guinea pigs, turkey, and chicken — with nature education woven in.",
    tag: "Curriculum: EVS + Nature",
  },
];
export function Offer() {
  return (
    <section id="offer" className="bg-forest py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-5xl">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
            Six experiences
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            A complete creative excursion — all under one roof
          </h2>
          <p className="mt-5 text-lg text-teal-soft leading-relaxed">
            From fine art workshops to live animal interaction — every activity is guided,
            structured, and designed to produce something real.
          </p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {offerCards.map(({ Icon, title, text, tag }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="h-full flex flex-col p-7 rounded-2xl bg-forest-soft border border-white/5 hover:border-teal/60 transition">
                <Icon size={36} className="text-white mb-5" />
                <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white/75 leading-relaxed flex-1">{text}</p>
                <span className="mt-5 self-start inline-flex rounded-full bg-cta px-3 py-1 text-xs font-semibold text-cta-foreground">
                  {tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-14 rounded-2xl bg-cta p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <p className="text-cta-foreground text-lg lg:text-xl font-medium max-w-2xl">
              Every school group is different. We tailor the excursion to your students, your grade
              levels, and your schedule.
            </p>
            <a
              href="#contact"
              className="shrink-0 inline-flex rounded-full border-2 border-cta-foreground px-6 py-3 text-sm font-semibold text-cta-foreground hover:bg-cta-foreground hover:text-cta transition"
            >
              Request a Custom Excursion Proposal
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- EXCURSION ---------------- */
const programs = [
  {
    accent: "bg-teal",
    label: "Montessori & KG",
    heading: "For the youngest explorers",
    text: "Sensory-rich, playful, and safe. Animal feeding, face painting, and guided art activities designed for short attention spans and maximum wonder. Every moment is supervised by our trained staff.",
  },
  {
    accent: "bg-cta",
    label: "Primary — Grades 1–5",
    heading: "Where curiosity becomes creativity",
    text: "Canvas painting, stone painting, 3D art exploration, and nature education — structured in rotating groups so every student is always engaged. Students take home artwork and a participation certificate.",
    featured: true,
  },
  {
    accent: "bg-forest",
    label: "Middle & High School — Grades 6–12",
    heading: "Real skills. Real artists. Real outcomes.",
    text: "Deeper creative workshops, pottery, canvas painting, and career orientation sessions with our resident artists. Designed for older learners who are ready to engage seriously with a creative discipline.",
  },
];
const steps = [
  { n: "01", t: "Book your date", d: "WhatsApp or email us. We confirm within 24 hours." },
  {
    n: "02",
    t: "We plan together",
    d: "We send a visit itinerary, permission slip template, and pre-visit briefing.",
  },
  {
    n: "03",
    t: "Arrive and be welcomed",
    d: "Students are greeted by our team and split into activity groups.",
  },
  {
    n: "04",
    t: "Create, explore, discover",
    d: "Flexible hours of fully supervised, rotating activities.",
  },
  {
    n: "05",
    t: "Leave with something real",
    d: "Artwork, a digital photo album, and a Family Return Pass for parents.",
  },
];
export function Excursion() {
  return (
    <section id="excursion" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-5xl">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
            The excursion program
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest font-semibold leading-tight">
            Designed for every level — from Montessori to Grade 12
          </h2>
        </Reveal>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.07}>
              <div
                className={`h-full bg-background rounded-2xl border border-border overflow-hidden ${p.featured ? "lg:-translate-y-3 shadow-xl" : "shadow-sm"}`}
              >
                <div className={`h-1.5 ${p.accent}`} />
                <div className="p-7 lg:p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
                    {p.label}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-forest mb-3">
                    {p.heading}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl sm:text-3xl text-forest font-semibold text-center mb-12">
              What your visit looks like — from booking to departure
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-5 lg:gap-3 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="relative h-full p-5 lg:p-6 bg-background rounded-2xl border border-border">
                  <div className="font-display text-3xl text-cta font-bold mb-2">{s.n}</div>
                  <div className="font-semibold text-forest mb-1.5">{s.t}</div>
                  <p className="text-sm text-ink/70 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    q: "The students were completely engaged throughout the visit. The blend of education and entertainment is exactly what modern field trips should be.",
    who: "Vice-Principal, VS Niketan",
  },
  {
    q: "The level of supervision and structure was exactly what we needed. Everything ran smoothly and the children were completely engaged throughout the entire visit.",
    who: "Class Teacher, Chelsea International School",
  },
  {
    q: "What I appreciated most was that every child had something to show their parents at the end. The artwork and certificates made the trip feel genuinely educational and purposeful.",
    who: "ECA Head, Modern Indian School",
  },
];
const schoolBadges = [
  "VS Niketan",
  "Chelsea World School",
  "Modern Indian School",
  "Little Angel's School",
  "Shemrock School",
  "Ripu Mardini Sainik Mahavidyalaya",
  "Rai School",
  "Euro Kids Montessori",
];
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-5xl">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
            Trusted across the valley
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest font-semibold leading-tight">
            200+ schools have brought their students here. Here's what their coordinators say.
          </h2>
        </Reveal>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.who} delay={i * 0.07}>
              <div className="h-full p-7 lg:p-8 rounded-2xl bg-background border border-border">
                <div className="font-display text-6xl leading-none text-teal mb-2">“</div>
                <p className="text-ink/85 text-lg leading-relaxed">{t.q}</p>
                <div className="mt-6 pt-5 border-t border-teal/40">
                  <div className="text-sm font-medium text-forest">— {t.who}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-16 text-center">
            <div className="text-sm font-medium text-ink/60 mb-5">
              Schools that have visited us include:
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {schoolBadges.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-border text-sm text-ink font-medium"
                >
                  {s}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full bg-teal/10 text-sm text-teal font-semibold">
                and many more across the Kathmandu Valley
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  const stats = [
    { n: "100+", l: "Interactive 3D installations" },
    { n: "200+", l: "Schools welcomed" },
    { n: "6", l: "Creative activities offered" },
    { n: "5 min", l: "From Gwarko Chowk" },
  ];
  return (
    <section id="about" className="bg-forest py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
              Who we are
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Built by artists. Designed for learners.
            </h2>
            <div className="mt-6 space-y-4 text-teal-soft text-lg leading-relaxed">
              <p>
                3D Art Museum is Lalitpur's only interactive 3D optical illusion museum — and far
                more than a museum. We are a creative learning destination built by the team at Art
                Sala, a Kathmandu-based mural and 3D art studio with years of experience creating
                immersive environments for schools, homes, and businesses across Nepal.
              </p>
              <p>
                Our venue was designed around one belief: children learn best when they are fully
                engaged — when they are touching, creating, experimenting, and discovering. Every
                room, every activity, and every member of our team is oriented toward that belief.
              </p>
              <p>
                We are located in Tikathali, Lalitpur — five minutes from Gwarko Chowk — and we
                welcome school groups on weekday mornings, with capacity for up to 200 students per
                visit.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="p-5 rounded-xl bg-forest-soft border border-white/10">
                  <div className="font-display text-3xl lg:text-4xl font-semibold text-cta">
                    {s.n}
                  </div>
                  <div className="text-sm text-white/75 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src={two}
                alt="Students infront of the great wall of China Art at the International themed room"
                className="w-full object-cover shadow-2xl ring-1 ring-black/5"
              />

              <div className="absolute inset-0 flex items-end bg-black/0 transition duration-300 group-hover:bg-black/30">
                <div className="translate-y-full p-5 text-sm text-white transition duration-300 group-hover:translate-y-0">
                  Students infront of the great wall of China Art at the International themed room
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ART SALA SERVICES ---------------- */
export function ArtSala() {
  return (
    <section className="bg-background py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h3 className="font-display text-2xl sm:text-3xl text-forest font-semibold leading-tight">
              Want to bring this environment to your own school?
            </h3>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Art Sala — our parent company — creates custom wall murals and 3D art installations
              for schools, playgrounds, corridors, and classrooms across the Kathmandu Valley.
              Schools that visit 3D Art Museum often work with Art Sala to create a similar
              environment on their own campus.
            </p>
            <a
              href={WA_MURAL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border-2 border-teal px-6 py-3 text-sm font-semibold text-ink hover:bg-teal hover:text-ink transition"
            >
              Enquire about school murals
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src={three}
                alt="Proud wall mural project at the central zoo of Nepal"
                className="w-full object-cover shadow-2xl ring-1 ring-black/5"
              />

              <div className="absolute inset-0 flex items-end bg-black/0 transition duration-300 group-hover:bg-black/30">
                <div className="translate-y-full p-5 text-sm text-white transition duration-300 group-hover:translate-y-0">
                  Proud wall mural project at the central zoo of Nepal
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "How do we get a quote for a school visit?",
    a: "Simply send us a WhatsApp message or fill out the contact form below with your school name, approximate student count, and preferred date. We will send you a tailored excursion proposal within 24 hours — no obligation.",
  },
  {
    q: "What is the minimum group size?",
    a: "We welcome school groups from 20 students upward. For the best rotational experience across all activity zones, groups of 50–200 students work particularly well.",
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend booking at least 7 days in advance to secure your preferred date and allow time for planning. Popular dates — especially in Jestha and Mangsir — fill quickly.",
  },
  {
    q: "Are the activities safe for young children, including Montessori and KG?",
    a: "Yes. All activities and materials are child-safe and non-toxic. We maintain a trained staff member at every activity zone throughout the visit. Our venue is fully enclosed and secure.",
  },
  {
    q: "Can we customise which activities our students do?",
    a: "Absolutely. Schools can choose any combination of activities. For example, canvas painting for your art-focused students and stone painting for the rest — we tailor the program to your group and your budget.",
  },
  {
    q: "Do you supervise the students or do teachers need to manage them?",
    a: "Our trained staff supervise all activity zones. We assign a dedicated School Host to your group for the entire visit. We recommend one accompanying teacher or chaperone per 20 students to support our team.",
  },
  {
    q: "What do students take home from the visit?",
    a: "Every student receives a participation certificate. Students who do painting activities take their artwork home. We share a digital photo album with the school within 24 hours. Premium visits also include printed souvenir photos and a Family Return Pass for parents.",
  },
  {
    q: "Do you offer anything for high school students?",
    a: "Yes — we run deeper creative workshops for Grades 6–12, including pottery, canvas painting, and career orientation sessions with our resident artists. For IB and A-Level schools we can provide a CAS activity completion letter.",
  },
];
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest font-semibold leading-tight text-center">
            Common questions from school coordinators
          </h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.02}>
                <div className="rounded-xl bg-background border border-border overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left"
                  >
                    <span className="font-medium text-forest text-base lg:text-lg">{f.q}</span>
                    <IconChevronDown
                      size={22}
                      className={`shrink-0 text-teal transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="mx-5 lg:mx-6 mb-6 pl-4 border-l-2 border-teal text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const schoolName = formData.get("schoolName");
    const name = formData.get("name");
    const role = formData.get("role");
    const whatsapp = formData.get("whatsapp");
    const email = formData.get("email");
    const students = formData.get("students");
    const visitDate = formData.get("visitDate");
    const requirements = formData.get("requirements");

    const message = `Hello, I would like to enquire about a school excursion visit.

🏫 School Name: ${schoolName}
👤 Contact Person: ${name}
🎓 Role: ${role}
📱 WhatsApp: ${whatsapp}
📧 Email: ${email}
👥 Approx. Students: ${students}
📅 Preferred Visit Date: ${visitDate}

📝 Activities / Requirements:
${requirements || "None"}

Please send us a proposal.`;

    const whatsappUrl = `https://wa.me/9779860250866?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };
  return (
    <section id="contact" className="bg-forest py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-5xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Ready to plan your school's excursion?
          </h2>
          <p className="mt-4 text-lg text-teal-soft">
            Send us your details and we'll have a tailored proposal in your inbox within 24 hours.
          </p>
        </Reveal>
        <div className="mt-12 grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="bg-background text-ink rounded-2xl p-7 lg:p-10 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white mb-5">
                    <IconCheck size={28} />
                  </div>
                  <h3 className="font-display text-2xl text-forest font-semibold mb-2">
                    Thank you
                  </h3>
                  <p className="text-ink/75">We will send your proposal within 24 hours. 🙏</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <Field label="School Name">
                    <input required type="text" name="schoolName" className={inputCls} />
                  </Field>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your Name">
                      <input required type="text" name="name" className={inputCls} />
                    </Field>
                    <Field label="Your Role">
                      <select required name="role" className={inputCls} defaultValue="">
                        <option value="" disabled>
                          Select role
                        </option>
                        <option>ECA Coordinator</option>
                        <option>Principal</option>
                        <option>Vice-Principal</option>
                        <option>Class Teacher</option>
                        <option>Other</option>
                      </select>
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="WhatsApp Number">
                      <input required type="tel" name="whatsapp" className={inputCls} />
                    </Field>
                    <Field label="Email Address">
                      <input required type="email" name="email" className={inputCls} />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Approximate Number of Students">
                      <input required type="number" name="students" min={1} className={inputCls} />
                    </Field>
                    <Field label="Preferred Visit Date">
                      <input required type="date" name="visitDate" className={inputCls} />
                    </Field>
                  </div>
                  <Field label="Any specific activities or requirements?">
                    <textarea rows={4} name="requirements" className={inputCls} />
                  </Field>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-cta px-6 py-4 font-semibold text-cta-foreground hover:brightness-105 transition"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <ContactItem
              Icon={IconBrandWhatsapp}
              label="WhatsApp"
              value="9860250866"
              href={WA_GENERIC}
            />
            <ContactItem
              Icon={IconMail}
              label="Email"
              value="artsalanepal@gmail.com"
              href="mailto:artsalanepal@gmail.com"
            />
            <ContactItem
              Icon={IconMapPin}
              label="Location"
              value="Tikathali, Lalitpur — 5 minutes from Gwarko Chowk"
            />
            <ContactItem
              Icon={IconClock}
              label="School visits"
              value="Sunday–Friday, 10:00 AM – 04:30 PM"
            />
            <ContactItem Icon={IconCalendar} label="Weekend visits" value="Available on request" />
            <div className="mt-6 aspect-[4/3] w-full rounded-2xl bg-forest-soft border-2 border-dashed border-teal/40 flex items-center justify-center text-center p-6">
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6105838134968!2d85.35534487581509!3d27.667517476205482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17568d97c0b1%3A0x356c545c2282408b!2s3D%20Art%20Museum%20-%20Interactive%20Museum!5e0!3m2!1sen!2snp!4v1778656393531!5m2!1sen!2snp"
                  className="h-[320px] w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const inputCls =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink/80 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
function ContactItem({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof IconMail;
  label: string;
  value: string;
  href?: string;
}) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-start gap-4 group"
    >
      <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-soft text-teal">
        <Icon size={22} />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-teal-soft">{label}</div>
        <div className="text-white text-base group-hover:text-cta transition">{value}</div>
      </div>
    </Tag>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="bg-footer text-teal-soft">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Logo light />
            <p className="mt-5 text-sm text-teal-soft max-w-xs leading-relaxed">
              A creative learning excursion for schools and families.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/Oneday3dartworld/"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-soft text-teal hover:bg-teal hover:text-white transition"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <div className="font-display text-white text-lg mb-4">Quick links</div>
            <ul className="space-y-2 text-sm">
              {["About", "What We Offer", "School Excursion", "Testimonials", "FAQ", "Contact"].map(
                (l) => {
                  const map: Record<string, string> = {
                    About: "#about",
                    "What We Offer": "#offer",
                    "School Excursion": "#excursion",
                    Testimonials: "#testimonials",
                    FAQ: "#faq",
                    Contact: "#contact",
                  };
                  return (
                    <li key={l}>
                      <a href={map[l]} className="hover:text-cta transition">
                        {l}
                      </a>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
          <div>
            <div className="font-display text-white text-lg mb-4">Contact</div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <IconBrandWhatsapp
                  size={18}
                  className="text-teal shrink-0 mt-0.5"
                  href={WA_GENERIC}
                />{" "}
                9860250866
              </li>
              <li className="flex gap-3">
                <IconMapPin size={18} className="text-teal shrink-0 mt-0.5" /> Tikathali, Lalitpur,
                Nepal
              </li>
              <li className="flex gap-3">
                <IconClock size={18} className="text-teal shrink-0 mt-0.5" /> Sun–Fri, 10:00 AM –
                04:30 PM
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-forest-soft text-center text-xs text-muted-foreground">
          © 2025 3D Art Museum · An Art Sala Company · Tikathali, Lalitpur, Nepal · All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
