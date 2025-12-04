"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (supabase) {
      fetchBookings();
    }
  }, []);

  async function fetchBookings() {
    if (!supabase) {
      console.warn('Supabase client not configured');
      return;
    }
    
    const { data, error } = await supabase
      .from("bookings")
      .select("*, customers(full_name, phone)")
      .order("created_at", { ascending: false });
    
    if (data) setBookings(data);
  }

  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = filter === "all" || b.status === filter;
    const matchesSearch = 
      b.customers?.full_name.toLowerCase().includes(search.toLowerCase()) ||
      b.customers?.phone.includes(search);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-2">
          {["all", "new", "confirmed", "completed", "cancelled"].map((status) => (
            <Button
              key={status}
              variant={filter === status ? "default" : "outline"}
              onClick={() => setFilter(status)}
              className="capitalize"
            >
              {status}
            </Button>
          ))}
        </div>
        <Input 
          placeholder="Search name or phone..." 
          className="max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filteredBookings.map((booking) => (
          <Card key={booking.id} className="bg-dark-surface border-white/10">
            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-white text-lg">{booking.customers?.full_name}</h3>
                  <Badge variant={booking.status === "new" ? "default" : "secondary"}>
                    {booking.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400">
                  {booking.bike_type} • {new Date(booking.created_at).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 mt-1 truncate max-w-md">
                  {booking.main_issue}
                </p>
              </div>
              <Link href={`/admin/booking?id=${booking.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
        {!supabase && (
          <div className="text-center py-12">
            <p className="text-yellow-500 mb-2">Supabase not configured</p>
            <p className="text-gray-500 text-sm">Please configure environment variables to view bookings.</p>
          </div>
        )}
        {supabase && filteredBookings.length === 0 && (
          <p className="text-center text-gray-500 py-12">No bookings found.</p>
        )}
      </div>
    </div>
  );
}
