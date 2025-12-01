import PriceTable from '@/components/PriceTable';

export default function Pricing() {
    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-4xl mx-auto px-6 pt-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Price List</h1>
                <p className="text-xl text-gray-400 mb-12">
                    Transparent pricing. No surprises. <br />
                    <span className="text-sm text-gray-500">* Prices before tax. Parts not listed may be quoted on site.</span>
                </p>

                <PriceTable
                    category="Tires & Wheels"
                    items={[
                        { name: 'Tire Replacement', price: '$45 (1) / $80 (2)', description: 'Labor only' },
                        { name: 'Inner Tubes', price: '$25', description: 'Per tube' },
                        { name: 'Wheel Change', price: '$50', description: 'Per wheel' },
                        { name: 'Wheel Alignment', price: '$40', description: 'Per bike' },
                    ]}
                />

                <PriceTable
                    category="Drive & Power"
                    items={[
                        { name: 'Belt Change', price: '$90', description: 'Per belt' },
                        { name: 'Sprocket / Disk Change', price: '$35', description: 'Each' },
                        { name: 'Chain Clean & Re-grease', price: '$15', description: 'Per chain' },
                        { name: 'Battery Terminal (Inside)', price: '$120', description: 'From inside battery' },
                        { name: 'Power Terminals', price: '$45', description: 'Battery & bike set' },
                        { name: 'Battery Diagnose', price: '$90', description: 'Per battery' },
                    ]}
                />

                <PriceTable
                    category="Brakes & Control"
                    items={[
                        { name: 'Brake Pads Service', price: '$20', description: 'Per caliper' },
                        { name: 'Brake Pads (Light B)', price: '$10', description: 'Per set' },
                        { name: 'Brake Pads (Ultra B)', price: '$28', description: 'Per set' },
                        { name: 'Brake Bleeding', price: '$45', description: 'Front and back' },
                        { name: 'Handlebars', price: '$40', description: 'Installed' },
                        { name: 'Grips', price: '$20', description: 'Installed' },
                        { name: 'Stem Mount', price: '$15', description: 'Installed' },
                        { name: 'Bar Mounts', price: '$20', description: 'Installed' },
                    ]}
                />

                <PriceTable
                    category="Visual & Custom"
                    items={[
                        { name: 'Graphics Kit', price: '$120', description: 'Installed' },
                        { name: 'Powder Coating Prep', price: '$1200', description: 'Dismounting/mounting' },
                        { name: 'Ultra B Rear Brake', price: '$120', description: 'Serpent install' },
                    ]}
                />

                <PriceTable
                    category="Maintenance"
                    items={[
                        { name: 'Oil Change', price: '$45', description: 'Per service' },
                        { name: 'Wash', price: '$20', description: 'Per bike' },
                        { name: 'General Diagnose', price: '$65', description: 'Applied to repair' },
                        { name: 'Neck Bearings', price: '$90', description: 'Service' },
                    ]}
                />
            </div>
        </div>
    );
}
