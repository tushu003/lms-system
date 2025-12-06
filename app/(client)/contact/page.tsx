import React from 'react'
import ContactFormSection from './_components/ContactFormSection'
import ContactBanner from './_components/contact-banner'
import FAQSection from './_components/faq-section'

export default function Contact() {
  return (
    <div>
      <ContactBanner />
      <ContactFormSection />
      <FAQSection />
    </div>
  )
}
