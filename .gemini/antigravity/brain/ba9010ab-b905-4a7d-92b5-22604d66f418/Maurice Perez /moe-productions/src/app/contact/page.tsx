import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Moe Productions Electric Bike Service",
  description: "Contact Moe Productions Electric Bike Service for electric bike and scooter repairs in New York City. 24 hour appointment booking available online.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          Contact Us
        </h1>
        <p className="text-xl text-gray-400">
          We are here to help 24/7 by appointment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-dark-surface p-3 rounded-lg border border-white/10">
              <MapPin className="w-6 h-6 text-neon-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">New York City, NY</p>
              <p className="text-sm text-gray-500 mt-1">(Full address provided upon booking confirmation)</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-dark-surface p-3 rounded-lg border border-white/10">
              <Clock className="w-6 h-6 text-neon-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
              <p className="text-gray-400">Open 24 Hours</p>
              <p className="text-neon-blue font-medium mt-1">By Appointment Only</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-dark-surface p-3 rounded-lg border border-white/10">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400">[Add Phone Number]</p>
              <Button variant="link" className="text-neon-blue p-0 h-auto mt-1">
                Call Moe
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-dark-surface p-3 rounded-lg border border-white/10">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400">[Add Email Address]</p>
              <Button variant="link" className="text-neon-blue p-0 h-auto mt-1">
                Email Moe
              </Button>
            </div>
          </div>
        </div>

        <div className="h-full min-h-[400px] bg-dark-surface rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
          {/* Placeholder Map */}
          <div className="absolute inset-0 bg-gray-900/50" />
          <div className="relative z-10 text-center space-y-4 p-6">
            <MapPin className="w-12 h-12 text-neon-green mx-auto animate-bounce" />
            <p className="text-gray-400">Map integration coming soon</p>
            <Button variant="outline" className="mt-4">
              Open in Maps
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/booking">
          <Button size="lg" className="font-bold px-12 h-14 text-lg shadow-neon-blue/20">
            Book Online Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
