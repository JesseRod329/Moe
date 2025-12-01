import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Generate time slots from 9 AM to 5 PM in 1-hour intervals
const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
        const time24 = `${hour.toString().padStart(2, '0')}:00:00`; // PostgreSQL expects HH:MM:SS format
        const time12 = hour === 12 ? '12:00 PM' : hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`;
        slots.push({ value: time24, label: time12 });
    }
    return slots;
};

const TIME_SLOTS = generateTimeSlots();

export default function BookingForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [bookedSlots, setBookedSlots] = useState<string[]>([]);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        bikeType: 'e-bike',
        mainIssue: '',
        preferredTimeWindow: '',
        bookingDate: '',
        bookingTime: '',
        diagnosticAck: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
    };

    // Fetch booked slots when date changes
    useEffect(() => {
        if (formData.bookingDate) {
            fetchBookedSlots(formData.bookingDate);
        } else {
            setBookedSlots([]);
        }
    }, [formData.bookingDate]);

    const fetchBookedSlots = async (date: string) => {
        setLoadingSlots(true);
        try {
            const res = await fetch(`/api/bookings/available-slots?date=${date}`);
            const data = await res.json();
            if (res.ok) {
                setBookedSlots(data.bookedSlots || []);
            }
        } catch (err) {
            console.error('Error fetching booked slots:', err);
        } finally {
            setLoadingSlots(false);
        }
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setFormData((prev) => ({ ...prev, bookingDate: date, bookingTime: '' })); // Reset time when date changes
    };

    const handleTimeSlotClick = (time: string) => {
        if (bookedSlots.includes(time)) {
            return; // Don't allow selection of booked slots
        }
        setFormData((prev) => ({ ...prev, bookingTime: time }));
    };

    const isSlotBooked = (time: string) => bookedSlots.includes(time);
    const isSlotSelected = (time: string) => formData.bookingTime === time;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.diagnosticAck) {
            setError('Please acknowledge the diagnostic fee.');
            setLoading(false);
            return;
        }

        if (!formData.bookingDate || !formData.bookingTime) {
            setError('Please select both a date and time slot for your booking.');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    bookingDate: formData.bookingDate,
                    bookingTime: formData.bookingTime,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            // Redirect to success page or show success message
            // For now, simple alert and reset or redirect
            alert('Booking submitted successfully! We will contact you soon.');
            router.push('/');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
            {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg text-sm">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-white">
                        Full Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-neon-green sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                        Phone Number
                    </label>
                    <div className="mt-2">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-neon-green sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                        Email (Optional)
                    </label>
                    <div className="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-neon-green sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="bikeType" className="block text-sm font-medium leading-6 text-white">
                        Bike Type
                    </label>
                    <div className="mt-2">
                        <select
                            id="bikeType"
                            name="bikeType"
                            value={formData.bikeType}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-neon-green sm:text-sm sm:leading-6 [&>option]:bg-black"
                        >
                            <option value="e-bike">E-Bike</option>
                            <option value="e-scooter">E-Scooter</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="mainIssue" className="block text-sm font-medium leading-6 text-white">
                        Main Issue
                    </label>
                    <div className="mt-2">
                        <textarea
                            name="mainIssue"
                            id="mainIssue"
                            rows={4}
                            required
                            value={formData.mainIssue}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-neon-green sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium leading-6 text-white mb-2">
                        Select Date & Time
                    </label>
                    
                    {/* Date Picker */}
                    <div className="mb-4">
                        <label htmlFor="bookingDate" className="block text-xs text-gray-400 mb-1">
                            Date
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                name="bookingDate"
                                id="bookingDate"
                                required
                                value={formData.bookingDate}
                                onChange={handleDateChange}
                                min={new Date().toISOString().split('T')[0]} // Prevent past dates
                                className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-neon-green sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    {/* Time Slot Picker */}
                    {formData.bookingDate && (
                        <div>
                            <label className="block text-xs text-gray-400 mb-2">
                                Available Time Slots {loadingSlots && '(Loading...)'}
                            </label>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                {TIME_SLOTS.map((slot) => {
                                    const booked = isSlotBooked(slot.value);
                                    const selected = isSlotSelected(slot.value);
                                    return (
                                        <button
                                            key={slot.value}
                                            type="button"
                                            onClick={() => handleTimeSlotClick(slot.value)}
                                            disabled={booked}
                                            className={`
                                                py-2 px-3 rounded-md text-sm font-medium transition-all duration-200
                                                ${booked
                                                    ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed opacity-50'
                                                    : selected
                                                    ? 'bg-neon-green text-black shadow-lg ring-2 ring-neon-green'
                                                    : 'bg-white/5 text-white hover:bg-white/10 ring-1 ring-white/10 hover:ring-neon-green/50'
                                                }
                                            `}
                                        >
                                            {slot.label}
                                            {booked && (
                                                <span className="block text-xs text-gray-500 mt-0.5">Booked</span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                            {formData.bookingTime && (
                                <p className="mt-2 text-xs text-neon-green">
                                    Selected: {TIME_SLOTS.find(s => s.value === formData.bookingTime)?.label}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Fallback text input for preferred time window (optional) */}
                    <div className="mt-4">
                        <label htmlFor="preferredTimeWindow" className="block text-xs text-gray-400 mb-1">
                            Additional Notes (Optional)
                        </label>
                        <input
                            type="text"
                            name="preferredTimeWindow"
                            id="preferredTimeWindow"
                            placeholder="e.g. Any additional preferences"
                            value={formData.preferredTimeWindow}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-neon-green sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="relative flex gap-x-3 sm:col-span-2">
                    <div className="flex h-6 items-center">
                        <input
                            id="diagnosticAck"
                            name="diagnosticAck"
                            type="checkbox"
                            checked={formData.diagnosticAck}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 rounded border-white/10 bg-white/5 text-neon-green focus:ring-neon-green focus:ring-offset-black"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="diagnosticAck" className="font-medium text-white">
                            I understand the diagnostic fee is $65 and goes toward the repair.
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    disabled={loading}
                    className="block w-full rounded-md bg-neon-green px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-neon-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-green disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                    {loading ? 'Submitting...' : 'Book Repair'}
                </button>
            </div>
        </form>
    );
}
