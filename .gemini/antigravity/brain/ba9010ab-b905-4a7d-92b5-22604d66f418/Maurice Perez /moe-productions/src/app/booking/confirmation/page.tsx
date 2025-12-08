import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center max-w-lg">
      <div className="flex justify-center mb-6">
        <CheckCircle className="w-24 h-24 text-neon-green animate-pulse" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-4">Request Received!</h1>
      <p className="text-xl text-gray-300 mb-8">
        We have received your booking request. We will review it and send an email confirmation for your appointment time shortly.
      </p>
      <div className="bg-dark-surface p-6 rounded-xl border border-white/10 mb-8">
        <p className="text-sm text-gray-400">
          All reminders will be sent by email. Please check your inbox (and spam folder) for updates from Moe Productions.
        </p>
      </div>
      <Link href="/">
        <Button size="lg" variant="outline" className="w-full">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
