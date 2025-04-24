'use client';

import { useState, useRef } from 'react';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Search,
  Mail,
  Phone,
  PlusCircle,
  MinusCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Faq({ faqData, title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const accordionRefs = useRef([]);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqData = faqData.filter(
    item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const defaultIcons = [
    <MessageCircle key="message" className="text-purple-500" />,
    <Mail key="mail" className="text-emerald-500" />,
    <Phone key="phone" className="text-amber-500" />,
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 bg-gradient-to-b from-white to-blue-50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="flex items-center justify-center gap-x-4">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full">
            <HelpCircle className="w-6 h-6text-[#5FA2FF]" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        <p className="mt-3 text-gray-600 max-w-lg mx-auto">
          Find answers to the most common questions about our services
        </p>
      </motion.div>

      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
        />
      </div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {filteredFaqData?.length > 0 ? (
          filteredFaqData?.map((item, index) => (
            <motion.div
              key={index}
              ref={el => (accordionRefs.current[index] = el)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100/80">
                    {item?.icon || defaultIcons[index % defaultIcons.length]}
                  </div>
                  <h3
                    className={`text-md font-medium transition-colors duration-200 cursor-pointer ${
                      openIndex === index ? 'text-[#5FA2FF]' : 'text-gray-800'
                    }`}
                  >
                    {item?.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0 ml-4 cursor-pointer"
                >
                  {openIndex === index ? (
                    <MinusCircle className="w-6 h-6 text-[#5FA2FF]" />
                  ) : (
                    <PlusCircle className="w-6 h-6 text-[#5FA2FF]" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 pt-0 border-t border-gray-100"
                    >
                      <div className="prose text-sm max-w-none text-gray-700 pl-11">
                        <p>{item?.answer}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-4">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-gray-500">
              No results found. Try a different search term.
            </p>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10 text-center"
      >
        <div className="inline-flex items-center justify-center space-x-2 text-[#5FA2FF] bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-200">
          <MessageCircle className="w-4 h-4" />
          <a href="#contact" className="text-sm font-medium">
            Still have questions? Contact us at +91 6003803922
          </a>
        </div>
      </motion.div>
    </section>
  );
}
