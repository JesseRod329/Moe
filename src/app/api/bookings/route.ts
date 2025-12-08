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

        if (bookingError) throw bookingError;

        // 3. Trigger notification (handled by Supabase Edge Function or Database Webhook usually)
        // For now, we assume Supabase handles the email trigger based on the insert.

        return NextResponse.json({ success: true, booking });
    } catch (error: any) {
        console.error('Booking error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
