// components/ContactSection.tsx


import { Mail, MapPin, PhoneCall } from 'lucide-react';
import ContactForm from './ContactForm';


export default function ContactSection() {

    return (
      <section className="bg-white text-black py-14 md:flex md:justify-between gap-10 font-bevietnam">
        {/* Left side - Contact Info */}
        <div className="flex-1 mb-10 md:mb-0 flex flex-col justify-end ">

          <h2 className="text-3xl font-bold mb-6">Find us</h2>
  
          <div className="space-y-6 ">
            {/* Phone */}
            <div className="flex items-center bg-[#FBFBFB] p-4 rounded-xl shadow border">
              <div className="bg-green-500 text-white rounded-full p-3 mr-4">
              <PhoneCall size={20}/>
              </div>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-600">+(08) 255 201 888</p>
              </div>
            </div>
  
            {/* Email */}
            <div className="flex items-center bg-[#FBFBFB] p-4 rounded-xl shadow border">
              <div className="bg-green-500 text-white rounded-full p-3 mr-4">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold">Email Now</p>
                <p className="text-gray-600">Hello@procleaning.com</p>
              </div>
            </div>
  
            {/* Address */}
            <div className="flex items-center bg-[#FBFBFB] p-4 rounded-xl shadow border">
              <div className="bg-green-500 text-white rounded-full p-3 mr-4">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">7510, Brand Tower, New York, USA</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right side - Contact Form */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-green-700 mb-2">Contact info</h3>
          <h2 className="text-3xl font-bold mb-4">Keep In Touch</h2>
          <p className="text-gray-600 mb-8">
            We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
          </p>
         <ContactForm />
          {/* <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </section>
    );
  }
  