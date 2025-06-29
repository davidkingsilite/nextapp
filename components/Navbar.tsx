
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navbarLinks } from '@/constants';
import CustomButton from './CustomBotton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false); // Auto-close drawer on route change
  }, [pathname]);

  return (
    <header className="w-full z-50 sticky top-0 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex md:justify-between sm:justify-between items-center py-6 px-4 sm:px-6 lg:px-8 h-20 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image src="/cleaning_broom.png" alt="Cleaning logo" width={22} height={36} />
          <div className="text-left">
            <h1 className="font-bevietnam font-extrabold text-[18px]">
              <span className="text-primary-green-100">Shaninomi</span>
              <span className="text-black-100">Cleaning</span>
            </h1>
            <h6 className="text-grey font-bevietnam text-[10px]">cleaning services inc company</h6>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 font-bevietnam">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-[#4D4D4D] hover:text-primary-green-100 transition"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden text-gray-700 flex right-6 absolute">
          <Menu size={24} />
        </button>

        {/* Desktop CTA */}
        <CustomButton
          title="Get a quote"
          btnType="button"
          containerStyles="hidden lg:flex text-primary-white rounded-full bg-primary-green-100 hover:bg-green-600 min-w-[130px] font-medium text-xs font-poppins"
          handleClick={() => router.push('/get-a-quote')}
        />
      </nav>

      {/* Slide-in Drawer for Mobile */}
      <div
        className={`fixed top-0 pt-10 right-0 h-1.5/4 w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-between items-center px-4 py-4 mr-5 border-b">
          <span className="text-lg font-bold text-primary-green-100">Menu</span>
          <button onClick={() => setIsOpen(false)} className='bg-gray-400 rounded-full'>
            <X size={28} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-8 py-4 gap-4 font-bevietnam">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-700 hover:text-primary-green-100 py-2 border-b px-4"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          <CustomButton
            title="Get a quote"
            btnType="button"
            containerStyles="text-white bg-primary-green-100 rounded-full py-2 mt-4 font-medium text-sm"
            handleClick={() => {
              setIsOpen(false);
              router.push('/get-a-quote');
            }}
          />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
