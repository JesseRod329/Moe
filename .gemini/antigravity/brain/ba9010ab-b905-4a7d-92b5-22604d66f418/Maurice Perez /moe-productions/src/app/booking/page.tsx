"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function BookingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      bikeType: formData.get("bikeType"),
      mainIssue: formData.get("mainIssue"),
      preferredTimeWindow: formData.get("preferredTimeWindow"),
      diagnosticAck: formData.get("diagnosticAck") === "on",
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit booking");

      router.push("/booking/confirmation");
    } catch (err) {
      setError("Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Book a Repair</h1>
        <p className="text-gray-400">Reservar reparación</p>
      </div>

      <Card className="bg-dark-surface border-white/10">
        <CardHeader>
          <CardTitle>Repair Request Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white">Full Name *</Label>
              <Input id="fullName" name="fullName" required placeholder="John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email (Optional)</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bikeType" className="text-white">Bike Type *</Label>
              <select
                id="bikeType"
                name="bikeType"
                required
                className="flex h-10 w-full rounded-md border border-white/20 bg-black px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
              >
                <option value="">Select type...</option>
                <option value="e-bike">E-Bike</option>
                <option value="e-scooter">E-Scooter</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mainIssue" className="text-white">Main Issue *</Label>
              <Textarea id="mainIssue" name="mainIssue" required placeholder="Describe the problem..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTimeWindow" className="text-white">Preferred Time Window</Label>
              <Input id="preferredTimeWindow" name="preferredTimeWindow" placeholder="e.g. Weekday mornings" />
            </div>

            <div className="flex items-start space-x-3 pt-4">
              <Checkbox id="diagnosticAck" name="diagnosticAck" required />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="diagnosticAck"
                  className="text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I understand the diagnostic fee is $65 and is credited toward my repair if I proceed.
                </Label>
                <p className="text-xs text-gray-500">
                  Entiendo que la tarifa de diagnóstico es de $65.
                </p>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full font-bold text-lg h-12" disabled={loading}>
              {loading ? "Submitting..." : "Submit Booking Request"}
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting, you agree to our service terms. We will contact you to confirm the appointment time.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
