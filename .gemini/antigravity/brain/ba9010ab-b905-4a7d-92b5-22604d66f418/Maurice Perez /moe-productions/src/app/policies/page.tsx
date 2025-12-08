export default function PoliciesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-8">Shop Policies</h1>
      
      <div className="space-y-12 text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neon-blue">Diagnostic Fee Policy</h2>
          <p>
            A diagnostic fee of  is required for all bikes brought in for inspection. This fee covers the time and labor required to diagnose the issue. If you choose to proceed with the repair at Moe Productions, this  fee will be credited toward the final cost of the repair. If you decline the repair, the  fee is non-refundable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neon-blue">Cancellation & No-Show Policy</h2>
          <p>
            We operate on a strict appointment-only basis to serve all customers efficiently. Please provide at least 24 hours notice for cancellations. Repeated no-shows may result in the inability to book future appointments.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neon-blue">Battery Safety Policy</h2>
          <p>
            For the safety of our staff and shop, we reserve the right to refuse service on any battery that shows signs of physical damage, swelling, leakage, or unauthorized modification. We follow strict NYC fire safety guidelines for lithium-ion battery storage and charging.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neon-blue">Liability & Warranty</h2>
          <p>
            Moe Productions provides a limited warranty on labor for 30 days. Parts warranties are subject to the manufacturer's terms. We are not responsible for pre-existing damage unrelated to the specific repair performed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neon-blue">Privacy Policy</h2>
          <p>
            We collect your name, phone number, and email solely for the purpose of managing your appointment and communicating about your repair. We do not sell or share your personal information with third parties.
          </p>
        </section>
      </div>
    </div>
  );
}
