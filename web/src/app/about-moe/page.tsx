import Image from 'next/image';

export default function AboutMoe() {
    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Meet <span className="text-neon-blue">Moe</span>
                        </h1>
                        <div className="space-y-6 text-lg text-gray-300">
                            <p>
                                Moe grew up fixing whatever rolled through the neighborhood. When delivery riders started switching to electric bikes, he moved with them.
                            </p>
                            <p>
                                <strong className="text-white">Moe Productions</strong> exists to keep people’s work wheels spinning, from food delivery to daily commuting. We understand that for many of our customers, a broken bike means lost wages. That's why we prioritize speed and reliability.
                            </p>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="h-10 w-10 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green font-bold">1</div>
                                    <div>
                                        <h3 className="font-bold text-white">Specialist in Electric Drive Systems</h3>
                                        <p className="text-sm text-gray-400">Expert diagnosis for motors, controllers, and batteries.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="h-10 w-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue font-bold">2</div>
                                    <div>
                                        <h3 className="font-bold text-white">Works Directly with Delivery Riders</h3>
                                        <p className="text-sm text-gray-400">We know the urgency of commercial use.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(0,200,255,0.15)]">
                            {/* Placeholder for About Moe illustration */}
                            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-gray-600">
                                <span className="text-center px-4">Moe Portrait Illustration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
