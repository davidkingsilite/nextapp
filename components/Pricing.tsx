'use client';

import { useState } from 'react';

const plans = {
  monthly: [
    {
      title: 'BASIC PACKAGE',
      price: '$59.00',
      features: [
        'Dusting of all surfaces',
        'Sweeping and mopping floors',
        'Vacuuming carpets and rugs',
        'Cleaning of kitchen surfaces',
        'Cleaning of bathroom surfaces',
        'Emptying trash bins',
      ],
    },
    {
      title: 'ENTERPRISE PACKAGE',
      price: '$69.00',
      features: [
        'All services in the Basic Plan',
        'Detailed dusting',
        'Wiping down of kitchen appt',
        'Cleaning inside the microwave',
        'Changing bed linens',
        'Spot cleaning walls and doors',
      ],
    },
    {
      title: 'PREMIUM PACKAGE',
      price: '$99.00',
      features: [
        'All services in the Clean Plan',
        'Deep cleaning of kitchen appt',
        'baseboards, door frames, & vents',
        'Organization of closets pantries',
        'Carpet, upholstery spot cleaning',
        'Detailed bathroom cleaning',
      ],
    },
  ],
  yearly: [
    {
      title: 'BASIC PACKAGE',
      price: '$649.00',
      features: [
        'Dusting of all surfaces',
        'Sweeping and mopping floors',
        'Vacuuming carpets and rugs',
        'Cleaning of kitchen surfaces',
        'Cleaning of bathroom surfaces',
        'Emptying trash bins',
      ],
    },
    {
      title: 'ENTERPRISE PACKAGE',
      price: '$759.00',
      features: [
        'All services in the Basic Plan',
        'Detailed dusting',
        'Wiping down of kitchen appt',
        'Cleaning inside the microwave',
        'Changing bed linens',
        'Spot cleaning walls and doors',
      ],
    },
    {
      title: 'PREMIUM PACKAGE',
      price: '$1089.00',
      features: [
        'All services in the Clean Plan',
        'Deep cleaning of kitchen appt',
        'baseboards, door frames, & vents',
        'Organization of closets pantries',
        'Carpet, upholstery spot cleaning',
        'Detailed bathroom cleaning',
      ],
    },
  ],
};

export default function Pricing() {
    
  const [planType, setPlanType] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="relative z-0">
      
       {/* Background image
       <div className="absolute inset-0 z-0 mx-0">
        <div className="h-3/4 w-full bg-opacity-90 bg-blend-overlay bg-pattern bg-cover bg-center" />
      </div> */}
        
    <div className='relative z-10 py-12 px-4 text-center font-bevietnam'>
      <h3 className="text-sm font-semibold uppercase">Our Pricing</h3>
      <h2 className="text-3xl md:text-4xl font-bold my-4">
        Choose From Our Lowest <br />
        Plans and Prices
      </h2>

      {/* Toggle */}
      <div className="inline-flex border border-gray-300 rounded-full overflow-hidden my-6">
        <div className='flex px-2 py-2 bg-[#F4F5F8] gap-2'>

        <button
          className={` px-5 py-2 text-sm font-medium rounded-full ${
              planType === 'monthly' ? 'bg-green-500 text-white' : 'text-gray-600 bg-primary-white'
            }`}
            onClick={() => setPlanType('monthly')}
            >
          Monthly
        </button>
        <button
          className={`px-5 py-2 text-sm font-medium rounded-full ${
              planType === 'yearly' ? 'bg-green-500 text-white' : 'text-gray-600 bg-primary-white'
            }`}
            onClick={() => setPlanType('yearly')}
            >
          Yearly
        </button>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
        {plans[planType].map((plan) => (
          <div
            key={plan.title}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-between border"
          >
            <h3 className="text-lg font-semibold text-gray-800">{plan.title}</h3>
            <div className="my-4">
              <span className="text-3xl font-bold text-green-600">{plan.price}</span>
              <span className="text-sm text-gray-500">/{planType}</span>
            </div>
            <ul className="text-gray-600 text-sm mb-6 space-y-2 text-left">
              {plan.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>•</span> {item}
                </li>
              ))}
            </ul>
            <button className="mt-auto bg-primary-white border border-gray-300 hover:border-green-500 text-sm text-gray-800 font-medium py-2 px-5 rounded-lg hover:bg-green-50 transition min-w-[230px]">
              Book Now
            </button>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
}
