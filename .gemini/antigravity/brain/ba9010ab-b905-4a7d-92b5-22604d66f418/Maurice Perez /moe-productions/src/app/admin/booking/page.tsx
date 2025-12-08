"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import Link from "next/link";

function BookingDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const [booking, setBooking] = useState<any>(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (id && supabase) fetchBooking();
  }, [id]);

  async function fetchBooking() {
    if (!supabase) {
      console.warn('Supabase client not configured');
      return;
    }
    
    const { data, error } = await supabase
      .from("bookings")
      .select("*, customers(*)")
      .eq("id", id)
      .single();
    
    if (data) {
      setBooking(data);
      setNotes(data.admin_notes || "");
    }
  }

  async function updateStatus(status: string) {
    if (!supabase) {
      alert("Supabase not configured. Cannot update status.");
      return;
    }
    await supabase.from("bookings").update({ status }).eq("id", id);
    fetchBooking();
  }

  async function saveNotes() {
    if (!supabase) {
      alert("Supabase not configured. Cannot save notes.");
      return;
    }
    await supabase.from("bookings").update({ admin_notes: notes }).eq("id", id);
    alert("Notes saved!");
  }

  if (!supabase) {
    return (
      <div className="text-white p-6">
        <p className="text-yellow-500 mb-2">Supabase not configured</p>
        <p className="text-gray-500 text-sm">Please configure environment variables to view booking details.</p>
      </div>
    );
  }

  if (!booking) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link href="/admin">
        <Button variant="ghost" className="text-gray-400 hover:text-white mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>
      </Link>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Booking Details</h1>
          <p className="text-gray-400">ID: {booking.id}</p>
        </div>
        <Badge className="text-lg px-4 py-1 capitalize">{booking.status}</Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-dark-surface border-white/10">
          <CardHeader>
            <CardTitle>Customer Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg text-white font-medium">{booking.customers?.full_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact</p>
              <div className="flex gap-2 mt-1">
                <Button size="sm" variant="outline" onClick={() => window.open(`tel:${booking.customers?.phone}`)}>
                  <Phone className="h-4 w-4 mr-2" /> Call
                </Button>
                {booking.customers?.email && (
                  <Button size="sm" variant="outline" onClick={() => window.open(`mailto:${booking.customers?.email}`)}>
                    <Mail className="h-4 w-4 mr-2" /> Email
                  </Button>
                )}
              </div>
              <p className="text-white mt-2">{booking.customers?.phone}</p>
              <p className="text-white">{booking.customers?.email}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-dark-surface border-white/10">
          <CardHeader>
            <CardTitle>Bike & Issue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Bike Type</p>
              <p className="text-white capitalize">{booking.bike_type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Main Issue</p>
              <p className="text-white bg-black/50 p-3 rounded-md border border-white/5">
                {booking.main_issue}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Preferred Time</p>
              <p className="text-white">{booking.preferred_time_window || "Not specified"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Diagnostic Fee</p>
              <Badge variant={booking.diagnostic_ack ? "default" : "destructive"}>
                {booking.diagnostic_ack ? "Acknowledged" : "Not Acknowledged"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-dark-surface border-white/10">
        <CardHeader>
          <CardTitle>Admin Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => updateStatus("confirmed")} className="bg-blue-600 hover:bg-blue-700">
              Mark Confirmed
            </Button>
            <Button onClick={() => updateStatus("completed")} className="bg-green-600 hover:bg-green-700">
              Mark Completed
            </Button>
            <Button onClick={() => updateStatus("cancelled")} variant="destructive">
              Mark Cancelled
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">Internal Notes</p>
            <Textarea 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
              placeholder="Add notes about parts, pricing, or status..."
              className="min-h-[100px]"
            />
            <Button onClick={saveNotes} variant="secondary">Save Notes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function BookingDetail() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading...</div>}>
      <BookingDetailContent />
    </Suspense>
  );
}
