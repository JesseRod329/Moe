import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    price: string;
    description?: string;
    icon?: string; // URL or path to icon
    isGreenIcon?: boolean;
}

export default function ServiceCard({ title, price, description, icon, isGreenIcon }: ServiceCardProps) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-neon-green/50 hover:shadow-[0_0_20px_rgba(0,255,127,0.15)] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
                {icon && (
                    <div className={`h-16 w-16 rounded-lg flex items-center justify-center overflow-hidden ${isGreenIcon
                        ? ""
                        : "bg-black/50 p-2 border border-white/10 group-hover:border-neon-green/50"
                        }`}>
                        {/* Placeholder for icon if image not available, or use Image component */}
                        <img
                            src={icon}
                            alt=""
                            className={`h-full w-full ${isGreenIcon ? "object-contain" : "object-contain invert"}`}
                        />
                    </div>
                )}
                <span className="text-xl font-bold text-neon-green">{price}</span>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors">
                {title}
            </h3>
            {description && (
                <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {description}
                </p>
            )}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-neon-green/30 pointer-events-none" />
        </div>
    );
}
