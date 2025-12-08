import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
    title: string;
    price: string;
    description?: string;
    icon?: string | ReactNode;
}

export default function ServiceCard({ title, price, description, icon }: ServiceCardProps) {
    const renderIcon = () => {
        if (!icon) return null;
        if (typeof icon === 'string') {
            return <img src={icon} alt="" className="h-full w-full object-contain invert" />;
        }
        return icon;
    };

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-neon-green/40 hover:shadow-[0_30px_80px_rgba(0,255,127,0.15)]">
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    {icon && (
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 p-2 ring-1 ring-white/10 group-hover:ring-neon-green/40">
                            {renderIcon()}
                        </div>
                    )}
                    <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue">{title}</h3>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm font-semibold text-neon-green ring-1 ring-white/10">
                    {price}
                </span>
            </div>
            {description && (
                <p className="mt-3 text-sm text-gray-300 group-hover:text-gray-200">{description}</p>
            )}
            <div className="mt-4 flex items-center gap-2 text-sm text-neon-blue opacity-0 transition group-hover:opacity-100">
                <span>See details</span>
                <ArrowRight className="h-4 w-4" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 transition duration-300 group-hover:opacity-100" />
        </div>
    );
}
