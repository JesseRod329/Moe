// Service data for all services
export interface ServiceData {
    slug: string;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    features: string[];
    icon: string;
}

export const services: ServiceData[] = [
    // Tires & Wheels
    {
        slug: 'tire-replacement',
        title: 'Tire Replacement',
        category: 'Tires & Wheels',
        description: 'Single or pair replacement',
        longDescription: 'Professional tire replacement service for all electric bike models. We carry a wide selection of tires including puncture-resistant options, high-performance treads, and everyday commuter tires.',
        features: ['All tire sizes available', 'Puncture-resistant options', 'Same-day service', 'Proper disposal of old tires'],
        icon: '/tire_icon.png'
    },
    {
        slug: 'inner-tubes',
        title: 'Inner Tubes',
        category: 'Tires & Wheels',
        description: 'Quick tube swap',
        longDescription: 'Fast inner tube replacement to get you back on the road. We stock tubes for all common sizes and can install heavy-duty tubes for extra puncture protection.',
        features: ['Standard and heavy-duty tubes', 'All valve types', 'Quick turnaround', 'Tube patch repair available'],
        icon: '/tire_icon.png'
    },
    {
        slug: 'wheel-change',
        title: 'Wheel Change',
        category: 'Tires & Wheels',
        description: 'Full wheel replacement',
        longDescription: 'Complete wheel replacement service including hub motor wheels. We ensure proper alignment and spoke tension for a smooth, reliable ride.',
        features: ['Hub motor compatible', 'Spoke tensioning included', 'Wheel truing service', 'Bearing inspection'],
        icon: '/tire_icon.png'
    },
    {
        slug: 'wheel-alignment',
        title: 'Wheel Alignment',
        category: 'Tires & Wheels',
        description: 'Precision spoke adjustment',
        longDescription: 'Professional wheel truing and alignment to eliminate wobbles and ensure optimal performance. Proper alignment extends tire life and improves handling.',
        features: ['Precision truing stand', 'Spoke tension check', 'Rim inspection', 'Test ride verification'],
        icon: '/tire_icon.png'
    },
    // Drive & Power
    {
        slug: 'belt-change',
        title: 'Belt Change',
        category: 'Drive & Power',
        description: 'Drive belt replacement',
        longDescription: 'Drive belt replacement for belt-driven e-bikes. We use OEM and high-quality aftermarket belts to ensure smooth, quiet operation and long service life.',
        features: ['OEM and aftermarket options', 'Tension adjustment included', 'Pulley inspection', 'Quiet operation guaranteed'],
        icon: '/battery_icon.png'
    },
    {
        slug: 'sprocket-disk',
        title: 'Sprocket / Disk',
        category: 'Drive & Power',
        description: 'Drivetrain component swap',
        longDescription: 'Replacement of worn sprockets and disks to restore efficient power transfer. Worn sprockets can cause chain skip and reduce your bikes performance.',
        features: ['Multiple sizes available', 'Chain compatibility check', 'Hardware included', 'Proper torque specs'],
        icon: '/battery_icon.png'
    },
    {
        slug: 'chain-service',
        title: 'Chain Service',
        category: 'Drive & Power',
        description: 'Clean, lube & adjust',
        longDescription: 'Complete chain maintenance including deep cleaning, lubrication, and proper tension adjustment. Regular chain service extends the life of your entire drivetrain.',
        features: ['Deep degreasing clean', 'Premium chain lube', 'Tension adjustment', 'Wear measurement'],
        icon: '/battery_icon.png'
    },
    {
        slug: 'battery-terminal-inside',
        title: 'Battery Terminal (Inside)',
        category: 'Drive & Power',
        description: 'Internal terminal repair',
        longDescription: 'Specialized repair of internal battery terminals. This delicate work requires expertise to safely access and repair connections inside your battery pack.',
        features: ['Safe battery handling', 'Terminal replacement', 'Connection testing', 'Voltage verification'],
        icon: '/battery_icon.png'
    },
    {
        slug: 'power-terminals',
        title: 'Power Terminals',
        category: 'Drive & Power',
        description: 'External connection fix',
        longDescription: 'Repair and replacement of external power terminals on both battery and bike. Corroded or damaged terminals can cause intermittent power issues.',
        features: ['Corrosion removal', 'Terminal replacement', 'Weatherproofing', 'Connection testing'],
        icon: '/battery_icon.png'
    },
    {
        slug: 'battery-diagnose',
        title: 'Battery Diagnose',
        category: 'Drive & Power',
        description: 'Full diagnostic check',
        longDescription: 'Comprehensive battery health check including cell balance, capacity testing, and BMS evaluation. Know exactly how much life is left in your battery.',
        features: ['Cell-by-cell analysis', 'Capacity testing', 'BMS health check', 'Written report'],
        icon: '/battery_icon.png'
    },
    // Brakes & Control
    {
        slug: 'brake-pads-service',
        title: 'Brake Pads Service',
        category: 'Brakes & Control',
        description: 'Adjustment & installation',
        longDescription: 'Professional brake pad installation and adjustment. Properly adjusted brakes are essential for safe stopping, especially on heavy e-bikes.',
        features: ['Pad alignment', 'Caliper adjustment', 'Rotor inspection', 'Test ride verification'],
        icon: '/brake_icon.png'
    },
    {
        slug: 'brake-pads',
        title: 'Brake Pads',
        category: 'Brakes & Control',
        description: 'Light & Ultra options',
        longDescription: 'High-quality brake pad replacement with options for everyday riding or high-performance braking. We stock pads compatible with all major brake systems.',
        features: ['Light and Ultra options', 'All brands supported', 'Break-in service', 'Old pad disposal'],
        icon: '/brake_icon.png'
    },
    {
        slug: 'brake-bleeding',
        title: 'Brake Bleeding',
        category: 'Brakes & Control',
        description: 'Hydraulic fluid refresh',
        longDescription: 'Complete hydraulic brake system bleeding to restore firm lever feel and optimal stopping power. Spongy brakes are usually fixed with a proper bleed.',
        features: ['Full system flush', 'DOT or mineral oil', 'Air removal', 'Lever adjustment'],
        icon: '/brake_icon.png'
    },
    {
        slug: 'handlebars',
        title: 'Handlebars',
        category: 'Brakes & Control',
        description: 'New bars installed',
        longDescription: 'Handlebar replacement and installation including cable/wire routing and control positioning. Upgrade to wider bars or replace damaged ones.',
        features: ['Multiple styles available', 'Control repositioning', 'Cable management', 'Comfort setup'],
        icon: '/brake_icon.png'
    },
    {
        slug: 'grips',
        title: 'Grips',
        category: 'Brakes & Control',
        description: 'Comfort grip replacement',
        longDescription: 'New grip installation to improve comfort and control. We offer ergonomic, lock-on, and standard grips to match your riding style.',
        features: ['Ergonomic options', 'Lock-on styles', 'Various materials', 'Clean installation'],
        icon: '/brake_icon.png'
    },
    {
        slug: 'stem-mount',
        title: 'Stem Mount',
        category: 'Brakes & Control',
        description: 'Secure mounting',
        longDescription: 'Stem replacement or adjustment for proper fit and handling. Correct stem position is crucial for comfortable, controlled riding.',
        features: ['Height adjustment', 'Angle options', 'Torque specs followed', 'Headset check'],
        icon: '/brake_icon.png'
    },
    // Visual & Custom
    {
        slug: 'graphics-kit',
        title: 'Graphics Kit',
        category: 'Visual & Custom',
        description: 'Custom decal installation',
        longDescription: 'Professional installation of graphics kits and decals. Transform the look of your e-bike with custom graphics applied bubble-free.',
        features: ['Bubble-free application', 'Surface prep included', 'Custom designs available', 'Protective overlaminate'],
        icon: '/custom_icon.png'
    },
    {
        slug: 'powder-coating-prep',
        title: 'Powder Coating Prep',
        category: 'Visual & Custom',
        description: 'Full prep for paint',
        longDescription: 'Complete disassembly and preparation of your e-bike frame for powder coating. We handle everything so you can get that perfect finish.',
        features: ['Full tear-down', 'Component labeling', 'Masking of threads', 'Reassembly after'],
        icon: '/custom_icon.png'
    },
    {
        slug: 'ultra-b-rear-brake',
        title: 'Ultra B Rear Brake',
        category: 'Visual & Custom',
        description: 'Premium brake upgrade',
        longDescription: 'Installation of Ultra B premium rear brake system. A popular upgrade for riders who want maximum stopping power and reliability.',
        features: ['Premium components', 'Full installation', 'System bleed included', 'Break-in service'],
        icon: '/custom_icon.png'
    },
    // Maintenance
    {
        slug: 'oil-change',
        title: 'Oil Change',
        category: 'Maintenance',
        description: 'Fresh lubricant service',
        longDescription: 'Oil change service for internal hub motors and gearboxes. Fresh oil keeps your motor running smooth and extends its lifespan.',
        features: ['High-quality oil', 'Seal inspection', 'Contamination check', 'Proper fill level'],
        icon: '/maintenance_icon.png'
    },
    {
        slug: 'wash',
        title: 'Wash',
        category: 'Maintenance',
        description: 'Professional bike cleaning',
        longDescription: 'Thorough cleaning of your entire e-bike using bike-safe methods that protect electrical components. Look good and prevent corrosion.',
        features: ['Electrical-safe methods', 'Degreasing', 'Chain lube after', 'Inspection included'],
        icon: '/maintenance_icon.png'
    },
    {
        slug: 'general-diagnose',
        title: 'General Diagnose',
        category: 'Maintenance',
        description: 'Complete inspection',
        longDescription: 'Full diagnostic inspection of your e-bike to identify any issues or maintenance needs. The fee goes toward repairs if you fix with us.',
        features: ['Full inspection', 'Written report', 'Repair estimate', 'Fee applies to repairs'],
        icon: '/maintenance_icon.png'
    }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: string): ServiceData[] {
    return services.filter(service => service.category === category);
}
