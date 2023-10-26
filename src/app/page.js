import ActionSection from "./components/homepage/ActionSection";
import ContactForm from "./components/homepage/ContactForm";
import FeatureSection from "./components/homepage/FeatureSection";
import BannerSection from "./components/homepage/HomeBanner";
import TestimonialSection from "./components/homepage/TestimonialSection";

export const metadata = {
  title: "Work Manager",
};
export default function Home() {
  return (
    // <main>
      <div>
   <BannerSection/>
   <FeatureSection/>
   <ActionSection/>
   <TestimonialSection/>
   <ContactForm/>
        {/* <h1 className="text-5xl">Welcome to work manager</h1> */}
      </div>
    // </main>
  );
}
