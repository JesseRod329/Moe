import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        bikeType: 'e-bike',
        mainIssue: '',
        preferredTimeWindow: '',
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.diagnosticAck) {
            setError('Please acknowledge the diagnostic fee.');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
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
                    <label htmlFor="preferredTimeWindow" className="block text-sm font-medium leading-6 text-white">
                        Preferred Time Window
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="preferredTimeWindow"
                            id="preferredTimeWindow"
                            placeholder="e.g. Weekday mornings"
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
