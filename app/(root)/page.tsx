import AboutCompany from "@/components/AboutCompany";
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
import Trust from "@/components/Trust";


export default function Home() {
  
  return (

      <main className="relative max-w-fit bg-[#F9FAFB]">
        <Hero />
       <div className="max-w-fit mx-auto px-4 pb-10 pt-10 sm:px-10 md:px-16 lg:px-28 md:pt-16">
         <div className="flex flex-col font-bevietnam gap-10">
          <Trust />
          <div className="flex justify-between items-center font-bevietnam gap-4 px-4 sm:gap-20">
          <h1 className="text-[18px] sm:text-[25px] font-bold">We Always Provide The Best Services</h1>
          <div className="flex flex-col">
               <h3 className="text-[12px] sm:text-[18px]">Services</h3>
               <p className="text-xs">While we can customize your cleaning services to your needs, most clients schedule regular cleaning services:</p>
          </div>
          </div>
          
         </div>
         <Divider />
         <ServicesList />
         <BackToTop />
         <Solution />
         <ExpertTeam />
         <AboutCompany />
         <Pricing />
         <Testimonial />
         <BlogSection />
         <ContactSection />
       </div>
       
      </main>     

  );
}
