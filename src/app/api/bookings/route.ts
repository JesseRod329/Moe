import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, phone, email, bikeType, mainIssue, preferredTimeWindow, diagnosticAck } = body;

        // Basic validation
        if (!fullName || !phone || !bikeType || !mainIssue) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Upsert customer (simplified: check by phone, if exists use id, else create)
        // Note: In a real app, you might want more robust matching.
        let customerId;
        const { data: existingCustomer, error: findError } = await supabase
            .from('customers')
            .select('id')
            .eq('phone', phone)
            .single();

        if (existingCustomer) {
            customerId = existingCustomer.id;
        } else {
            const { data: newCustomer, error: createError } = await supabase
                .from('customers')
                .insert([{ full_name: fullName, phone, email }])
                .select('id')
                .single();

            if (createError) throw createError;
            customerId = newCustomer.id;
        }

        // 2. Create booking
        const { data: booking, error: bookingError } = await supabase
            .from('bookings')
            .insert([
                {
                    customer_id: customerId,
                    bike_type: bikeType,
                    main_issue: mainIssue,
                    preferred_time_window: preferredTimeWindow,
                    diagnostic_ack: diagnosticAck,
                    status: 'new',
                },
            ])
            .select()
            .single();

        if (bookingError) {
            console.error('Database Booking Error:', bookingError);
            throw new Error(`Booking creation failed: ${bookingError.message}`);
        }

        return NextResponse.json({ success: true, booking });
    } catch (error: any) {
        console.error('Booking API Handler Error:', error);
        
        // Provide a more helpful error message for "fetch failed" which usually means invalid Supabase URL
        let errorMessage = error.message || 'Internal Server Error';
        if (errorMessage === 'fetch failed') {
            errorMessage = 'Could not connect to database. This usually means the Supabase URL is invalid or missing.';
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
