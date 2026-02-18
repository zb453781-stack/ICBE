// Mock CMS Data - This structure mirrors what would come from Sanity CMS
// In production, this would be fetched from Sanity API

export interface ImpactStat {
  value: number;
  label: string;
  suffix?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  impactFocus: string;
  slug: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
  location: string;
  caption: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  mapUrl: string;
}

// Homepage Data
export const homepageData = {
  hero: {
    title: "Building Resilient Communities for a Better Tomorrow",
    subtitle: "Empowering vulnerable populations through climate resilience, gender equality, and community-driven development across Pakistan.",
    ctaText: "Discover Our Impact",
    ctaLink: "/about"
  },
  impactStats: [
    { value: 50000, label: "Lives Impacted", suffix: "+" },
    { value: 150, label: "Communities Served", suffix: "+" },
    { value: 25, label: "Active Programs", suffix: "" },
    { value: 10, label: "Years of Service", suffix: "+" }
  ] as ImpactStat[]
};

// About Page Data
export const aboutData = {
  introduction: "The International Center for Building Empowerment (ICBE) is a humanitarian organization dedicated to creating sustainable change in vulnerable communities across Pakistan. We believe in the power of local solutions, community participation, and integrated approaches to development.",
  
  vision: "A world where every community, regardless of circumstance, has the resilience, resources, and agency to thrive in the face of climate change, social inequality, and economic challenges.",
  
  mission: "To empower marginalized communities through innovative, community-led programs that address climate resilience, gender-based violence prevention, youth leadership, mental health, and sustainable development.",
  
  objectives: [
    "Strengthen climate resilience in vulnerable communities through adaptation strategies and disaster risk reduction",
    "Prevent and respond to gender-based violence through awareness, advocacy, and survivor support services",
    "Develop youth leadership and civic engagement programs that create positive social change",
    "Provide accessible mental health and psychosocial support to trauma-affected populations",
    "Establish mobile health and education services in underserved rural and remote areas"
  ],
  
  coreValues: [
    {
      title: "Community-Centered",
      description: "We believe communities hold the solutions to their own challenges and prioritize local participation in all our programs."
    },
    {
      title: "Gender Justice",
      description: "We are committed to addressing systemic inequalities and promoting women's rights and empowerment."
    },
    {
      title: "Sustainability",
      description: "Our programs are designed for long-term impact, ensuring communities can continue progress independently."
    },
    {
      title: "Dignity & Respect",
      description: "We treat every individual with dignity, respect their agency, and honor their lived experiences."
    },
    {
      title: "Accountability",
      description: "We maintain transparency with communities, partners, and donors, and hold ourselves to the highest ethical standards."
    },
    {
      title: "Innovation",
      description: "We embrace creative, evidence-based approaches that adapt to the evolving needs of the communities we serve."
    }
  ],
  
  timeline: [
    {
      year: "2014",
      title: "Foundation Established",
      description: "ICBE founded with a vision to serve marginalized communities"
    },
    {
      year: "2017",
      title: "Climate Resilience Programs Launch",
      description: "Initiated community-based adaptation projects in flood-prone regions"
    },
    {
      year: "2019",
      title: "GBV Prevention Network",
      description: "Established comprehensive gender-based violence prevention and response services"
    },
    {
      year: "2021",
      title: "Mobile Health Initiative",
      description: "Launched mobile health units serving remote rural communities"
    },
    {
      year: "2024",
      title: "Youth Leadership Academy",
      description: "Expanded youth empowerment programs across 15 districts"
    },
    {
      year: "2026",
      title: "Future Vision",
      description: "Scaling impact to reach 100,000 beneficiaries annually"
    }
  ]
};

// Services Data
export const servicesData: Service[] = [
  {
    id: "climate-resilience",
    title: "Climate Resilience",
    description: "Building adaptive capacity in communities facing climate change impacts through sustainable agriculture, water management, disaster preparedness, and early warning systems.",
    icon: "CloudRain",
    impactFocus: "Reducing climate vulnerability and enhancing community resilience to environmental shocks",
    slug: "climate-resilience"
  },
  {
    id: "gbv-prevention",
    title: "GBV Prevention & Response",
    description: "Comprehensive programs to prevent gender-based violence through community awareness, legal support, safe spaces, counseling services, and survivor empowerment initiatives.",
    icon: "Shield",
    impactFocus: "Creating safe environments and supporting survivors of gender-based violence",
    slug: "gbv-prevention"
  },
  {
    id: "youth-leadership",
    title: "Youth Leadership Development",
    description: "Empowering young people through skills training, civic engagement, leadership development, and entrepreneurship programs that create positive social change.",
    icon: "Users",
    impactFocus: "Cultivating the next generation of community leaders and change-makers",
    slug: "youth-leadership"
  },
  {
    id: "mental-health",
    title: "Mental Health & Psychosocial Support",
    description: "Providing accessible mental health services, trauma counseling, community support groups, and psychosocial interventions for conflict and disaster-affected populations.",
    icon: "Heart",
    impactFocus: "Promoting mental wellbeing and healing in trauma-affected communities",
    slug: "mental-health"
  },
  {
    id: "mobile-outreach",
    title: "Mobile Health & Education Outreach",
    description: "Bringing essential healthcare, education, and social services directly to remote and underserved communities through mobile units and community-based workers.",
    icon: "Truck",
    impactFocus: "Ensuring equitable access to services in hard-to-reach areas",
    slug: "mobile-outreach"
  }
];

// Gallery Data (would be populated with Cloudinary URLs in production)
export const galleryData: GalleryImage[] = [
  {
    id: "1",
    title: "Community Climate Adaptation Workshop",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    category: "Climate Resilience",
    date: "2024-01-15",
    location: "Sindh Province",
    caption: "Local farmers learning sustainable agriculture practices to adapt to changing climate patterns"
  },
  {
    id: "2",
    title: "Women's Empowerment Session",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    category: "GBV Prevention",
    date: "2024-02-20",
    location: "Khyber Pakhtunkhwa",
    caption: "Women's group discussing rights and resources in a safe space"
  },
  {
    id: "3",
    title: "Youth Leadership Training",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    category: "Youth Programs",
    date: "2024-03-10",
    location: "Islamabad",
    caption: "Young leaders participating in civic engagement and community development training"
  },
  {
    id: "4",
    title: "Mental Health Awareness Campaign",
    imageUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=600&fit=crop",
    category: "Mental Health",
    date: "2024-01-28",
    location: "Punjab",
    caption: "Community counselor providing psychosocial support services"
  },
  {
    id: "5",
    title: "Mobile Health Unit",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    category: "Mobile Outreach",
    date: "2024-02-15",
    location: "Balochistan",
    caption: "Healthcare workers providing medical services in remote villages"
  },
  {
    id: "6",
    title: "Disaster Preparedness Training",
    imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
    category: "Climate Resilience",
    date: "2024-03-05",
    location: "Sindh Province",
    caption: "Community members learning flood response and early warning systems"
  },
  {
    id: "7",
    title: "Girls Education Initiative",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    category: "Youth Programs",
    date: "2024-01-20",
    location: "Rural Punjab",
    caption: "Mobile education unit bringing learning opportunities to girls in underserved areas"
  },
  {
    id: "8",
    title: "Water Management Project",
    imageUrl: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=800&h=600&fit=crop",
    category: "Climate Resilience",
    date: "2024-02-10",
    location: "Thar Desert",
    caption: "Community-led water conservation and management initiatives"
  },
  {
    id: "9",
    title: "Community Support Groups",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    category: "Mental Health",
    date: "2024-03-01",
    location: "Khyber Pakhtunkhwa",
    caption: "Peer support group meeting for trauma survivors"
  }
];

// Contact Information
export const contactInfo: ContactInfo = {
  address: "House No. 123, Street 45, F-7 Markaz, Islamabad, Pakistan",
  email: "info@icbe.org.pk",
  phone: "+92 51 1234567",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.689434344896!2d73.04754631521095!3d33.71794968070403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
};
