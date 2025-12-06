import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';

export default function Services() {
    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                    Professional repairs for electric bikes and scooters. From tire changes to battery diagnostics.
                </p>

                {/* Tires & Wheels */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-lg bg-neon-green/10 flex items-center justify-center border border-neon-green/20">
                            <Image src="/assets/icon_tire_1764625896372.png" alt="" width={32} height={32} className="invert" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Tires & Wheels</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard title="Tire Replacement" price="$45" description="One tire. $80 for two." />
                        <ServiceCard title="Inner Tubes" price="$25" description="Per tube." />
                        <ServiceCard title="Wheel Change" price="$50" description="Per wheel." />
                        <ServiceCard title="Wheel Alignment" price="$40" description="Per bike." />
                    </div>
                </div>

                {/* Drive & Power */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-lg bg-neon-green/10 flex items-center justify-center border border-neon-green/20">
                            <Image src="/assets/icon_battery_1764625909438.png" alt="" width={32} height={32} className="invert" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Drive & Power</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard title="Belt Change" price="$90" description="Per belt." />
                        <ServiceCard title="Sprocket / Disk" price="$35" description="Each." />
                        <ServiceCard title="Chain Service" price="$15" description="Clean and re-grease." />
                        <ServiceCard title="Battery Terminal (Inside)" price="$120" description="Change from inside battery." />
                        <ServiceCard title="Power Terminals" price="$45" description="Battery and bike power terminal change." />
                        <ServiceCard title="Battery Diagnose" price="$90" description="Per battery." />
                    </div>
                </div>

                {/* Brakes & Control */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-lg bg-neon-green/10 flex items-center justify-center border border-neon-green/20">
                            <Image src="/assets/icon_brake_1764625922566.png" alt="" width={32} height={32} className="invert" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Brakes & Control</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard title="Brake Pads Service" price="$20" description="Per caliper." />
                        <ServiceCard title="Brake Pads" price="$10 - $28" description="Light B ($10) / Ultra B ($28)." />
                        <ServiceCard title="Brake Bleeding" price="$45" description="Front and back." />
                        <ServiceCard title="Handlebars" price="$40" description="Installed." />
                        <ServiceCard title="Grips" price="$20" description="Installed." />
                        <ServiceCard title="Stem Mount" price="$15" description="Installed." />
                    </div>
                </div>

                {/* Visual & Custom */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-lg bg-neon-green/10 flex items-center justify-center border border-neon-green/20">
                            <Image src="/assets/icon_custom_1764625942222.png" alt="" width={32} height={32} className="invert" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Visual & Custom</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard title="Graphics Kit" price="$120" description="Installed." />
                        <ServiceCard title="Powder Coating Prep" price="$1200" description="Full tear down and re-assembly." />
                        <ServiceCard title="Ultra B Rear Brake" price="$120" description="Serpent install." />
                    </div>
                </div>

                {/* Maintenance */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-lg bg-neon-green/10 flex items-center justify-center border border-neon-green/20">
                            <Image src="/assets/icon_safety_1764625955730.png" alt="" width={32} height={32} className="invert" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Maintenance</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard title="Oil Change" price="$45" description="Per service." />
                        <ServiceCard title="Wash" price="$20" description="Per bike." />
                        <ServiceCard title="General Diagnose" price="$65" description="Goes toward repair if you fix with us." />
                    </div>
                </div>
            </div>
        </div>
    );
}
