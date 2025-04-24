'use client';

import { useState } from 'react';
import {
  Heart,
  Brain,
  Ear,
  Microscope,
  Eye,
  Bone,
  TreesIcon as Lungs,
  Baby,
  Pill,
  Star,
  Search,
  ChevronRight,
  MapPin,
  Calendar,
  Phone,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { doctors } from '../utils/data';

const MedicalSpecialties = () => {
  const [selectedCategory, setSelectedCategory] = useState('specialty');
  const [selectedSpecialty, setSelectedSpecialty] = useState('medicine');
  const [searchQuery, setSearchQuery] = useState('');

  // Define categories with their icons
  const categories = {
    specialty: [
      { id: 'medicine', name: 'Medicine', icon: <Pill size={20} /> },
      { id: 'surgery', name: 'Surgery', icon: <Microscope size={20} /> },
      { id: 'obsGynae', name: 'Obs & Gynae', icon: <Baby size={20} /> },
      { id: 'ent', name: 'ENT', icon: <Ear size={20} /> },
      {
        id: 'dermatology',
        name: 'Dermatology',
        icon: <Microscope size={20} />,
      },
    ],
    superSpecialty: [
      { id: 'cardiology', name: 'Cardiology', icon: <Heart size={20} /> },
      { id: 'nephrology ', name: 'Nephrology', icon: <Brain size={20} /> },
      {
        id: 'gastroenterology',
        name: 'Gastroenterology',
        icon: <Eye size={20} />,
      },
      { id: 'urology', name: 'Urology', icon: <Bone size={20} /> },
    ],
  };

  // Filter doctors based on search query
  const filteredDoctors = searchQuery
    ? (doctors[selectedSpecialty] || []).filter(
        doctor =>
          doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : doctors[selectedSpecialty] || [];

  const handleSpecialtyChange = specialtyId => {
    setSelectedSpecialty(specialtyId);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our{' '}
            <span className="text-[#5FA2FF] font-bold">
              Medical Specialists
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find the right specialist for your needs. Our team of highly
            qualified doctors are here to provide you with the best medical care
            across various specialities.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search doctors by name or speciality..."
            className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs
          defaultValue="specialty"
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-8"
        >
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-100 rounded-md p-1 gap-x-4">
              <TabsTrigger
                value="specialty"
                className="text-base data-[state=active]:bg-blue-100 data-[state=active]:text-[#5FA2FF] py-2 px-3 rounded-md transition-colors border border-black
                data-[state=active]:border-b-1 data-[state=active]:border-[#5FA2FF] cursor-pointer"
              >
                Speciality
              </TabsTrigger>
              <TabsTrigger
                value="superSpecialty"
                className="text-base data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 py-2 px-3 rounded-md transition-colors 
                data-[state=active]:border-b-1 data-[state=active]:border-purple-700 cursor-pointer"
              >
                Super Speciality
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Speciality Content */}
          <TabsContent value="specialty" className="mt-6">
            <div className="flex flex-wrap justify-center gap-5 mb-10">
              {categories.specialty.map(specialty => (
                <button
                  key={specialty.id}
                  className={`flex items-center gap-2 px-8 justify-center py-2 rounded-lg border transition-all cursor-pointer ${
                    selectedSpecialty === specialty.id
                      ? 'bg-[#5FA2FF] text-white border-none shadow-md transform scale-105'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                  onClick={() => handleSpecialtyChange(specialty.id)}
                >
                  <span
                    className={
                      selectedSpecialty === specialty.id
                        ? 'text-white'
                        : 'text-blue-600'
                    }
                  >
                    {specialty.icon}
                  </span>
                  <span>{specialty.name}</span>
                </button>
              ))}
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map(doctor => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 text-lg">
                    No doctors found matching your search criteria.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Super Specialty Content */}
          <TabsContent value="superSpecialty" className="mt-6">
            <div className="flex flex-wrap justify-center gap-5 mb-10">
              {categories.superSpecialty.map(specialty => (
                <button
                  key={specialty.id}
                  className={`flex items-center gap-2 px-8 py-2 rounded-lg border transition-all cursor-pointer ${
                    selectedSpecialty === specialty.id
                      ? 'bg-[#5FA2FF] text-white border-none shadow-md transform scale-105'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                  onClick={() => handleSpecialtyChange(specialty.id)}
                >
                  <span
                    className={
                      selectedSpecialty === specialty.id
                        ? 'text-white'
                        : 'text-blue-600'
                    }
                  >
                    {specialty.icon}
                  </span>
                  <span>{specialty.name}</span>
                </button>
              ))}
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map(doctor => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 text-lg">
                    No doctors found matching your search criteria.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

// Doctor Card Component
const DoctorCard = ({ doctor }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-gray-200 hover:border-blue-200">
      <CardHeader className="p-0">
        <div className="relative h-48 bg-blue-50">
          <div className="absolute top-4 right-4 z-10">
            <Badge
              variant="secondary"
              className="bg-white text-blue-600 font-medium"
            >
              {doctor.experience}
            </Badge>
          </div>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <Avatar className="w-24 h-24 border-4 border-white shadow-md">
              <AvatarImage
                src={doctor.image || '/placeholder.svg'}
                alt={doctor.name}
              />
              <AvatarFallback className="bg-blue-100 text-blue-800">
                {doctor.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-16 pb-4 text-center">
        <CardTitle className="text-xl font-bold text-gray-800">
          {doctor.name}
        </CardTitle>
        <CardDescription className="text-blue-600 font-medium mt-1">
          {doctor.specialty}
        </CardDescription>

        <div className="flex items-center justify-center mt-3 space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.floor(doctor.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }
            />
          ))}
          <span className="text-sm font-medium text-gray-700 ml-1">
            {doctor.rating}
          </span>
          <span className="text-xs text-gray-500">
            ({doctor.reviews} reviews)
          </span>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-center gap-1">
            <Calendar size={14} className="text-blue-500" />
            <span>{doctor.availability}</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MapPin size={14} className="text-blue-500" />
            <span>{doctor.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0 pb-4">
        <Button
          variant="outline"
          className="flex-1 mr-2 border-blue-200 text-blue-600 hover:bg-blue-50"
        >
          <Phone size={16} className="mr-1" /> Call
        </Button>
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
          Book Appointment <ChevronRight size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MedicalSpecialties;
