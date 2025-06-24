import Company from "@/components/AboutCompany";
import BackToTop from "@/components/BackToTop";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Divider from "@/components/Divider";
import ExpertTeam from "@/components/ExpertTeam";
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing";
import ServicesList from "@/components/ServicesList";
import Solution from "@/components/Solution";
import Testimonial from "@/components/Testimonials";


export default function Home() {
  
  return (

      <main className="relative max-w-fit">
        <Hero />
       <div className="max-w-fit mx-auto px-8 sm:px-10 md:px-16 lg:px-28 pt-10 md:pt-20 pb-10">
         <div className="flex justify-between font-bevietnam gap-10 sm:gap-20">
          <h1 className="text-[25px] font-bold">We Always Provide The Best Services</h1>
          <div className="flex flex-col">
               <h3 className="text-[18px]">Services</h3>
               <p className="text-xs">While we can customize your cleaning services to your needs, most clients schedule regular cleaning services:</p>
          </div>
         </div>
         <Divider />
         <ServicesList />
         <BackToTop />
         <Solution />
         <ExpertTeam />
         <Company />
         <Pricing />
         <Testimonial />
         <BlogSection />
         <ContactSection />
       </div>
       
      </main>     

  );
}
