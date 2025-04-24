import { Phone, Clock, Calendar, Shield, Heart, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-32 py-16"
        aria-labelledby="hero-heading"
      >
        {/* Left Section */}
        <div
          className="left-section pt-10"
          role="region"
          aria-label="Hero Text"
        >
          <div className="flex flex-col gap-y-6 md:pt-10">
            <div className="w-fit bg-[rgba(95,162,255,0.4)] text-[#5FA2FF] rounded-md px-4 py-2 text-sm font-semibold">
              Find a doctor for you!
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl max-w-md font-semibold text-black leading-tight"
            >
              Take the best quality Treatment.
            </h1>
            <p className="text-md font-semibold max-w-lg text-black">
              Get expert care fast—our clinic offers same-day appointments,
              skilled doctors, and personalized treatment for your health and
              recovery.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 max-w-md">
              <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                <Clock className="text-[#5FA2FF]" size={20} />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                <Calendar className="text-[#5FA2FF]" size={20} />
                <span className="text-sm font-medium">Easy Booking</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                <Shield className="text-[#5FA2FF]" size={20} />
                <span className="text-sm font-medium">Certified Doctors</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                <Heart className="text-[#5FA2FF]" size={20} />
                <span className="text-sm font-medium">Personal Care</span>
              </div>
            </div>
          </div>
        </div>

       
        <div
          className="right-section flex flex-col items-center justify-center mt-16 md:mt-0 relative"
          role="region"
          aria-label="Medical Graphic"
        >
          {/* Main Graphic */}
          <div className="relative w-full max-w-md">
            {/* Background Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 transform scale-125" />

            {/* Medical Logo/Icon */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-52 h-52 bg-[#5FA2FF] bg-opacity-10 rounded-full flex items-center justify-center">
                  <div className="relative">
                    {/* Medical Cross Symbol */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-4 bg-[#5FA2FF] rounded-md" />
                    <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 h-4 w-16 bg-[#5FA2FF] rounded-md" />

                    {/* Heart Beat Line */}
                    <Activity
                      size={100}
                      className="text-[#5FA2FF]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-semibold text-xl">Care that Cure</h3>
                {/* <p className="text-gray-600 mt-1">A Care that Cure</p> */}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 right-12 w-8 h-8 bg-[#5FA2FF] rounded-full opacity-20" />
            <div className="absolute bottom-16 left-10 w-6 h-6 bg-[#5FA2FF] rounded-full opacity-30" />
            <div className="absolute top-32 left-6 w-4 h-4 bg-[#5FA2FF] rounded-full opacity-50" />
            <div className="absolute bottom-6 right-20 w-5 h-5 bg-[#5FA2FF] rounded-full opacity-40" />
          </div>


          <div className="absolute bottom-0 mb-6 transition-all duration-100 ease-in-out">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-[#5FA2FF] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-blue-500 transition-colors"
            >
              <Phone size={20} />
              Contact us at +91 6003803922
            </a>
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-300 my-6 w-11/12 mx-auto" />
    </>
  );
};

export default Hero;
