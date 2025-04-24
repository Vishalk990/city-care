import Faq from './customComponents/Faq';
import Hero from './customComponents/Hero';
import MapView from './customComponents/MapView';
import Navbar from './customComponents/Navbar';
import ServicesSection from './customComponents/Service';
import { faqData } from './utils/data';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <MapView/>
      <ServicesSection/>
      <Faq faqData={faqData} title="Frequently Asked Questions"/>
    </>
  );
}

export default App;
