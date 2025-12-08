'use client';

import Image from 'next/image';
import Link from 'next/link';

// Helper function to create slug from title
function createSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// Simple service item component with animation - now clickable
function ServiceItem({ title, description, delay }: { title: string; description: string; delay: number }) {
    const slug = createSlug(title);

    return (
        <Link href={`/services/${slug}`}>
            <div
                className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-neon-green/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,127,0.1)] cursor-pointer h-full"
                style={{ animationDelay: `${delay}ms` }}
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white group-hover:text-neon-green transition-colors duration-300">
                        {title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
                {description && (
                    <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {description}
                    </p>
                )}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-neon-green to-neon-blue group-hover:w-full transition-all duration-500" />
            </div>
        </Link>
    );
}

export default function Services() {
    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-40">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Professional repairs for electric bikes and scooters. From tire changes to battery diagnostics. Click any service to learn more.
                    </p>
                    <Link
                        href="/pricing"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green font-semibold hover:bg-neon-green/20 transition-all duration-300"
                    >
                        View Full Pricing
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Tires & Wheels */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-16 w-16 rounded-2xl flex items-center justify-center overflow-hidden">
                            <Image src="/tire_icon.png" alt="Tire Sizes" width={64} height={64} className="object-contain" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">Tires & Wheels</h2>
                            <p className="text-gray-400">Keep your wheels rolling smooth</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <ServiceItem title="Tire Replacement" description="Single or pair replacement" delay={0} />
                        <ServiceItem title="Inner Tubes" description="Quick tube swap" delay={50} />
                        <ServiceItem title="Wheel Change" description="Full wheel replacement" delay={100} />
                        <ServiceItem title="Wheel Alignment" description="Precision spoke adjustment" delay={150} />
                    </div>
                </div>

                {/* Drive & Power */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-16 w-16 rounded-2xl flex items-center justify-center overflow-hidden">
                            <Image src="/battery_icon.png" alt="Drive & Power" width={64} height={64} className="object-contain" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">Drive & Power</h2>
                            <p className="text-gray-400">Motor, battery & drivetrain experts</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ServiceItem title="Belt Change" description="Drive belt replacement" delay={0} />
                        <ServiceItem title="Sprocket / Disk" description="Drivetrain component swap" delay={50} />
                        <ServiceItem title="Chain Service" description="Clean, lube & adjust" delay={100} />
                        <ServiceItem title="Battery Terminal (Inside)" description="Internal terminal repair" delay={150} />
                        <ServiceItem title="Power Terminals" description="External connection fix" delay={200} />
                        <ServiceItem title="Battery Diagnose" description="Full diagnostic check" delay={250} />
                    </div>
                </div>

                {/* Brakes & Control */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-16 w-16 rounded-2xl flex items-center justify-center overflow-hidden">
                            <Image src="/brake_icon.png" alt="Brakes" width={64} height={64} className="object-contain" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">Brakes & Control</h2>
                            <p className="text-gray-400">Safety-first stopping power</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ServiceItem title="Brake Pads Service" description="Adjustment & installation" delay={0} />
                        <ServiceItem title="Brake Pads" description="Light & Ultra options" delay={50} />
                        <ServiceItem title="Brake Bleeding" description="Hydraulic fluid refresh" delay={100} />
                        <ServiceItem title="Handlebars" description="New bars installed" delay={150} />
                        <ServiceItem title="Grips" description="Comfort grip replacement" delay={200} />
                        <ServiceItem title="Stem Mount" description="Secure mounting" delay={250} />
                    </div>
                </div>

                {/* Visual & Custom */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-16 w-16 rounded-2xl flex items-center justify-center overflow-hidden">
                            <Image src="/custom_icon.png" alt="Visual & Custom" width={64} height={64} className="object-contain" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">Visual & Custom</h2>
                            <p className="text-gray-400">Make your ride stand out</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ServiceItem title="Graphics Kit" description="Custom decal installation" delay={0} />
                        <ServiceItem title="Powder Coating Prep" description="Full prep for paint" delay={50} />
                        <ServiceItem title="Ultra B Rear Brake" description="Premium brake upgrade" delay={100} />
                    </div>
                </div>

                {/* Maintenance */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-16 w-16 rounded-2xl flex items-center justify-center overflow-hidden">
                            <Image src="/maintenance_icon.png" alt="Maintenance" width={64} height={64} className="object-contain" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">Maintenance</h2>
                            <p className="text-gray-400">Keep your bike in peak condition</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ServiceItem title="Oil Change" description="Fresh lubricant service" delay={0} />
                        <ServiceItem title="Wash" description="Professional bike cleaning" delay={50} />
                        <ServiceItem title="General Diagnose" description="Complete inspection" delay={100} />
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center py-16 border-t border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to get your bike fixed?</h3>
                    <p className="text-gray-400 mb-8">Check our pricing page for exact costs or book your repair today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/pricing"
                            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300"
                        >
                            View Pricing
                        </Link>
                        <Link
                            href="/booking"
                            className="px-8 py-4 rounded-full bg-neon-green text-black font-bold hover:bg-neon-green/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,127,0.3)]"
                        >
                            Book a Repair
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
