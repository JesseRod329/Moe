'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { use } from 'react';

export default function BookingDetail({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = use(params);
    const [booking, setBooking] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        fetchBooking();
    }, [id]);

    const fetchBooking = async () => {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select(`
          *,
          customers (*)
        `)
                .eq('id', id)
                .single();

            if (error) throw error;
            setBooking(data);
        } catch (error) {
            console.error('Error fetching booking:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (newStatus: string) => {
        setUpdating(true);
        try {
            const { error } = await supabase
                .from('bookings')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;
            await fetchBooking(); // Refresh data
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status');
        } finally {
            setUpdating(false);
        }
    };

    if (loading) return <div className="p-12 text-center text-white">Loading...</div>;
    if (!booking) return <div className="p-12 text-center text-white">Booking not found</div>;

    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-3xl mx-auto px-6 pt-12">
                <Link href="/admin" className="text-gray-400 hover:text-white mb-8 inline-block">
                    &larr; Back to Dashboard
                </Link>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Booking Details</h1>
                            <p className="text-gray-400">ID: {booking.id}</p>
                        </div>
                        <div className="text-right">
                            <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide bg-white/10 ${booking.status === 'new' ? 'text-neon-blue' :
                                booking.status === 'confirmed' ? 'text-neon-green' :
                                    booking.status === 'cancelled' ? 'text-red-500' : 'text-gray-400'
                                }`}>
                                {booking.status}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Customer Info</h3>
                            <div className="space-y-2 text-white">
                                <p><span className="text-gray-400">Name:</span> {booking.customers?.full_name}</p>
                                <p><span className="text-gray-400">Phone:</span> {booking.customers?.phone}</p>
                                <p><span className="text-gray-400">Email:</span> {booking.customers?.email || 'N/A'}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Bike Info</h3>
                            <div className="space-y-2 text-white">
                                <p><span className="text-gray-400">Type:</span> {booking.bike_type}</p>
                                <p><span className="text-gray-400">Time:</span> {booking.preferred_time_window || 'Any'}</p>
                                <p><span className="text-gray-400">Diagnostic Ack:</span> {booking.diagnostic_ack ? 'Yes' : 'No'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Main Issue</h3>
                        <div className="bg-black/50 p-4 rounded-lg text-white border border-white/5">
                            {booking.main_issue}
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Actions</h3>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => updateStatus('confirmed')}
                                disabled={updating || booking.status === 'confirmed'}
                                className="px-6 py-2 rounded-lg bg-neon-green text-black font-bold hover:bg-neon-green/80 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Confirm Booking
                            </button>
                            <button
                                onClick={() => updateStatus('completed')}
                                disabled={updating || booking.status === 'completed'}
                                className="px-6 py-2 rounded-lg bg-white/20 text-white font-bold hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Mark Completed
                            </button>
                            <button
                                onClick={() => updateStatus('cancelled')}
                                disabled={updating || booking.status === 'cancelled'}
                                className="px-6 py-2 rounded-lg border border-red-500 text-red-500 font-bold hover:bg-red-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Cancel Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
