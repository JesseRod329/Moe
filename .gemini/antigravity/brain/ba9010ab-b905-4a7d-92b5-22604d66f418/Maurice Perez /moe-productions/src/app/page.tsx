import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero_background_1764625861535.png"
            alt="Moe Productions Shop"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Electric Bike Repair <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
              That Keeps You Moving
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Fast turnarounds, honest prices, and battery safe repairs for NYC riders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="rounded-full bg-[#00C8FF] px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(0,200,255,0.4)] hover:bg-[#00C8FF]/90 hover:scale-105 transition-all duration-300"
            >
              Book a Repair
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              View Prices
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-green/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Same Week Repairs</h3>
              <p className="text-gray-400">
                Most jobs finished in days, not weeks, so you do not miss work. We know your bike is your livelihood.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-green/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Battery Safe Shop</h3>
              <p className="text-gray-400">
                Repairs handled with NYC battery safety rules in mind. We store and service packs responsibly.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-green/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Prices</h3>
              <p className="text-gray-400">
                No surprise bills. Our full price sheet is posted online so you know exactly what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Strip */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Popular Services</h2>
            <Link href="/services" className="text-neon-blue hover:text-white transition-colors">
              View All Services &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>
    </div>
  );
}
