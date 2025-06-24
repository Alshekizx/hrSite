
import Hero from "./components/homepage/hero";
import WhoWeSupport from "./components/homepage/whoWeSupport";

import SectorsWeCover from "./components/homepage/sectorsWeCover";
import OuHrApps from "./components/homepage/ourHrApp";
import FaqAccordion from "./components/homepage/faq";
import Features from "./components/homepage/features";

import ContactForm from "./components/homepage/contactUs";

export default function Home() {
  return (
    <div className="pt-16 flex flex-col items-center gap-24">
     <Hero/>
     <WhoWeSupport/>
     <div className="w-full max-w-[1400px]">
     <SectorsWeCover/>
     </div>
     <Features/>
     <OuHrApps/>
     <FaqAccordion/>
     <ContactForm/>
    </div>
  );
}
