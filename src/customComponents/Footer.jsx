import {
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
  } from 'lucide-react';
  import { Separator } from '@/components/ui/separator';
  
  export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <>
        <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 border-t border-gray-200 text-gray-600 dark:text-gray-400">
          <div className="mx-4 md:mx-64 md:px-20">
            {/* Main Footer Content */}
            <div className="flex items-start justify-between pb-6">
              {/* Column 1: Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <img src="logo.png" alt="City Care logo" className="w-6 h-6" />
                  <h2 className="text-xl font-bold text-gray-800">City Care</h2>
                </div>
                <p className="text-sm leading-relaxed">A Care that Cares</p>
                <div className="space-y-2">
                  <div className="flex items-start text-sm">
                    <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-gray-500" />
                    <span>123 Innovation Street, Tech City, TC 10101</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-gray-500" />
                    <span>+91 6003803922</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0 text-gray-500" />
                    <span>citycare340@gmail.com</span>
                  </div>
                </div>
              </div>
  
              {/* Column 2: Services */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-800">Services</h3>
                <ul className="space-y-2">
                  {[
                    'Home Care',
                    'Healthcare Services',
                    'Elderly Support',
                    'Community Programs',
                    'Medical Assistance',
                    'Volunteer Opportunities',
                  ].map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm hover:text-blue-600 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            <Separator className="mb-8 bg-gray-200 dark:bg-gray-800" />
  
            {/* Bottom Links */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <SocialLink
                  href="#"
                  icon={<Facebook size={18} />}
                  label="Facebook"
                />
                <SocialLink
                  href="#"
                  icon={<Instagram size={18} />}
                  label="Instagram"
                />
              </div>
  
              <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
  
        {/* Bottom Strip */}
        <div className="text-center text-sm text-white bg-[#5FA2FF] py-3">
          <p>© {currentYear} City Care. All rights reserved.</p>
        </div>
      </>
    );
  }
  
  function SocialLink({ href, icon, label }) {
    return (
      <a
        href={href}
        aria-label={label}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {icon}
      </a>
    );
  }
  