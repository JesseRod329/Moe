import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Bike Services - Moe Productions NYC",
  description: "Full service electric bike and scooter repairs: tires, wheels, brakes, drive systems, batteries, graphics kits, and more. View our complete service list.",
};

const services = [
  {
    category: "Tires & Wheels",
    icon: "/icon-tires.png",
    items: [
      { name: "Tire Replacement", price: "$45 (1) / $90 (2)", desc: "Includes mounting" },
      { name: "Inner Tubes", price: "$25", desc: "Per tube" },
      { name: "Wheel Change", price: "$50", desc: "Per wheel" },
      { name: "Wheel Alignment", price: "$40", desc: "Per bike" },
    ],
  },
  {
    category: "Drive & Power",
    icon: "/icon-battery.png",
    items: [
      { name: "Belt Change", price: "$90", desc: "Per belt" },
      { name: "Sprocket/Disk Change", price: "$35", desc: "Each" },
      { name: "Chain Clean & Re-grease", price: "$15", desc: "Per chain" },
      { name: "Battery Terminal Change", price: "$120", desc: "From inside battery" },
      { name: "Battery Diagnose", price: "$90", desc: "Per battery" },
      { name: "Neck Bearings", price: "$90", desc: "Per service" },
    ],
  },
  {
    category: "Brakes & Control",
    icon: "/icon-brakes.png",
    items: [
      { name: "Brake Pads Service", price: "$20", desc: "Per caliper" },
      { name: "Brake Pads", price: "$10 (Light B) / $28 (Ultra B)", desc: "Per set" },
      { name: "Brake Pads Ultra B Set", price: "$50", desc: "Complete set" },
      { name: "Brake Bleeding", price: "$45", desc: "Front and back" },
      { name: "Install Brake Line", price: "$25", desc: "Per line" },
      { name: "Ultra B Rear Brake Install", price: "$120", desc: "Serpent" },
      { name: "Dual Brake System", price: "$160", desc: "Ultra B" },
      { name: "Brake Levers", price: "$40", desc: "Per set" },
      { name: "Handlebars", price: "$40", desc: "Installed" },
      { name: "Grips", price: "$20", desc: "Installed" },
    ],
  },
  {
    category: "Visual & Custom",
    icon: "/icon-custom.png",
    items: [
      { name: "Graphics Kit", price: "$120", desc: "Installed" },
      { name: "Wrap Sheet", price: "$220", desc: "Full wrap" },
      { name: "Powder Coating", price: "$1200", desc: "Dismounting/mounting (full tear down)" },
      { name: "Stem Mount", price: "$15", desc: "Installed" },
      { name: "Bar Mounts", price: "$20", desc: "Installed" },
      { name: "Under Glow Light", price: "$140", desc: "Installation" },
    ],
  },
  {
    category: "Maintenance & Other",
    icon: "/icon-safety.png",
    items: [
      { name: "Oil Change", price: "$45", desc: "Per service" },
      { name: "Wash", price: "$20", desc: "Per bike" },
      { name: "General Diagnose", price: "$65", desc: "Credited toward repair if you fix with us" },
      { name: "Throttle Install", price: "$30-40", desc: "Per install" },
      { name: "Surron Throttle Tuttio", price: "$65", desc: "Modified screen" },
      { name: "Foot Pegs", price: "$25", desc: "Per set" },
      { name: "Surron Seat Cover Change", price: "$60", desc: "Per service" },
      { name: "Talaria X3 Triple X", price: "$60", desc: "Per service" },
      { name: "Tuttio Seat Cover Cut Out", price: "$100", desc: "Per service" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          Our Services
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Full service electric bike and scooter repairs. From quick fixes to custom builds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((category) => (
          <Card key={category.category} className="bg-dark-surface border-white/10 hover:border-neon-blue/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="relative w-12 h-12">
                <img src={category.icon} alt={category.category} className="w-full h-full object-contain" />
              </div>
              <CardTitle className="text-xl text-neon-blue">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-start border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                    <Badge variant="outline" className="text-neon-green border-neon-green/20 whitespace-nowrap ml-2">
                      {item.price}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-neon-blue/5 rounded-2xl p-8 border border-neon-blue/20">
        <h3 className="text-2xl font-bold text-white mb-4">Need something else?</h3>
        <p className="text-gray-400 mb-6">
          We handle custom requests and specific issues not listed here. Bring your bike in for a diagnostic.
        </p>
        <Link href="/booking">
          <Button size="lg" className="font-bold">
            Book a Diagnostic
          </Button>
        </Link>
        <p className="text-xs text-gray-500 mt-4">
          Diagnostic fee is $65 and is credited toward your repair.
        </p>
      </div>
    </div>
  );
}
