'use client';

import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-3xl mx-auto px-6 pt-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                    Book a Repair
                </h1>
                <p className="text-xl text-gray-400 mb-12 text-center max-w-xl mx-auto">
                    Lock in your slot. We'll get you back on the road fast.
                </p>

                <BookingForm />
            </div>
        </div>
    );
}
