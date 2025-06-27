export default function SupportPage() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 font-bevietnam">
        <h1 className="text-3xl font-bold mb-6 text-primary-green-100">Customer Support</h1>
        <p className="mb-4 text-gray-700">
          Need help with our services? We’re here for you. Reach out to our support team, and we’ll get back to you as soon as possible.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
        <ul className="text-gray-600 space-y-2">
          <li>Email: <a href="mailto:support@procleaning.com" className="text-primary-green-100">support@procleaning.com</a></li>
          <li>Phone: +234 812 345 6789</li>
          <li>Hours: Mon–Fri, 9am – 5pm</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Frequently Asked Questions</h2>
        <ul className="space-y-4 text-sm text-gray-700 list-disc ml-6">
          <li><strong>How do I book a service?</strong> Use the “Book Now” button on our homepage or contact support.</li>
          <li><strong>Can I cancel/reschedule?</strong> Yes, please contact us at least 24 hours before your scheduled time.</li>
          <li><strong>Do you offer eco-friendly cleaning?</strong> Yes, just let us know during booking.</li>
        </ul>
      </main>
    );
  }
  