import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Battery, Clock, DollarSign, Wrench } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Using regular img for static export with basePath */}
          <img
            src="/hero-background.png"
            alt="Moe Productions Shop"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center space-y-6">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
            24 Hour Appointment Only
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
            Electric Bike Repair <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
              That Keeps You Moving
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-xl [text-shadow:_1px_1px_4px_rgb(0_0_0_/_90%)]">
            Fast turnarounds, honest prices, and battery safe repairs for NYC riders.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/booking">
              <Button size="lg" className="text-lg px-8 h-14 w-full sm:w-auto shadow-neon-green/50">
                Book a Repair
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="text-lg px-8 h-14 w-full sm:w-auto">
                View Prices
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Reservar reparación / Ver precios
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-dark-surface/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-neon-blue/20">
              <CardHeader>
                <Clock className="w-10 h-10 text-neon-blue mb-2" />
                <CardTitle>Same Week Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Most jobs finished in days, not weeks, so you don't miss work. We know your bike is your livelihood.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-neon-green/20">
              <CardHeader>
                <Battery className="w-10 h-10 text-neon-green mb-2" />
                <CardTitle>Battery Safe Shop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Repairs handled with NYC battery safety rules in mind. We inspect and store batteries safely.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-neon-blue/20">
              <CardHeader>
                <DollarSign className="w-10 h-10 text-neon-blue mb-2" />
                <CardTitle>Transparent Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  No surprise bills. Our full price sheet is posted online so you know exactly what to expect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-16 border-y border-white/5 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">Popular Services</h2>
              <p className="text-gray-400">Everything from flats to full custom builds.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {["Tires & Tubes", "Brake Service", "Battery Terminals", "Graphics Kits", "Powder Coating", "Diagnostics"].map((service) => (
                <Badge key={service} variant="outline" className="text-sm py-2 px-4 border-white/20">
                  {service}
                </Badge>
              ))}
            </div>
            <Link href="/services">
              <Button variant="ghost" className="group text-neon-green hover:text-neon-green/80 hover:bg-neon-green/10">
                View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery Rider Focus */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-dark-surface z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Wrench className="w-16 h-16 text-neon-green mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Built for Delivery Riders</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Moe Productions focuses on the riders who keep NYC moving. We understand that downtime costs you money. 
            That's why we offer appointment-only slots to get you back on the road fast.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold">
              Schedule Your Repair Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
