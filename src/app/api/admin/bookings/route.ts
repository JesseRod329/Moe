import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request: Request) {
    try {
        // In a real app, you would verify the session here using Supabase Auth helpers
        // const { data: { session } } = await supabase.auth.getSession();
        // if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const bikeType = searchParams.get('bikeType');

        let query = supabase
            .from('bookings')
            .select(`
        *,
        customers (
          full_name,
          phone,
          email
        )
      `)
            .order('created_at', { ascending: false });

        if (status) {
            query = query.eq('status', status);
        }
        if (bikeType) {
            query = query.eq('bike_type', bikeType);
        }

        const { data: bookings, error } = await query;

        if (error) throw error;

        return NextResponse.json({ bookings });
    } catch (error: any) {
        console.error('Admin bookings error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
