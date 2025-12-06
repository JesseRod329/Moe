import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    if (!supabase) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
    }

    const body = await request.json();
    const { fullName, phone, email, bikeType, mainIssue, preferredTimeWindow, diagnosticAck } = body;

    // Basic validation
    if (!fullName || !phone || !bikeType || !mainIssue || !diagnosticAck) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Upsert Customer
    // In a real app, we might want to check if phone exists first to avoid duplicates or handle auth
    // For now, we'll just insert a new customer or find existing by phone if we had unique constraints
    // Simpler approach: Just insert customer for every booking for now (MVP)
    const { data: customer, error: customerError } = await supabase
      .from("customers")
      .insert({ full_name: fullName, phone, email })
      .select()
      .single();

    if (customerError) {
      console.error("Customer Error:", customerError);
      return NextResponse.json({ error: "Failed to create customer" }, { status: 500 });
    }

    // 2. Create Booking
    const { error: bookingError } = await supabase
      .from("bookings")
      .insert({
        customer_id: customer.id,
        bike_type: bikeType,
        main_issue: mainIssue,
        preferred_time_window: preferredTimeWindow,
        diagnostic_ack: diagnosticAck,
        status: "new",
      });

    if (bookingError) {
      console.error("Booking Error:", bookingError);
      return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
    }

    // 3. Trigger Email Notification (Mocked for now or handled by Supabase Database Webhooks)
    // In a real production app, we would call Resend/Postmark here.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
