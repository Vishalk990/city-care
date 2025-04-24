import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Menu, X } from 'lucide-react';
import { NavItems } from '../utils/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-white shadow-md font-[Inter] sticky top-0 z-50"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container md:px-32 px-4 py-3 flex justify-between items-center">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-x-2">
            <img src="logo.png" alt="city-care-logo" className="w-8 h-8" />

            <a
              href="/"
              className="text-xl font-medium"  
              aria-label="City Care Homepage"
            >
              <span className="text-[#5FA2FF] font-bold">City</span> Care
            </a>
          </div>
          <span className="text-xs text-gray-600 italic">
            Care that Cares
          </span>
        </div>

        <ul
          className="hidden md:flex items-center gap-x-24 font-medium"
          role="menubar"
        >
          {NavItems?.length > 0 &&
            NavItems?.map((item, index) => (
              <li key={index} role="none">
                <a
                  href={`#${item.title.toLowerCase()}`}
                  className="hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded text-sm"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.title}
                </a>
              </li>
            ))}
        </ul>

        <div className="hidden md:block">
          <Button
            className="bg-[#5FA2FF] hover:bg-blue-500 cursor-pointer text-white focus:ring-2 focus:ring-blue-400 px-8 rounded-full py-5"
            aria-label="Book Appointment"
          >
            Appointment
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden bg-white px-4 pb-4 text-blue-700 font-medium space-y-4"
          role="menu"
        >
          {NavItems.map((item, index) => (
            <li key={index} role="none">
              <a
                href={`#${item.title.toLowerCase()}`}
                className="block hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                role="menuitem"
                tabIndex={0}
              >
                {item.title}
              </a>
            </li>
          ))}
          <li role="none">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white w-full focus:ring-2 focus:ring-blue-400"
              aria-label="Book Appointment"
            >
              Appointment
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
