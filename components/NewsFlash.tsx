'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function NewsFlash() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="w-full bg-primary-green-100 text-white overflow-hidden relative z-50 h-8">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="w-full overflow-hidden">
          <p className="whitespace-nowrap animate-marquee text-xs font-medium">
            🎉 New service alert! Now offering eco-friendly deep cleaning — fast, reliable, and affordable. Book now and get 10% off your first order!
          </p>
        </div>
        <button
          onClick={() => setShow(false)}
          className="ml-4 p-1 hover:bg-green-600 rounded-full"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
