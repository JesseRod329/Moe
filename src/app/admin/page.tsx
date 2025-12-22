'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import AdminAuth from '@/components/AdminAuth';

export default function AdminDashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    // Check login status on mount
    useEffect(() => {
        const loggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
        setIsAuthLoading(false);
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            fetchBookings();
        }
    }, [filter, isLoggedIn]);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('adminLoggedIn');
        sessionStorage.removeItem('adminName');
        setIsLoggedIn(false);
    };

    const fetchBookings = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/admin/bookings?status=${filter === 'all' ? '' : filter}`);
            const data = await response.json();
            
            if (data.error) throw new Error(data.error);
            setBookings(data.bookings || []);
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

    // Show loading state
    if (isAuthLoading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin" />
            </div>
        );
    }

    // Show login page if not logged in
    if (!isLoggedIn) {
        return <AdminAuth onLogin={handleLogin} />;
    }

    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-40">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
                        <p className="text-gray-400">Welcome back, <span className="text-red-400">Moe</span></p>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                            Manage Users
                        </button>
                        <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                            Settings
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors font-bold"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Business Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                        <h3 className="text-gray-400 text-sm font-medium uppercase mb-2">Monthly Revenue</h3>
                        <p className="text-3xl font-bold text-neon-green">$0</p>
                        <span className="text-xs text-gray-500">Live revenue tracking coming soon</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                        <h3 className="text-gray-400 text-sm font-medium uppercase mb-2">Active Repairs</h3>
                        <p className="text-3xl font-bold text-white">{Array.isArray(bookings) ? bookings.filter(b => b.status === 'confirmed').length : 0}</p>
                        <span className="text-xs text-neon-blue">Confirmed for service</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                        <h3 className="text-gray-400 text-sm font-medium uppercase mb-2">Pending Bookings</h3>
                        <p className="text-3xl font-bold text-white">{Array.isArray(bookings) ? bookings.filter(b => b.status === 'new').length : 0}</p>
                        <span className="text-xs text-gray-500">Requires Approval</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                        <h3 className="text-gray-400 text-sm font-medium uppercase mb-2">Total Customers</h3>
                        <p className="text-3xl font-bold text-white">{Array.isArray(bookings) ? new Set(bookings.map(b => b.customers?.email)).size : 0}</p>
                        <span className="text-xs text-neon-green">Unique customer contacts</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">Recent Bookings</h2>
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
                                {Array.isArray(bookings) && bookings.map((booking) => (
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
                        {Array.isArray(bookings) && bookings.length === 0 && (
                            <div className="text-center py-12 text-gray-500">No bookings found.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
