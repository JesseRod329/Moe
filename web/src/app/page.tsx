import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const trustBadges = [
  "Battery fire safe shop",
  "Same-week turnarounds",
  "Pickups available",
  "Parts always in-stock",
];

const highlightCards = [
  {
    title: "Flat tire to full rebuilds",
    copy: "From a single tube swap to complete custom builds, we keep delivery bikes, commuters, and long-haul rigs on the road.",
  },
  {
    title: "Honest diagnostics",
    copy: "We will tell you what is worth fixing and what is not. Photos and estimates are sent before every repair.",
  },
  {
    title: "NYC battery compliant",
    copy: "Packs are charged, stored, and transported the right way so you stay safe and regulation-ready.",
  },
];

const processSteps = [
  {
    title: "Book your slot",
    description: "Pick a repair window online so you do not wait around. Walk-ins welcome when space allows.",
  },
  {
    title: "Same-day intake",
    description: "We log your bike, gather symptoms, and send a photo-backed quote before we turn a screw.",
  },
  {
    title: "Ride out confident",
    description: "Test ride with us and leave with clear notes on the work performed plus next service reminders.",
  },
];

const guarantees = [
  {
    title: 'Same-Week Repairs',
    description: 'Express diagnostics and parts on hand to keep couriers rolling.',
    icon: Clock3,
  },
  {
    title: 'Battery Safe Shop',
    description: 'NYC-compliant storage, charging, and pack handling at every step.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparent Pricing',
    description: 'Full menu online—no surprises when you pick up your bike.',
    icon: Sparkles,
  },
];

const processSteps = [
  {
    title: 'Drop Off or Book Online',
    detail: 'Reserve a slot or roll in. We tag every bike and keep you updated.',
  },
  {
    title: 'Straightforward Diagnostics',
    detail: 'We show you what failed, what is urgent, and what can wait.',
  },
  {
    title: 'Tested, Cleaned, Ready',
    detail: 'Battery-safe charging, torque-checked bolts, and a short shakedown ride before pickup.',
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-neon-green/20 blur-3xl" />
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-neon-blue/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <section className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-20 pt-10 lg:flex-row lg:items-center lg:pt-24">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 shadow-[0_0_30px_rgba(0,255,127,0.15)]">
            <span className="h-2 w-2 rounded-full bg-neon-green" />
            NYC Electric Bike Repair & Custom Builds
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Keep Delivering. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">Stay Rolling.</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
              Moe Productions is the trusted electric bike shop for riders who cannot afford downtime. Fast service, honest pricing, and battery-safe repairs that meet New York City standards.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-neon-green px-6 py-3 text-lg font-semibold text-black shadow-[0_0_30px_rgba(0,255,127,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(0,255,127,0.45)]"
            >
              Book a Repair
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/20 px-6 py-3 text-lg font-semibold text-white transition hover:border-neon-blue hover:text-neon-blue"
            >
              View Pricing
            </Link>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
              <div className="rounded-lg bg-black/50 px-3 py-1 text-xs font-semibold text-neon-green">New</div>
              <span>Studio monitor diagnostics now available.</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-gray-200 shadow-[0_10px_40px_-25px_rgba(0,0,0,0.6)]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neon-green/50 bg-black/60 text-neon-green">★</span>
                <p className="leading-tight">{badge}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black to-white/5 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-neon-blue">
              <span className="h-2 w-2 rounded-full bg-neon-blue" />
              Open Mon-Sat 10a-7p
            </div>
            <div className="relative h-[460px] overflow-hidden rounded-[22px] border border-white/10 bg-black">
              <Image
                src="/assets/hero_background_1764625861535.png"
                alt="Moe Productions Shop"
                fill
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 w-full space-y-3 px-6 pb-6">
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <span className="inline-flex items-center rounded-full bg-neon-green/20 px-3 py-1 text-xs font-semibold text-neon-green">
                    Battery safe
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                    Walk-ins welcome
                  </span>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white">Need a pickup?</span>
                    <Link href="/contact" className="text-neon-blue hover:underline">
                      Call the shop →
                    </Link>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    We work with couriers to get your bike safely to us when you are stuck on route.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-black/60 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {highlightCards.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_-25px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:border-neon-green/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/60 text-neon-green group-hover:scale-105">
                  <span className="text-lg">◆</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-300">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02] py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-blue">Services</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Popular fixes riders book every week</h2>
            <p className="text-gray-300 md:text-lg">
              Straightforward pricing on the most requested repairs. Check our full menu for complex diagnostics, custom builds, and studio monitor service.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-200">
              <span className="rounded-full bg-white/10 px-3 py-1">Fast turnarounds</span>
              <span className="rounded-full bg-white/10 px-3 py-1">OEM & upgraded parts</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Warranty-backed</span>
            </div>
            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-neon-blue hover:text-neon-blue"
            >
              View all services →
            </Link>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ServiceCard
                title="Tire Change"
                price="$45"
                description="One tire replacement. $80 for two."
                icon="/assets/icon_tire_1764625896372.png"
              />
              <ServiceCard
                title="Brake Service"
                price="$20+"
                description="Pads service per caliper. Bleeding available."
                icon="/assets/icon_brake_1764625922566.png"
              />
              <ServiceCard
                title="Battery Diagnose"
                price="$90"
                description="Full diagnostic check of your battery pack."
                icon="/assets/icon_battery_1764625909438.png"
              />
              <ServiceCard
                title="Custom Work"
                price="Varies"
                description="Graphics kits, powder coating, and mods."
                icon="/assets/icon_custom_1764625942222.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-black via-black to-white/5 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-blue">Our process</p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Clear communication from drop-off to pickup</h2>
              <p className="text-gray-300 md:text-lg">
                No surprises. You will always know what we are fixing, how much it costs, and when your bike will be ready. We communicate through text, photo updates, and in-shop walkthroughs.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-neon-green/20 text-center text-lg leading-10 text-neon-green">✓</div>
                  <div>
                    <p className="font-semibold text-white">Rush repairs available</p>
                    <p className="text-gray-300">Ask about same-day turnaround for simple fixes when parts are on hand.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-neon-blue/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/60 text-lg font-bold text-neon-blue">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-black py-16">
        <div className="mx-auto max-w-6xl space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-black via-white/5 to-black p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-blue">Ready to roll?</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Book a repair and get back on route faster</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Schedule online or call the shop if you are stuck on a delivery. We will secure your bike, diagnose the issue, and get you back in the saddle with clear pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-neon-green px-8 py-3 text-base font-semibold text-black shadow-[0_0_30px_rgba(0,255,127,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(0,255,127,0.45)]"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition hover:border-neon-blue hover:text-neon-blue"
            >
              Call the Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-neon-green">How it works</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Clear updates from drop-off to pickup</h2>
              <p className="text-gray-300">
                We keep riders moving by removing surprises. Expect quick diagnostics, photos when helpful, and a realistic timeline.
              </p>
              <div className="mt-6 space-y-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-green/10 text-lg font-semibold text-neon-green ring-1 ring-neon-green/40">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="text-sm text-gray-300">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-black to-black p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,127,0.08),transparent_35%),_radial-gradient(circle_at_80%_0%,rgba(0,200,255,0.12),transparent_40%)]" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 rounded-full bg-black/60 px-4 py-2 text-sm text-neon-green ring-1 ring-neon-green/40">
                  <ShieldCheck className="h-4 w-4" />
                  FDNY battery-safe practices
                </div>
                <h3 className="text-2xl font-semibold text-white">Battery safety is built into every job.</h3>
                <p className="text-sm text-gray-300">
                  From intake to charging, we follow NYC guidelines. Packs are isolated, balanced, and monitored, and we refuse unsafe hardware.
                </p>
                <ul className="space-y-3 text-sm text-gray-200">
                  {["Thermal-safe storage while we work", "Proper connectors and gauge for high-current builds", "Torque checks on brakes, rotors, and stems", "Photos or videos when we spot extra issues"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-neon-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-gradient-to-br from-neon-blue/10 via-black to-black py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-neon-green">Ready when you are</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let us handle the bike—so you can handle the route.</h2>
            <p className="max-w-2xl text-gray-200">
              Book online or swing by the shop. We will give you a straight answer, a clear timeline, and work that is safe to rely on.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-neon-green px-6 py-3 text-base font-semibold text-black shadow-[0_0_25px_rgba(0,255,127,0.35)] transition hover:scale-105"
              >
                Schedule now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-gray-200 ring-1 ring-white/10">
                <PhoneCall className="h-4 w-4 text-neon-blue" />
                (929) 614-1947
              </div>
            </div>
          </div>
          <div className="grid w-full max-w-xl gap-3 rounded-3xl border border-white/10 bg-black/70 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/5 sm:grid-cols-2">
            {[{ label: 'Avg. turnaround', value: '3-5 days' }, { label: 'Rush slots weekly', value: 'Yes' }, { label: 'Walk-ins', value: 'Welcome' }, { label: 'Diagnostics credit', value: 'Applied to repair' }].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{item.label}</p>
                <p className="text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
