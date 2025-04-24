import { useState } from 'react';
import {
  Heart,
  Brain,
  FileX2 as FileX,
  Radio,
  StethoscopeIcon,
} from 'lucide-react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState('dental');

  const services = [
    { id: 'Medicine', name: 'Medicine', icon: <Heart size={20} /> },
    { id: 'Surgery', name: 'Surgery', icon: <Brain size={20} /> },
    { id: 'Obs and Gynae', name: 'Obs and Gynae', icon: <StethoscopeIcon size={20} /> },
    { id: 'ENT', name: 'ENT', icon: <StethoscopeIcon size={20} /> },
    { id: 'Dermatology', name: 'Dermatology', icon: <FileX size={20} /> },
  ];

  const serviceContent = {
    dental: {
      title: 'Dental Care',
      image: '/api/placeholder/400/320',
      description:
        'Qitium direrem seleirit adipisci suscipit dignissimos, remaining essentially unchanged. It was popularised in the with the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    cardiology: {
      title: 'Cardiology',
      image: '/api/placeholder/400/320',
      description:
        'Our cardiology department offers comprehensive heart care services including diagnosis, treatment, and management of various heart conditions. Our team of expert cardiologists uses the latest technology to provide personalized care.',
    },
    neurology: {
      title: 'Neurology',
      image: '/api/placeholder/400/320',
      description:
        'The neurology department specializes in treating disorders of the nervous system. Our neurologists are experienced in diagnosing and treating conditions affecting the brain, spinal cord, and nerves.',
    },
    pulmonary: {
      title: 'Pulmonary',
      image: '/api/placeholder/400/320',
      description:
        'Our pulmonary specialists diagnose and treat lung conditions and breathing disorders. We offer pulmonary function testing, sleep studies, and comprehensive treatment plans for respiratory conditions.',
    },
    xray: {
      title: 'X-ray',
      image: '/api/placeholder/400/320',
      description:
        'Our advanced X-ray services provide detailed images for accurate diagnosis. We use state-of-the-art equipment with minimal radiation exposure to ensure patient safety while delivering precise results.',
    },
    radiology: {
      title: 'Radiology',
      image: '/api/placeholder/400/320',
      description:
        'The radiology department offers comprehensive imaging services including MRI, CT scans, ultrasound, and more. Our radiologists are experts in interpreting results to help guide appropriate treatment.',
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4 font-semibold">
            <span className="text-[#5FA2FF] font-bold">Our services</span> for your family
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pick the service from the list. Don't be worry! You will getting the
            best services from us. We have a super expert team to support our
            clients. Client happiness is our success.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map(service => (
            <button
              key={service.id}
              className={`flex items-center gap-2 px-5 py-2 rounded-md border transition-colors ${
                selectedService === service.id
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-200'
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              <span
                className={
                  selectedService === service.id
                    ? 'text-white'
                    : 'text-blue-500'
                }
              >
                {service.icon}
              </span>
              <span>{service.name}</span>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img
              src={serviceContent[selectedService].image}
              alt={serviceContent[selectedService].title}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">
              Welcome to our{' '}
              <span className="text-blue-500">
                {serviceContent[selectedService].title}
              </span>
            </h3>
            <p className="text-gray-600">
              {serviceContent[selectedService].description}
            </p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
