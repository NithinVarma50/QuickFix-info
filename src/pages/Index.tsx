import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Technology from "@/components/sections/Technology";
import Coverage from "@/components/sections/Coverage";
import Franchise from "@/components/sections/Franchise";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Vision from "@/components/sections/Vision";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";
import { ProceduralGroundBackground } from "@/components/ui/animated-pattern-cloud";

const Index = () => {
  return (
    <main className="bg-transparent relative">
      <ProceduralGroundBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <HowItWorks />
        <Technology />
        <Coverage />
        <Franchise />
        <WhyUs />
        <Testimonials />
        <Vision />
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
