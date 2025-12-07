'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I book a tutoring session?",
    answer: "You can book a tutoring session by browsing our available tutors, selecting your preferred time slot, and completing the booking form. Payment is processed securely through our platform."
  },
  {
    question: "What subjects do you offer tutoring for?",
    answer: "We offer tutoring across a wide range of subjects including Mathematics, Science, English, History, Foreign Languages, Computer Science, and many more. You can filter tutors by subject on our platform."
  },
  {
    question: "Do you offer both online and in-person tutoring?",
    answer: "Yes! We offer both online tutoring sessions via video conferencing and in-person tutoring depending on your location and tutor availability. You can specify your preference when booking."
  },
  {
    question: "How are your tutors qualified?",
    answer: "All our tutors go through a rigorous screening process. They must have relevant educational qualifications, teaching experience, and pass background checks. Many are certified teachers or subject matter experts."
  },
  {
    question: "What if I'm not satisfied with my session?",
    answer: "Your satisfaction is our priority. If you're not satisfied with a session, please contact our support team within 24 hours. We offer refunds or session credits on a case-by-case basis."
  },
  {
    question: "How far in advance do I need to book?",
    answer: "You can book sessions as little as 2 hours in advance, subject to tutor availability. However, we recommend booking at least 24-48 hours ahead to secure your preferred time slot."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            FAQ
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
            Frequently Asked{' '}
            <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#0891B2]">Questions</span>
          </h1>
          
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our tutoring services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-1 border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <span className="text-[#1E293B] font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-6 text-blue-100">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;