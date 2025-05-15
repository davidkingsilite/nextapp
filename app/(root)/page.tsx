import Divider from "@/components/Divider";
import Hero from "@/components/Hero"
import Services from "@/components/Services";


export default function Home() {
  
  return (

      <main className="relative ">
        <Hero />
       <div className="max-w-[1440px] mx-auto pl-[100px] pr-[100px] pt-20 pb-10">
         <div className="flex justify-between font-bevietnam gap-20 pb-5">
          <h1 className="text-[25px] font-bold">We Always Provide The Best Services</h1>
          <div className="flex flex-col">
               <h3 className="text-[18px]">Services</h3>
               <p className="text-xs">While we can customize youe cleaning services to your needs, most clients schedule regular cleaning services:</p>
          </div>
         </div>
         <Divider />
         <Services />
       </div>
       
      </main>     

  );
}
