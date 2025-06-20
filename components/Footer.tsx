import React from "react";
import Divider from "./Divider";
import Image from "next/image";
import Link from "next/link";
import FooterNewsletter from "./Newsletter";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-100 text-white pl-[100px] pr-[100px] pt-[75px] pb-[15px] font-bevietnam flex flex-col gap-12">
      <div className="max-w-7xl mx-0 flex flex-col md:flex-row gap-20">
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
                   <div className='flex flex-col justify-center items-center text-left'>
                    <h1 className='font-bevietnam font-extrabold text-[18px]'><span className='text-primary-green-100'>PRO</span><span className='text-white'>Cleaning</span></h1>
                    <h6 className='text-white font-Be_Vietnam_Pro text-[10px]'>cleaning services company</h6>
                   </div>
            </Link>
           
          </div>
          <p className="mt-4 text-sm text-white w-auto">
            Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.
          </p>
        </div>
        <div className="mx-0 flex flex-col md:flex-row gap-16 text-nowrap">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Team</a></li>
          </ul>
        </div>

        {/* Know More */}
        <div>
          <h3 className="font-semibold mb-4">Know More</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
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
