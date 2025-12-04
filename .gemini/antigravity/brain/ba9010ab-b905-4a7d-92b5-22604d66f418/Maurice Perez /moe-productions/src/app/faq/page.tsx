import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Bike Repair FAQ - Moe Productions",
  description: "Answers to common questions about electric bike repair times, brands, pricing, appointments, and battery safety at Moe Productions.",
};

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          FAQ
        </h1>
        <p className="text-xl text-gray-400">
          Common questions about our repair services.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>How fast can you fix my bike?</AccordionTrigger>
          <AccordionContent>
            Most common repairs like tires, brakes, and basic electrical fixes are done within 24-48 hours. We aim for same-week turnaround so you don't miss work.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you work on all brands?</AccordionTrigger>
          <AccordionContent>
            We work on most major electric bike and scooter brands, including Arrow, Fly, Super73, and many others used by delivery riders. If you have a very obscure model, call us first.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do I need an appointment?</AccordionTrigger>
          <AccordionContent>
            Yes. We are appointment-only to ensure we can give every bike the attention it needs without overcrowding the shop. Please book online.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is the diagnostic fee applied to the repair?</AccordionTrigger>
          <AccordionContent>
            Yes! The 65 diagnostic fee is credited toward your final bill if you choose to have us do the repair.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Do you offer custom graphics or powder coating?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer full custom work including graphics kits and powder coating. Powder coating requires a full tear-down and re-assembly of the bike.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>What forms of payment do you accept?</AccordionTrigger>
          <AccordionContent>
            We accept cash and major credit/debit cards in the shop. No online deposits are required to book.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
