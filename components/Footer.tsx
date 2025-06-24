import React from "react";
import Divider from "./Divider";
import Image from "next/image";
import Link from "next/link";
import FooterNewsletter from "./Newsletter";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-100 text-white px-6 md:px-12 lg:px-24 pt-10 md:pt-16 pb-4 font-bevietnam flex flex-col gap-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Logo & Description */}
        <div className="pr-4">
          <div className="flex items-center">
            {/* Replace with your own SVG/logo */}
            <Link href="/" className='flex justify-center items-center gap-1 mb-4'>
                 <Image
                   src='/cleaning_broom.png'
                   alt='Cleaning logo'
                   width={22}
                   height={36}
                   />
                   
                   <div className="text-left leading-tight">
                    <h1 className="font-extrabold text-[18px]">
                     <span className="text-primary-green-100">PRO</span>
                     <span className="text-white">Cleaning</span>
                    </h1>
                    <p className="text-[10px] text-white font-light">cleaning services company</p>
                   </div>
            </Link>
           
          </div>
          <p className="mt-4 text-sm text-white w-auto">
            Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.
          </p>
        </div>
        <div className="mx-0 flex flex-col md:flex-row gap-10 md:gap-16 text-nowrap">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/team">Our Team</Link></li>
          </ul>
        </div>

        {/* Know More */}
        <div>
          <h3 className="font-semibold mb-4">Know More</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">Support</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold">Newsletter</h3>
          <FooterNewsletter />
        </div>
      </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400">
         <Divider />
        2025 “Procleaning” All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
