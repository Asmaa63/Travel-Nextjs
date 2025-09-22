// app/page.tsx
import Brand from "./brands/page";
import DestinationsSection from "./destinations/page";
import HeroSection from "./hero/page";
import Newsletter from "./Newsletter/page";
import ServicesSection from "./services/page";
import StepsSection from "./steps/page";
import Testimonials from "./testimonials/page";


export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <DestinationsSection/>
      <StepsSection/>
      <Testimonials/>
      <Brand/>
      <Newsletter/>
    </div>
  );
}
