"use client"
import { Button } from "@/components/ui/button"

export default function CityCareHero() {
  return (
    <div className="container mx-auto px-4">
      {/* Navigation */}
      <nav className="flex items-center justify-between py-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            City <span className="text-[--blue-500]">Care</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className="text-[--blue-500]">
            Home
          </a>
          <a href="#" className="text-black">
            Features
          </a>
          <a href="#" className="text-black">
            Testimonials
          </a>
          <a href="#" className="text-black">
            Help
          </a>
        </div>

        <Button className="bg-[--blue-500] hover:bg-[--blue-600] text-white rounded-full px-6">Appointment</Button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row py-16 gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block">
            <span className="bg-[--blue-100] text-[--blue-500] px-4 py-2 rounded-full text-sm">
              Find a doctor for you!
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Take the best quality Treatment.</h2>

          <p className="text-gray-600 max-w-lg">
            Get expert care fast—our clinic offers same-day appointments, skilled doctors, and personalized treatment
            for your health and recovery.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="rounded-full border-4 border-[--blue-500] p-1 mb-4">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Doctor portrait"
              className="rounded-full w-64 h-64 object-cover"
            />
          </div>

          <h3 className="text-xl font-bold mt-2">Dr. Manish Bordoloi</h3>
          <p className="mt-1">
            <span className="text-[--blue-500]">Medical Specialty:</span> Medicine
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Why <span className="text-[--blue-500]">Choose</span> Us?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose us for expert care, short wait times, and a team that puts your health and comfort first.
        </p>
      </div>
    </div>
  )
}
