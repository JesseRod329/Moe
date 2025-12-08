import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-white">
            MOE <span className="text-neon-blue">PRODUCTIONS</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-neon-green transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-neon-green transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-neon-green transition-colors">
            Pricing
          </Link>
          <Link href="/battery-safety" className="hover:text-neon-green transition-colors">
            Battery & Safety
          </Link>
          <Link href="/about" className="hover:text-neon-green transition-colors">
            About Moe
          </Link>
          <Link href="/faq" className="hover:text-neon-green transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-neon-green transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/booking">
            <Button className="font-bold">
              Book a Repair
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
