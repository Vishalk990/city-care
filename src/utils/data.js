import { Baby, Bone, Brain, Ear, Eye, Heart, Microscope, Pill } from "lucide-react";


export const NavItems = [{ title: "Service" }, { title: "FAQs" }, { title: "Help" },
]

export const doctors = {
  medicine: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Medicine",
      experience: "15+ years",
      rating: 4.9,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Mon, Wed, Fri",
      location: "Main Hospital, Floor 2",
      education: "MD, Internal Medicine",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Internal Medicine",
      experience: "12+ years",
      rating: 4.7,
      reviews: 98,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Tue, Thu, Sat",
      location: "East Wing, Floor 3",
      education: "MD, MBBS",
      phone: "+1 (555) 987-6543",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Family Medicine",
      experience: "8+ years",
      rating: 4.8,
      reviews: 87,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Mon, Tue, Thu",
      location: "West Wing, Floor 1",
      education: "MD, Family Practice",
      phone: "+1 (555) 456-7890",
    },
  ],
  surgery: [
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "General Surgery",
      experience: "20+ years",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Mon, Wed, Fri",
      location: "Surgical Wing, Floor 4",
      education: "MD, MS Surgery",
      phone: "+1 (555) 234-5678",
    },
    {
      id: 5,
      name: "Dr. Lisa Patel",
      specialty: "Laparoscopic Surgery",
      experience: "14+ years",
      rating: 4.8,
      reviews: 112,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Tue, Thu, Sat",
      location: "Surgical Wing, Floor 3",
      education: "MD, MS, FRCS",
      phone: "+1 (555) 876-5432",
    },
  ],
  obsGynae: [
    {
      id: 6,
      name: "Dr. Amanda Lee",
      specialty: "Obstetrics & Gynecology",
      experience: "16+ years",
      rating: 4.9,
      reviews: 143,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Mon, Wed, Fri",
      location: "Women's Health Center, Floor 2",
      education: "MD, OBGYN",
      phone: "+1 (555) 345-6789",
    },
  ],
  ent: [
    {
      id: 7,
      name: "Dr. Robert Kim",
      specialty: "ENT Specialist",
      experience: "18+ years",
      rating: 4.7,
      reviews: 118,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Tue, Thu, Sat",
      location: "Specialty Wing, Floor 3",
      education: "MD, ENT",
      phone: "+1 (555) 567-8901",
    },
  ],
  dermatology: [
    {
      id: 8,
      name: "Dr. Jessica Brown",
      specialty: "Dermatology",
      experience: "10+ years",
      rating: 4.8,
      reviews: 92,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Mon, Wed, Fri",
      location: "Dermatology Center, Floor 1",
      education: "MD, Dermatology",
      phone: "+1 (555) 678-9012",
    },
  ],
  cardiology: [
    {
      id: 9,
      name: "Dr. Thomas Wright",
      specialty: "Cardiology",
      experience: "22+ years",
      rating: 4.9,
      reviews: 187,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Mon, Wed, Fri",
      location: "Cardiac Center, Floor 5",
      education: "MD, DM Cardiology",
      phone: "+1 (555) 789-0123",
    },
    {
      id: 10,
      name: "Dr. Maria Garcia",
      specialty: "Interventional Cardiology",
      experience: "15+ years",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Tue, Thu, Sat",
      location: "Cardiac Center, Floor 4",
      education: "MD, DM, FACC",
      phone: "+1 (555) 890-1234",
    },
  ],
  neurology: [
    {
      id: 11,
      name: "Dr. David Thompson",
      specialty: "Neurology",
      experience: "19+ years",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Mon, Wed, Fri",
      location: "Neuroscience Center, Floor 3",
      education: "MD, DM Neurology",
      phone: "+1 (555) 901-2345",
    },
  ],
  ophthalmology: [
    {
      id: 12,
      name: "Dr. Susan Clark",
      specialty: "Ophthalmology",
      experience: "14+ years",
      rating: 4.8,
      reviews: 108,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Tue, Thu, Sat",
      location: "Eye Center, Floor 2",
      education: "MD, MS Ophthalmology",
      phone: "+1 (555) 012-3456",
    },
  ],
  orthopedics: [
    {
      id: 13,
      name: "Dr. Richard Martinez",
      specialty: "Orthopedic Surgery",
      experience: "20+ years",
      rating: 4.9,
      reviews: 167,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Mon, Wed, Fri",
      location: "Orthopedic Center, Floor 3",
      education: "MD, MS Orthopedics",
      phone: "+1 (555) 123-4567",
    },
  ],
  pulmonology: [
    {
      id: 14,
      name: "Dr. Jennifer Adams",
      specialty: "Pulmonology",
      experience: "16+ years",
      rating: 4.8,
      reviews: 132,
      image: "/placeholder.svg?height=300&width=300",
      availability: "Tue, Thu, Sat",
      location: "Respiratory Center, Floor 4",
      education: "MD, DM Pulmonology",
      phone: "+1 (555) 234-5678",
    },
  ],
};

export const faqData = [
  {
    id: 1,
    question: "What services does City Care medical center offer?",
    answer: "City Care offers a comprehensive range of medical services including primary care, specialized treatments, diagnostic services, preventive care, and emergency services. Our departments include cardiology, neurology, dental care, pulmonary medicine, radiology, and more. We provide personalized healthcare solutions for patients of all ages."
  },
  {
    id: 2,
    question: "How can I schedule an appointment?",
    answer: "You can schedule an appointment through multiple channels: by calling our helpline at +91-123-456-7890, using our online appointment system on our website, through our mobile app, or by visiting our reception desk in person. We recommend booking appointments in advance, though we accommodate emergency cases immediately."
  },
  {
    id: 3,
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans including national and regional providers. We also work with government health programs and international insurance providers. Our administrative staff can verify your coverage prior to your appointment and assist with any insurance-related inquiries you may have."
  },
  {
    id: 4,
    question: "Are telemedicine consultations available?",
    answer: "Yes, we offer telemedicine consultations for eligible patients. Virtual appointments are available for follow-up visits, minor consultations, prescription refills, and some types of specialized care. Contact our appointment desk to determine if your medical need is suitable for a telemedicine consultation."
  },
  {
    id: 5,
    question: "What should I bring to my first appointment?",
    answer: "For your first visit, please bring your photo ID, insurance card, a list of current medications (including dosages), your medical history records if available, any recent test results or imaging reports, and a list of questions you may have for the doctor. Arriving 15 minutes early will help complete any necessary paperwork."
  },
  {
    id: 6,
    question: "What are your operating hours?",
    answer: "Our regular operating hours are Monday through Friday from 8:00 AM to 8:00 PM, Saturday from 9:00 AM to 6:00 PM, and Sunday from 10:00 AM to 4:00 PM. Our emergency services are available 24/7. Specific departments may have varying hours, which can be found on our website or by calling our information desk."
  },
  {
    id: 7,
    question: "Do you provide emergency services?",
    answer: "Yes, our emergency department is open 24 hours a day, 7 days a week. We have specialists on call to handle various emergency situations. For life-threatening emergencies, we recommend calling emergency services (ambulance) to ensure rapid transport and pre-arrival care."
  },
  {
    id: 8,
    question: "How can I access my medical records?",
    answer: "Patients can access their medical records through our secure patient portal, which is available on our website and mobile app. You can view test results, appointment history, treatment plans, and more. For full medical record copies or records not available online, please submit a request through our medical records department."
  }
];
