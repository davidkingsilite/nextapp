// components/ContactSection.tsx


import { Hourglass, Mail, MapPin, PhoneCall } from 'lucide-react';
import ContactForm from './ContactForm';


export default function ContactSection() {

    return (
      <section className="bg-white text-black py-14 md:flex md:justify-between gap-10 font-bevietnam">
        {/* Right side - Contact Form */}
        <div className="flex-1 mb-10">
          <h2 className="text-3xl font-bold mb-4">Keep In Touch</h2>
          <p className="text-gray-600 mb-8">
            We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
          </p>
         <ContactForm />
        </div>

        {/* Left side - Contact Info */}
        <div className="flex-1 mb-1 md:mb-0 flex flex-col justify-end ">

          <h2 className="text-3xl font-bold mb-6">Find us</h2>
  
          <div className="space-y-6 ">

            {/* Email */}
            <div className="flex items-center bg-[#FBFBFB] p-4 rounded-xl shadow border">
              <div className="bg-green-500 text-white rounded-full p-3 mr-4">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold">Email Now</p>
                <p className="text-gray-600">hello@shaninomicleaning.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center bg-[#FBFBFB] p-4 rounded-xl shadow border">
              <div className="bg-green-500 text-white rounded-full p-3 mr-4">
              <PhoneCall size={20}/>
              </div>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-600">+1 (312) 388-6210</p>
              </div>
            </div>
            {/* hours */}
            <div className="flex items-center bg-[#FBFBFB] p-4 rounded-xl shadow border">
              <div className="bg-green-500 text-white rounded-full p-3 mr-4">
              <Hourglass size={20}/>
              </div>
              <div>
                <p className="font-semibold">Hours</p>
                <p className="text-gray-600">Mon–Sat, 9am – 5pm, Sun, 12am - 4pm.</p>
              </div>
            </div>
  
  
            {/* Address */}
            <div className="flex items-center bg-[#FBFBFB] p-4 rounded-xl shadow border">
              <div className="bg-green-500 text-white rounded-full p-3 mr-4">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">123 Sparkle Street, Clean City, IL 60500</p>
              </div>
            </div>
          </div>

          {/* Optional: Google Map Embed */}
          <div className="mt-6">
            <iframe
              title="Shaninomi Cleaning Location"
              src="https://maps.google.com/maps?q=chicago, USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  