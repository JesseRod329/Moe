import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Bike Repair Prices - Moe Productions",
  description: "Transparent pricing for electric bike repairs. Tires from 45, diagnostics 65 credited toward repair, battery work, brakes, graphics kits, and powder coating.",
};

// Reusing the data structure but flattened for table view
const pricingData = [
  { service: "Tire Replacement", desc: "Includes mounting (1 tire / 2 tires)", price: "$45 / $90" },
  { service: "Inner Tubes", desc: "Per tube", price: "$25" },
  { service: "Oil Change", desc: "Per service", price: "$45" },
  { service: "General Diagnose", desc: "Credited toward repair if you fix with us", price: "$65" },
  { service: "Battery Terminal Change", desc: "From inside battery", price: "$120" },
  { service: "Belt Change", desc: "Per belt", price: "$90" },
  { service: "Sprocket/Disk Change", desc: "Each", price: "$35" },
  { service: "Brake Pads Service", desc: "Per caliper", price: "$20" },
  { service: "Brake Pads", desc: "Light B / Ultra B (per set)", price: "$10 / $28" },
  { service: "Brake Pads Ultra B Set", desc: "Complete set", price: "$50" },
  { service: "Chain Clean & Re-grease", desc: "Per chain", price: "$15" },
  { service: "Wash", desc: "Per bike", price: "$20" },
  { service: "Wheel Change", desc: "Per wheel", price: "$50" },
  { service: "Neck Bearings", desc: "Per service", price: "$90" },
  { service: "Handlebars", desc: "Installed", price: "$40" },
  { service: "Brake Bleeding", desc: "Front and back", price: "$45" },
  { service: "Install Brake Line", desc: "Per line", price: "$25" },
  { service: "Wheel Alignment", desc: "Per bike", price: "$40" },
  { service: "Grips", desc: "Installed", price: "$20" },
  { service: "Graphics Kit", desc: "Installed", price: "$120" },
  { service: "Wrap Sheet", desc: "Full wrap", price: "$220" },
  { service: "Stem Mount", desc: "Installed", price: "$15" },
  { service: "Bar Mounts", desc: "Installed", price: "$20" },
  { service: "Powder Coating", desc: "Dismounting/mounting (full tear down)", price: "$1200" },
  { service: "Ultra B Rear Brake Install", desc: "Serpent", price: "$120" },
  { service: "Dual Brake System", desc: "Ultra B", price: "$160" },
  { service: "Battery Diagnose", desc: "Per battery", price: "$90" },
  { service: "Throttle Install", desc: "Per install", price: "$30-40" },
  { service: "Brake Levers", desc: "Per set", price: "$40" },
  { service: "Surron Throttle Tuttio", desc: "Modified screen", price: "$65" },
  { service: "Foot Pegs", desc: "Per set", price: "$25" },
  { service: "Surron Seat Cover Change", desc: "Per service", price: "$60" },
  { service: "Talaria X3 Triple X", desc: "Per service", price: "$60" },
  { service: "Tuttio Seat Cover Cut Out", desc: "Per service", price: "$100" },
  { service: "Under Glow Light", desc: "Installation", price: "$140" },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          Transparent Pricing
        </h1>
        <p className="text-xl text-gray-400">
          Know what you pay before we start. No hidden fees.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-dark-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-gray-300 uppercase tracking-wider font-medium border-b border-white/10">
              <tr>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4 text-right">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {pricingData.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{item.service}</td>
                  <td className="px-6 py-4 text-gray-400">{item.desc}</td>
                  <td className="px-6 py-4 text-right font-bold text-neon-green">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 space-y-4 text-sm text-gray-500 bg-black/50 p-6 rounded-lg border border-white/5">
        <p>
          <span className="text-neon-blue font-bold">Note:</span> The $65 diagnostic fee is credited toward your repair cost if you choose to proceed with the service.
        </p>
        <p>
          Prices listed are for labor and standard parts where noted. Complex issues or additional parts may be quoted on-site after diagnosis.
        </p>
        <p>
          Precios listados son por mano de obra. Partes adicionales pueden ser cotizadas en el sitio.
        </p>
      </div>

      <div className="mt-12 text-center">
        <Link href="/booking">
          <Button size="lg" className="font-bold px-8">
            Book an Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
}
