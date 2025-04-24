import { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  CalendarClock,
  Navigation,
  Mail,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';

const MapView = () => {
  const [selectedInfo, setSelectedInfo] = useState('contact');

  return (
    <section
      className="max-w-7xl mx-auto py-12 bg-white rounded-xl shadow-sm mt-6"
      aria-label="Help section and map view of Shri Shankar Medical Hall"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-[#5FA2FF]">
        Find Us At
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-8 bg-blue-50 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center border-b border-blue-200 pb-3">
            <button
              className={`flex items-center gap-2 pb-2 px-2 font-medium cursor-pointer ${selectedInfo === 'contact' ? 'text-[#5FA2FF] border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setSelectedInfo('contact')}
            >
              <Phone size={18} />
              <span>Contact</span>
            </button>
            <button
              className={`flex items-center gap-2 pb-2 px-2 font-medium cursor-pointer ${selectedInfo === 'hours' ? 'text-[#5FA2FF] border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setSelectedInfo('hours')}
            >
              <Clock size={18} />
              <span>Hours</span>
            </button>
            <button
              className={`flex items-center gap-2 pb-2 px-2 font-medium cursor-pointer  ${selectedInfo === 'direction' ? 'text-[#5FA2FF] border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setSelectedInfo('direction')}
            >
              <Navigation size={18} />
              <span>Directions</span>
            </button>
          </div>

          {selectedInfo === 'contact' && (
            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="bg-blue-100 p-3 rounded-full text-[#5FA2FF]">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-lg font-medium">24/7 Support</h3>
                  <p className="text-black opacity-70 text-base">
                    Call us anytime for appointments or inquiries.
                  </p>
                  <a
                    href="tel:+911234567890"
                    className="text-[#5FA2FF] font-semibold mt-1 inline-block"
                  >
                    +91 6003803922
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="bg-blue-100 p-3 rounded-full text-[#5FA2FF]">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-lg font-medium">Email Us</h3>
                  <p className="text-black opacity-70">
                    Send us your questions or feedback.
                  </p>
                  <a
                    href="mailto:citycare340@gmail.com"
                    className="text-[#5FA2FF] font-semibold mt-1 inline-block"
                  >
                    citycare340@gmail.com
                  </a>
                </div>
              </div>
            </div>
          )}

          {selectedInfo === 'hours' && (
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="bg-blue-100 p-3 rounded-full text-[#5FA2FF]">
                  <Clock size={20} />
                </div>
                <div className="">
                  <h3 className="text-lg font-semibold text-[#5FA2FF]">
                    Regular Hours
                  </h3>
                  <div className="mt-2 space-y-1 text-sm">
                    <p className="flex justify-between text-gray-600">
                      <span>Everyday:</span>{' '}
                      <span className="font-medium ml-3">
                        8:00 AM - 10:00 PM
                      </span>
                    </p>
                    {/* <p className="flex justify-between text-gray-600"><span>Saturday:</span> <span className="font-medium">9:00 AM - 6:00 PM</span></p>
                    <p className="flex justify-between text-gray-600"><span>Sunday:</span> <span className="font-medium">10:00 AM - 4:00 PM</span></p> */}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="bg-blue-100 p-3 rounded-full text-[#5FA2FF]">
                  <CalendarClock size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#5FA2FF]">
                    Holiday Hours
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We operate with limited hours during major holidays.
                  </p>
                </div>
              </div>

              {/* <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-yellow-800 text-sm">
                  Note: Emergency services available. For urgent medication
                  needs, please use our night bell after regular hours.
                </p>
              </div> */}
            </div>
          )}

          {selectedInfo === 'direction' && (
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="bg-blue-100 p-3 rounded-full text-[#5FA2FF]">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-lg font-semibold text-[#5FA2FF]">
                    Our Location
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Shri Shankar Medical Hall, Main Road, Guwahati, Assam -
                    781001
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-[#5FA2FF] mb-3">
                  Nearby Landmarks
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="min-w-4">•</div>
                    <span>500m from Guwahati Railway Station</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="min-w-4">•</div>
                    <span>Next to State Bank of India</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="min-w-4">•</div>
                    <span>Opposite City Mall</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Shri+Shankar+Medical+Hall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#5FA2FF] text-white px-4 py-3 rounded-xl hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation size={18} /> Get Driving Directions
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Map */}
        <div className="flex flex-col gap-4">
          <div className="w-full h-80 md:h-96 lg:h-96 border border-blue-200 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.34422989844!2d92.19749399999999!3d26.120317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ac32e4822d037%3A0x41d752237436d74d!2sShri%20Shankar%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1744969483240!5m2!1sen!2sin"
              className="w-full h-full"
              
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shri Shankar Medical Hall Map"
            ></iframe>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#5FA2FF] mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-blue-800">
                  City Care
                </h3>
                <p className="text-gray-600 text-sm">
                  Main Road, Guwahati, Assam - 781001
                </p>
                <div className="mt-3 flex gap-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Shri+Shankar+Medical+Hall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                  >
                    <Navigation size={14} /> Directions
                  </a>
                  <a
                    href="https://goo.gl/maps/123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink size={14} /> View Larger Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapView;
