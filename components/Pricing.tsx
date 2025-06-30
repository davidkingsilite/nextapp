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
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // const handleCheckout = async () => {
  //   const res = await fetch('/api/checkout', {
  //     method: 'POST',
  //     body: JSON.stringify({ plan: selectedPlan/* ,email: userEmail */ }),
  //   });
  
  //   const data = await res.json();
  //   window.location.href = data.url; // Redirect to Stripe Checkout
  // };
  


  return (
    <section className="relative z-0">
        
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 max-w-6xl mx-auto mt-8 sm:px-6">
        {plans[planType].map((plan) => (
          <div
            key={plan.title}
            className={`relative rounded-xl shadow-lg p-6 flex flex-col items-center justify-between ${plan.title === 'ENTERPRISE PACKAGE' ? 'border bg-green-50 outline outline-1 outline-green-500' : 'border bg-white'} `}
          >
            {plan.title === 'ENTERPRISE PACKAGE' && (
             <span className="text-sm font-bold uppercase text-white bg-green-500 px-2 py-1 rounded-full absolute -top-4">
               Most Popular
             </span>
              )}
            <h3 className="text-lg font-semibold text-gray-800">{plan.title}</h3>
            <div className="my-4">
              <span className="text-3xl font-bold text-green-600">{plan.price}</span>
              <span className="text-sm text-gray-500">/{planType}</span>
            </div>
            <ul className="text-gray-600 text-xl md:text-sm mb-6 space-y-2 text-left">
              {plan.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>•</span> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setSelectedPlan(plan.title)}
              className="mt-auto bg-green-500 border border-gray-300 hover:border-green-500 text-sm text-white font-medium py-2 px-5 rounded-lg hover:bg-green-600 transition min-w-[150px] md:min-w-[230px]">
              Book Now
            </button>
          </div>
        ))}
      </div>
       {/* // Modal  component*/}
      
      {selectedPlan && (
  <div className="transition-all duration-300 scale-100 hover:scale-105"> 
   <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative">
      <h3 className="text-lg font-semibold text-center mb-4">
        Book {selectedPlan}
      </h3>
      <p className="text-gray-600 text-sm text-center mb-6">
        You&apos;re selecting the <strong>{selectedPlan}</strong> plan. Would you like to continue?
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            // Redirect to booking page
            window.location.href = `/book?plan=${encodeURIComponent(selectedPlan)}`;
          }}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition"
        >
          Yes, Book Now
        </button>
        <button
          onClick={() => {
            setSelectedPlan(null);
           // handleCheckout();
          }}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  </div>
)}
      </div>
    </section>
  );
}
