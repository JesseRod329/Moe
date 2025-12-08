'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const faqs = [
    {
        question: "How fast can you fix my bike?",
        answer: "Most repairs are completed within 2-3 days. Simple jobs like tire changes can often be done same-day if parts are in stock.",
    },
    {
        question: "Do you work on all brands of electric bikes and scooters?",
        answer: "We work on most major brands including Super73, Onyx, Sur-Ron, Segway, and many others. If you have a custom build or a rare brand, give us a call first.",
    },
    {
        question: "Do I need an appointment?",
        answer: "Appointments are recommended to guarantee a slot, especially for diagnostics. Walk-ins are welcome for simple repairs like flats, but wait times may vary.",
    },
    {
        question: "Is the diagnostic fee applied to the repair?",
        answer: "Yes! The $65 diagnostic fee is credited toward the final cost of your repair if you choose to proceed with our service.",
    },
    {
        question: "Do you offer custom graphics or powder coating?",
        answer: "Yes, we offer full custom work including graphics kits and powder coating. Powder coating requires a full tear-down and rebuild, so please plan for extra time.",
    },
];

export default function FAQ() {
    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-3xl mx-auto px-6 pt-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                    Frequently Asked <span className="text-neon-green">Questions</span>
                </h1>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <Disclosure as="div" key={faq.question} className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white/5 px-4 py-4 text-left text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus-visible:ring focus-visible:ring-neon-blue/75 border border-white/10">
                                        <span className="text-lg">{faq.question}</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-neon-green`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-400 text-base leading-relaxed">
                                        {faq.answer}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </div>
    );
}
