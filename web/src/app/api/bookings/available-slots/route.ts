import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const date = searchParams.get('date');

        if (!date) {
            return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 });
        }

        // Fetch all bookings for the given date that are not cancelled
        const { data: bookings, error } = await supabase
            .from('bookings')
            .select('booking_time, status')
            .eq('booking_date', date)
            .in('status', ['new', 'confirmed']); // Only count active bookings

        if (error) throw error;

        // Extract booked time slots (normalize to HH:MM:SS format for comparison)
        const bookedSlots = bookings?.map(b => {
            if (!b.booking_time) return null;
            // Ensure format is HH:MM:SS
            const time = b.booking_time.toString();
            return time.includes(':') && time.split(':').length === 2 
                ? `${time}:00` 
                : time;
        }).filter(Boolean) || [];

        return NextResponse.json({ bookedSlots });
    } catch (error: any) {
        console.error('Available slots error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}

