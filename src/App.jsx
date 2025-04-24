import Faq from './customComponents/Faq';
import Footer from './customComponents/Footer';
import Hero from './customComponents/Hero';
import MapView from './customComponents/MapView';
import MedicalSpecialties from './customComponents/MedicalSpecialties';
import Navbar from './customComponents/Navbar';

import { faqData } from './utils/data';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <MedicalSpecialties/>
      <MapView/>
     
      <Faq faqData={faqData} title="Frequently Asked Questions"/>
      <Footer/>
    </>
  );
}

export default App;
