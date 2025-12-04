import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battery Safety and Repair - Moe Productions Electric Bike Service",
  description: "Safe lithium battery inspections, terminal changes, and diagnostics for electric bikes and scooters. Learn how Moe Productions handles battery safety in NYC.",
};

export default function BatterySafetyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          Battery Safety
        </h1>
        <p className="text-xl text-gray-400">
          We take lithium-ion battery safety seriously. Here is how we protect you and our shop.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <Card className="bg-dark-surface border-neon-green/20">
          <CardHeader>
            <Shield className="w-10 h-10 text-neon-green mb-2" />
            <CardTitle>Why it matters</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400 space-y-4">
            <p>
              Damaged or poorly made batteries are a fire risk. In NYC, safe storage and handling is not just a good idea—it's the rule.
            </p>
            <p>
              We store and service batteries in a way that follows NYC guidance and reduces risk for everyone.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-dark-surface border-neon-blue/20">
          <CardHeader>
            <CheckCircle className="w-10 h-10 text-neon-blue mb-2" />
            <CardTitle>What we do</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400 space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Visual inspection of every pack before service.</li>
              <li>Terminal cleaning and replacement.</li>
              <li>Safe charging protocols in fire-resistant areas.</li>
              <li>Clear explanations if a pack should be retired.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-8 mb-12">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Rider Safety Tips</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Never leave a battery charging unattended or overnight.</li>
              <li>Use only the charger rated for your specific battery voltage.</li>
              <li>If your battery has been dropped or crashed, get it inspected immediately.</li>
              <li>Avoid charging in hallways or near fire escapes.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center space-y-6">
        <p className="text-gray-400">
          Not sure about your battery's health? Bring it in for a check-up.
        </p>
        <Link href="/booking">
          <Button size="lg" className="font-bold px-8 shadow-neon-green/20">
            Schedule Battery Check
          </Button>
        </Link>
        <div className="pt-8">
          <Link href="/policies" className="text-sm text-neon-blue hover:underline">
            Read our full Battery Safety Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
