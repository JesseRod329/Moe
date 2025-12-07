import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BatteryCharging, CheckCircle2, Clock3, MapPin, PhoneCall, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

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
    <div className="relative flex flex-col bg-black">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-[-20%] h-80 w-80 rounded-full bg-neon-green/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-neon-blue/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0,_transparent_40%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero_background_1764625861535.png"
            alt="Moe Productions Shop"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/60" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-20 pt-28 lg:flex-row lg:items-center lg:pt-32">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-gray-200 ring-1 ring-white/10">
              <span className="flex h-2 w-2 items-center justify-center rounded-full bg-neon-green" />
              NYC E-Bike & Scooter Repair Studio
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Electric bike repairs that keep you earning, delivered with zero guesswork.
            </h1>
            <p className="max-w-2xl text-lg text-gray-300">
              Fast turnarounds, battery-safe handling, and honest pricing from a Brooklyn shop that knows how hard you ride.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-neon-green px-6 py-3 text-base font-semibold text-black shadow-[0_0_25px_rgba(0,255,127,0.35)] transition hover:scale-105"
              >
                Book a repair
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neon-blue/60 px-6 py-3 text-base font-semibold text-neon-blue transition hover:border-neon-blue hover:bg-neon-blue/10"
              >
                View pricing
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
                <BatteryCharging className="h-4 w-4 text-neon-green" />
                Certified battery-safe storage
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
                <Wrench className="h-4 w-4 text-neon-blue" />
                Parts in stock for common fixes
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5/80 p-6 backdrop-blur-lg shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-blue/20" />
              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Brooklyn, NY</p>
                    <p className="text-2xl font-semibold text-white">Moe Productions</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-neon-green ring-1 ring-white/15">Walk-ins welcome</span>
                </div>
                <div className="grid grid-cols-2 gap-4 rounded-2xl bg-black/40 p-4 ring-1 ring-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Shop Hours</p>
                    <p className="text-lg font-semibold text-white">Mon - Sat</p>
                    <p className="text-sm text-gray-300">11:00 AM - 7:00 PM</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-gray-200">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-neon-blue" />
                      <span>1601 63rd St, Brooklyn</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneCall className="h-4 w-4 text-neon-green" />
                      <span>(929) 614-1947</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Same-week repairs', 'Battery diagnostics', 'Brake + tire experts', 'Custom builds'].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-gray-200 ring-1 ring-white/10">
                      <CheckCircle2 className="h-4 w-4 text-neon-green" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="relative border-t border-white/5 bg-black/80 py-16">
        <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-neon-green/5 via-transparent to-transparent" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {guarantees.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-neon-green/40 hover:shadow-[0_30px_90px_rgba(0,255,127,0.12)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-neon-green ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Services */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-black via-black/90 to-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-3 pb-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neon-green">Most requested work</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Popular services we turn around fast</h2>
              <p className="mt-2 max-w-2xl text-gray-300">
                Upfront prices and parts in stock so you are back on the road without missing shifts.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-neon-blue transition hover:text-white"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Tire Change"
              price="$45"
              description="One tire replacement. $80 for two."
              icon="/assets/icon_tire_1764625896372.png"
            />
            <ServiceCard
              title="Brake Service"
              price="$20+"
              description="Pads service per caliper with bleeding available."
              icon="/assets/icon_brake_1764625922566.png"
            />
            <ServiceCard
              title="Battery Diagnose"
              price="$90"
              description="Full diagnostic with a clear report on next steps."
              icon="/assets/icon_battery_1764625909438.png"
            />
            <ServiceCard
              title="Custom Work"
              price="Varies"
              description="Graphics kits, powder coating, and bespoke builds."
              icon="/assets/icon_custom_1764625942222.png"
            />
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
