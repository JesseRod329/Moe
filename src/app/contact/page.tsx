import Link from 'next/link';

export default function Contact() {
    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                    Get in <span className="text-neon-blue">Touch</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Info Section */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6">Shop Info</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    <strong className="text-neon-green block mb-1">Address</strong>
                                    123 Electric Ave, Brooklyn, NY 11201<br />
                                    (Entrance on side street)
                                </p>
                                <p>
                                    <strong className="text-neon-green block mb-1">Phone</strong>
                                    <a href="tel:+15555555555" className="hover:text-white transition-colors">(555) 555-5555</a>
                                </p>
                                <p>
                                    <strong className="text-neon-green block mb-1">Hours</strong>
                                    Mon - Fri: 10am - 7pm<br />
                                    Sat: 11am - 5pm<br />
                                    Sun: Closed
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a
                                href="tel:+15555555555"
                                className="flex items-center justify-center rounded-xl bg-neon-green px-6 py-4 text-black font-bold shadow-lg hover:bg-neon-green/90 transition-all"
                            >
                                Call Moe
                            </a>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center rounded-xl border border-neon-blue px-6 py-4 text-neon-blue font-bold hover:bg-neon-blue/10 transition-all"
                            >
                                Open in Maps
                            </a>
                            <Link
                                href="/booking"
                                className="sm:col-span-2 flex items-center justify-center rounded-xl bg-white/10 px-6 py-4 text-white font-bold hover:bg-white/20 transition-all"
                            >
                                Book Online
                            </Link>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="h-96 lg:h-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative">
                        {/* Placeholder for Map Embed */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                            <div className="text-center">
                                <p className="mb-2">Google Maps Embed</p>
                                <p className="text-xs">Add your API key or iframe here</p>
                            </div>
                        </div>
                        {/* Example iframe structure (commented out until user provides real address/key) */}
                        {/* <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
