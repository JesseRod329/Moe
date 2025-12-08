"use client";

import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Grow the image as user scrolls down. Adjust factor as needed.
      const newScale = 1 + scrollY * 0.0005;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div
            className="relative w-full h-full"
            style={{ transform: `scale(${scale})`, transition: 'transform 0.1s ease-out' }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src="/hero_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Electric Bike Repair <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              That Keeps You Moving
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Fast turnarounds, honest prices, and battery safe repairs for NYC riders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="rounded-full bg-neon-green px-8 py-4 text-lg font-bold text-black shadow-[0_0_20px_rgba(0,255,127,0.4)] hover:bg-neon-green/90 hover:scale-105 transition-all duration-300"
            >
              Book a Repair
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-neon-blue px-8 py-4 text-lg font-bold text-neon-blue hover:bg-neon-blue/10 hover:scale-105 transition-all duration-300"
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

      {/* Credentials Strip */}
      <section className="py-12 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Trusted With</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="hover:opacity-80 transition-opacity">
              <img src="/radpower_logo.png" alt="Rad Power" className="h-28 w-28 object-contain" />
            </div>
            <div className="hover:opacity-80 transition-opacity">
              <img src="/aventon_logo.png" alt="Aventon" className="h-28 w-28 object-contain" />
            </div>
            <div className="hover:opacity-80 transition-opacity">
              <img src="/lectric_logo.png" alt="Lectric" className="h-28 w-28 object-contain" />
            </div>
            <div className="hover:opacity-80 transition-opacity">
              <img src="/super73_logo.png" alt="Super73" className="h-28 w-28 object-contain" />
            </div>
            <div className="hover:opacity-80 transition-opacity">
              <img src="/juiced_logo.png" alt="Juiced" className="h-28 w-28 object-contain" />
            </div>
            <div className="hover:opacity-80 transition-opacity">
              <img src="/himiway_logo.png" alt="Himiway" className="h-28 w-28 object-contain" />
            </div>
            <div className="hover:opacity-80 transition-opacity">
              <img src="/arielrider_logo.png" alt="Ariel Rider" className="h-28 w-28 object-contain" />
            </div>
            <div className="hover:opacity-80 transition-opacity">
              <img src="/segway_logo.png" alt="Segway" className="h-28 w-28 object-contain" />
            </div>
            <div className="hover:opacity-80 transition-opacity">
              <img src="/xiaomi_logo.png" alt="Xiaomi" className="h-28 w-28 object-contain" />
            </div>
            <div className="hover:opacity-80 transition-opacity">
              <img src="/gotrax_logo.png" alt="Gotrax" className="h-28 w-28 object-contain" />
            </div>
            <div className="text-xl font-bold text-neon-green/60 hover:text-neon-green transition-colors">& more</div>
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
              title="Tire Replacement"
              price="$45"
              description="One tire replacement. $80 for two."
              icon="/tire_icon.png"
              isGreenIcon={true}
            />
            <ServiceCard
              title="Brake Service"
              price="$20+"
              description="Pads service per caliper. Bleeding available."
              icon="/brake_icon.png"
              isGreenIcon={true}
            />
            <ServiceCard
              title="Battery Diagnose"
              price="$90"
              description="Full diagnostic check of your battery pack."
              icon="/battery_icon.png"
              isGreenIcon={true}
            />
            <ServiceCard
              title="Custom Work"
              price="Varies"
              description="Graphics kits, powder coating, and mods."
              icon="/custom_icon.png"
              isGreenIcon={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
