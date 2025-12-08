import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';

// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-4xl mx-auto px-6 pt-40">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className="flex items-center gap-2 text-sm">
                        <li>
                            <Link href="/" className="text-gray-500 hover:text-white transition-colors">
                                Home
                            </Link>
                        </li>
                        <li className="text-gray-600">/</li>
                        <li>
                            <Link href="/services" className="text-gray-500 hover:text-white transition-colors">
                                Services
                            </Link>
                        </li>
                        <li className="text-gray-600">/</li>
                        <li className="text-neon-green">{service.title}</li>
                    </ol>
                </nav>

                {/* Header */}
                <div className="flex items-start gap-6 mb-12">
                    <div className="h-20 w-20 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image src={service.icon} alt={service.title} width={80} height={80} className="object-contain" />
                    </div>
                    <div>
                        <p className="text-neon-green text-sm font-medium uppercase tracking-wider mb-2">
                            {service.category}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {service.description}
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">About This Service</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        {service.longDescription}
                    </p>
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                            >
                                <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-neon-green/10 to-neon-blue/10 border border-neon-green/20 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
                    <p className="text-gray-400 mb-6">Book your {service.title.toLowerCase()} service today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/pricing"
                            className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300"
                        >
                            View Pricing
                        </Link>
                        <Link
                            href="/booking"
                            className="px-6 py-3 rounded-full bg-neon-green text-black font-bold hover:bg-neon-green/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,127,0.3)]"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>

                {/* Back Link */}
                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to All Services
                    </Link>
                </div>
            </div>
        </div>
    );
}
