import Link from 'next/link';
import Image from 'next/image';

export default function BatterySafety() {
    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Battery Safety <span className="text-neon-green">Matters</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            We store and service batteries in a way that follows NYC guidance and reduces risk. Your safety and our shop's safety are priority #1.
                        </p>
                        <Link
                            href="/booking"
                            className="inline-block rounded-full bg-neon-green px-8 py-4 text-lg font-bold text-black shadow-[0_0_20px_rgba(0,255,127,0.4)] hover:bg-neon-green/90 transition-all duration-300"
                        >
                            Schedule Battery Check
                        </Link>
                    </div>
                    <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-neon-green/10">
                        {/* Placeholder for battery safety image or use generated icon as overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                            <Image src="/assets/icon_safety_1764625955730.png" alt="Safety Shield" width={128} height={128} className="opacity-50" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h2 className="text-2xl font-bold text-neon-blue mb-4">What We Do</h2>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-neon-green mr-2">✓</span>
                                Battery inspection and diagnosis using professional tools.
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-green mr-2">✓</span>
                                Terminal cleaning and replacement to prevent shorts.
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-green mr-2">✓</span>
                                Clear explanations if a pack should be retired instead of repaired.
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-green mr-2">✓</span>
                                Safe storage protocols while your bike is in our shop.
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h2 className="text-2xl font-bold text-neon-blue mb-4">How You Can Stay Safe</h2>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-neon-green mr-2">•</span>
                                Do not leave charging unattended, especially overnight.
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-green mr-2">•</span>
                                Use only the charger rated for your specific battery voltage.
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-green mr-2">•</span>
                                Avoid using damaged packs or packs that have been dropped hard.
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-green mr-2">•</span>
                                If you smell something sweet or chemical, stop using it immediately.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
