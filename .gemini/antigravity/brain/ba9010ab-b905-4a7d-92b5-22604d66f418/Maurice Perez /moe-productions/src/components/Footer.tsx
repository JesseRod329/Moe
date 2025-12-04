import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-sm text-gray-400">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
        {/* Column 1: Shop Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">
            Moe Productions <br /> Electric Bike Service
          </h3>
          <ul className="space-y-2">
            <li>24 hour appointment only</li>
            <li>Electric bike and scooter repair</li>
            <li>New York City</li>
          </ul>
          <div className="space-y-1 pt-2">
            <p>Work phone: [Add Number]</p>
            <p>Email: [Add Email]</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="hover:text-neon-blue">Home</Link>
            <Link href="/services" className="hover:text-neon-blue">Services</Link>
            <Link href="/pricing" className="hover:text-neon-blue">Pricing</Link>
            <Link href="/battery-safety" className="hover:text-neon-blue">Battery & Safety</Link>
            <Link href="/booking" className="hover:text-neon-blue">Booking</Link>
            <Link href="/faq" className="hover:text-neon-blue">FAQ</Link>
            <Link href="/contact" className="hover:text-neon-blue">Contact</Link>
          </nav>
        </div>

        {/* Column 3: Policies & Language */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Policies & Info</h3>
          <Link href="/policies" className="block hover:text-neon-blue">
            View Shop Policies
          </Link>
          <div className="pt-4 text-xs text-gray-500">
            <p>We speak English and Spanish.</p>
            <p>Hablamos inglés y español.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 border-t border-white/5 px-4 pt-8 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Moe Productions Electric Bike Service. All rights reserved.
      </div>
    </footer>
  );
}
