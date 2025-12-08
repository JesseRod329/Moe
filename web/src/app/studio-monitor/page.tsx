'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type Booking = {
  id: string
  booking_date: string | null
  booking_time: string | null
  bike_type: string | null
  main_issue: string | null
  status: string | null
  diagnostic_ack: boolean | null
  created_at: string | null
  customers: {
    full_name: string | null
    phone: string | null
    email: string | null
  } | null
}

export default function StudioMonitorPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBookings = async () => {
      setLoading(true)
      setError(null)
      const { data, error } = await supabase
        .from('bookings')
        .select(
          `
            id,
            booking_date,
            booking_time,
            bike_type,
            main_issue,
            status,
            diagnostic_ack,
            created_at,
            customer_id,
            customers!bookings_customer_id_fkey (
              full_name,
              phone,
              email
            )
          `
        )
        .order('booking_date', { ascending: true })
        .order('booking_time', { ascending: true })

      if (error) {
        setError(error.message)
      } else {
        // Transform the data to match our type
        const transformed = (data ?? []).map((booking: any) => ({
          ...booking,
          customers: Array.isArray(booking.customers) 
            ? booking.customers[0] || null 
            : booking.customers || null
        }))
        setBookings(transformed)
      }
      setLoading(false)
    }

    loadBookings()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Studio Monitor
          </p>
          <h1 className="text-3xl font-semibold text-neon-green mt-2">
            Internal Booking Board
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            This page is intentionally unlinked. Bookmark the URL instead of
            sharing it broadly.
          </p>
        </header>

        {loading && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            Loading latest bookings...
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-6 text-sm text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && bookings.length === 0 && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-gray-400">
            No bookings yet. Check back later.
          </div>
        )}

        {!loading && !error && bookings.length > 0 && (
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
            <table className="min-w-full divide-y divide-white/5 text-sm">
              <thead className="text-left text-gray-400 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Details</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="align-top">
                    <td className="px-4 py-4">
                      {booking.booking_date
                        ? new Date(booking.booking_date).toLocaleDateString()
                        : '—'}
                    </td>
                    <td className="px-4 py-4">
                      {booking.booking_time
                        ? booking.booking_time.slice(0, 5)
                        : '—'}
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-medium">
                        {booking.customers?.full_name ?? 'Unknown'}
                      </div>
                      <div className="text-xs text-gray-400">
                        {booking.bike_type}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-xs text-gray-300 space-y-1">
                      <div>{booking.customers?.phone}</div>
                      <div>{booking.customers?.email}</div>
                    </td>
                    <td className="px-4 py-4 text-xs text-gray-200">
                      <p>{booking.main_issue}</p>
                      {booking.diagnostic_ack && (
                        <span className="mt-2 inline-flex rounded-full bg-neon-green/20 px-2 py-1 text-[10px] font-semibold text-neon-green">
                          Diagnostic acknowledged
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide">
                        {booking.status}
                      </span>
                      <p className="mt-1 text-[11px] text-gray-500">
                        {booking.created_at
                          ? new Date(booking.created_at).toLocaleString()
                          : '—'}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}

