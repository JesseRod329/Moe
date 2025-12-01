'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function AdminDashboard() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchBookings();
    }, [filter]);

    const fetchBookings = async () => {
        setLoading(true);
        try {
            let query = supabase
                .from('bookings')
                .select(`
          *,
          customers (full_name, phone, email)
        `)
                .order('created_at', { ascending: false });

            if (filter !== 'all') {
                query = query.eq('status', filter);
            }

            const { data, error } = await query;
            if (error) throw error;
            setBookings(data || []);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new': return 'text-neon-blue';
            case 'confirmed': return 'text-neon-green';
            case 'completed': return 'text-gray-400';
            case 'cancelled': return 'text-red-500';
            default: return 'text-white';
        }
    };

    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="bg-white/10 border border-white/20 rounded-lg text-white px-4 py-2 focus:ring-neon-blue focus:border-neon-blue"
                        >
                            <option value="all">All Status</option>
                            <option value="new">New</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                        <button
                            onClick={fetchBookings}
                            className="bg-neon-blue text-black font-bold px-4 py-2 rounded-lg hover:bg-neon-blue/80"
                        >
                            Refresh
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center text-gray-400 py-12">Loading bookings...</div>
                ) : (
                    <div className="overflow-x-auto rounded-xl border border-white/10">
                        <table className="min-w-full divide-y divide-white/10 bg-white/5">
                            <thead className="bg-black/50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Bike</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Issue</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                            {new Date(booking.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            <div className="font-medium">{booking.customers?.full_name}</div>
                                            <div className="text-xs text-gray-500">{booking.customers?.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                            {booking.bike_type}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                                            {booking.main_issue}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold capitalize">
                                            <span className={getStatusColor(booking.status)}>{booking.status}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link href={`/admin/bookings/${booking.id}`} className="text-neon-blue hover:text-neon-green">
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {bookings.length === 0 && (
                            <div className="text-center py-12 text-gray-500">No bookings found.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
