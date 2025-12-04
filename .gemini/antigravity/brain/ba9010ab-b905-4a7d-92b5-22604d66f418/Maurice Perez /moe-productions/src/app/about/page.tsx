import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Moe Productions Electric Bike Service",
  description: "Meet Moe, the mechanic behind Moe Productions Electric Bike Service. Learn how we keep delivery riders and commuters moving in NYC.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl space-y-16">
      {/* Bio Section */}
      <section className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter text-center">
          About Moe
        </h1>
        
        {/* Bio Text - TODO: Replace placeholder text with actual bio content */}
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300">
          <p className="text-center text-xl text-gray-200">
            {/* PLACEHOLDER: Add your bio text here */}
            [Bio content placeholder - Add your personal story, background, and what drives Moe Productions here]
          </p>
          <p>
            Moe grew up fixing whatever rolled through the neighborhood. When delivery riders started switching to electric bikes, he moved with them.
          </p>
          <p>
            <span className="text-neon-blue font-bold">Moe Productions</span> exists to keep people's work wheels spinning, from food delivery to daily commuting. We know that for many of our customers, a broken bike means lost wages.
          </p>
          <p>
            That's why we focus on speed, honesty, and safety. No upselling, just getting you back on the road.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-neon-green" />
            <p className="text-white">Specialist in electric drive systems</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-neon-green" />
            <p className="text-white">Works directly with delivery riders and fleets</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-neon-green" />
            <p className="text-white">Bilingual service (English & Spanish)</p>
          </div>
        </div>
      </section>

      {/* Video Section - TODO: Add video source */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">See Moe in Action</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-surface">
            {/* PLACEHOLDER: Add video element here */}
            {/* Example: <video src="/path-to-video.mp4" controls className="w-full h-full object-cover" /> */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <p className="text-lg mb-2">Video Placeholder</p>
                <p className="text-sm">Add your video source here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - TODO: Add actual photos */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Shop Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* PLACEHOLDER: Add photo images here */}
          {/* Example structure for each photo:
            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
              <Image 
                src="/path-to-photo.jpg" 
                alt="Shop photo description"
                fill
                className="object-cover"
              />
            </div>
          */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-dark-surface">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                <p>Photo {i} Placeholder</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 italic">
          {/* PLACEHOLDER: Add caption or note about photos */}
          [Add caption or note about the photos here]
        </p>
      </section>
    </div>
  );
}
