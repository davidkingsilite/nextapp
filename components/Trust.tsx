import React from 'react'
import { ShieldCheck, LeafyGreen } from "lucide-react";
import Counter from './Counter';

const Trust = () => {
  return (
    <section className="py-8 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    {/* Section Heading */}
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
      Why People Trust ProCleaning
    </h2>
    <p className="text-gray-600 max-w-xl mx-auto mb-10">
      We're licensed, insured, and committed to top-tier service across Chicago.
    </p>

    {/* Badges and Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
      {/* Badge 1 */}
      <div className="flex flex-col items-center">
      <ShieldCheck className="w-12 h-12 text-green-600 mb-2" />
       <p className="text-sm font-medium text-gray-700">Licensed & Trusted</p>
      </div>

      {/* Badge 2 */}
      <div className="flex flex-col items-center">
      <LeafyGreen className="w-12 h-12 text-green-600 mb-2" />
       <p className="text-sm font-medium text-gray-700">Eco-friendly</p>
      </div>

      {/* Stat 1 */}
      {/* <div className="flex flex-col items-center">
        <p className="text-3xl font-bold text-green-600 mb-2">100+</p>
        <p className="text-sm font-medium text-gray-700">Homes Cleaned</p>
      </div> */}
      <Counter />

      {/* Stat 2 */}
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold text-green-600 mb-2">4.9★</p>
        <p className="text-sm font-medium text-gray-700">Google Rating</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Trust