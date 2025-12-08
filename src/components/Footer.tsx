import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl font-bold text-neon-green tracking-wider uppercase">Moe Productions</span>
                        <p className="text-sm leading-6 text-gray-300">
                            Electric Bike Repair that Keeps You Moving. <br />
                            NYC based. Fast, honest, battery safe.
                        </p>
                        <div className="flex space-x-6">
                            {/* Social links could go here */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-neon-blue">
                                            Tires & Wheels
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-neon-blue">
                                            Brakes & Control
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-neon-blue">
                                            Battery Diagnostics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-neon-blue">
                                            Custom Work
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/pricing" className="text-sm leading-6 text-gray-300 hover:text-neon-blue">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/battery-safety" className="text-sm leading-6 text-gray-300 hover:text-neon-blue">
                                            Battery Safety
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="text-sm leading-6 text-gray-300 hover:text-neon-blue">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-neon-blue">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="text-sm leading-6 text-gray-300">
                                        New York City, NY
                                    </li>
                                    <li className="text-sm leading-6 text-gray-300">
                                        <a href="tel:+15555555555" className="hover:text-neon-green">Call Moe</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} Moe Productions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
