import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  TreesIcon as Lungs,
  Star,
  ChevronRight,
  MapPin,
  Calendar,
  Phone,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const DoctorCard = ({ doctor }) => {
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
