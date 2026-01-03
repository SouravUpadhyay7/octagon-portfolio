export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  doi: string;
}

export interface Book {
  id: string;
  title: string;
  publisher: string;
  year: number;
  coverImage: string;
  purchaseLink: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  current: boolean;
}

export interface Supervision {
  id: string;
  category: "phd" | "mtech" | "btech";
  title: string;
  student: string;
  year: string;
  status: "completed" | "ongoing";
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  category: "award" | "grant" | "talk" | "recognition" | "collaboration";
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

export interface SiteContent {
  about: string;
  profileImage: string;
  researchInterests: string[];
  publications: Publication[];
  books: Book[];
  experiences: Experience[];
  supervisions: Supervision[];
  achievements: Achievement[];
  gallery: GalleryItem[];
  contact: {
    email: string;
    linkedin: string;
    googleScholar: string;
    address: string;
    twitter?: string;
    github?: string;
    youtube?: string;
    researchGate?: string;
  };
}

export const defaultContent: SiteContent = {
  about: `I am Prof. (Dr.) Jyoti Sekhar Banerjee (He/Him). I hold a B.Tech, M.E., Ph.D. (Engg.), Post-Doctorate (UK), and a PG Diploma in IPR & TBM. I am a Chartered Engineer (India) and a Fellow of IETE.

Currently, I am working as Associate Professor and Head of the Department, Department of CSE (AI & ML), and Professor-in-Charge, R & D and Consultancy Cell. I also serve as the Nodal Officer, IPR Cell at Techno Bengal Institute of Technology (formerly known as Bengal Institute of Technology), a unit of the Techno India Group, Kolkata, India. The institute is NAAC accredited.`,
  
  profileImage: "",
  
  researchInterests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Cognitive Computing",
    "Brain Informatics",
    "Data Science",
    "Quantum Computing",
    "Generative AI",
    "Cybersecurity",
    "Software Engineering",
    "Mathematics & Modeling",
    "Embedded Systems",


  ],
  
  publications: [
    {
      id: "pub-1",
      title: "Deep Learning Approaches for Cognitive Computing: A Comprehensive Survey",
      journal: "IEEE Transactions on Neural Networks and Learning Systems",
      year: 2024,
      doi: "10.1109/TNNLS.2024.XXXXX",
    },
    {
      id: "pub-2",
      title: "Brain-Computer Interface Systems Using Machine Learning: Current Trends and Future Directions",
      journal: "Nature Communications",
      year: 2023,
      doi: "10.1038/s41467-023-XXXXX",
    },
    {
      id: "pub-3",
      title: "Intelligent Computing Paradigms for Healthcare: An AI-Driven Approach",
      journal: "Springer Journal of Ambient Intelligence and Humanized Computing",
      year: 2023,
      doi: "10.1007/s12652-023-XXXXX",
    },
    {
      id: "pub-4",
      title: "Cognitive Load Assessment Using EEG and Machine Learning Techniques",
      journal: "Expert Systems with Applications",
      year: 2022,
      doi: "10.1016/j.eswa.2022.XXXXX",
    },
    {
      id: "pub-5",
      title: "A Novel Framework for Brain Informatics Based on Deep Neural Networks",
      journal: "Neurocomputing",
      year: 2022,
      doi: "10.1016/j.neucom.2022.XXXXX",
    },
  ],

  books: [
    {
      id: "book-1",
      title: "Artificial Intelligence: A Modern Approach to Cognitive Computing",
      publisher: "Springer Nature",
      year: 2024,
      coverImage: "/placeholder.svg",
      purchaseLink: "https://amazon.com",
    },
    {
      id: "book-2",
      title: "Machine Learning for Brain Informatics",
      publisher: "CRC Press",
      year: 2023,
      coverImage: "/placeholder.svg",
      purchaseLink: "https://amazon.com",
    },
    {
      id: "book-3",
      title: "Deep Learning in Healthcare: Principles and Applications",
      publisher: "Academic Press",
      year: 2022,
      coverImage: "/placeholder.svg",
      purchaseLink: "https://amazon.com",
    },
  ],
  
  experiences: [
    {
      id: "exp-1",
      title: "Adjunct Research Faculty",
      organization: "Lincoln University College",
      location: "Malaysia",
      period: "2025 – Present",
      current: true,
    },
    {
      id: "exp-2",
      title: "Remote Researcher",
      organization: "ITHACA Lab",
      location: "Greece",
      period: "2024 – Present",
      current: true,
    },
    {
      id: "exp-3",
      title: "HoD, CSE (AI & ML)",
      organization: "Bengal Institute of Technology",
      location: "India",
      period: "2005 – Present",
      current: true,
    },
    {
      id: "exp-4",
      title: "Research Fellow",
      organization: "Nottingham Trent University",
      location: "UK",
      period: "2024",
      current: false,
    },
    {
      id: "exp-5",
      title: "Postdoctoral Researcher",
      organization: "Nottingham Trent University",
      location: "UK",
      period: "2022",
      current: false,
    },
  ],
  
  supervisions: [
    {
      id: "sup-1",
      category: "phd",
      title: "AI-Based Early Detection of Neurological Disorders",
      student: "Research Scholar",
      year: "2023-Present",
      status: "ongoing",
    },
    {
      id: "sup-2",
      category: "mtech",
      title: "Machine Learning for Medical Image Analysis",
      student: "M.Tech Student",
      year: "2024",
      status: "completed",
    },
    {
      id: "sup-3",
      category: "mtech",
      title: "Deep Learning Based Speech Recognition System",
      student: "M.Tech Student",
      year: "2023",
      status: "completed",
    },
    {
      id: "sup-4",
      category: "btech",
      title: "Intelligent Chatbot Development Using NLP",
      student: "B.Tech Team",
      year: "2024",
      status: "completed",
    },
    {
      id: "sup-5",
      category: "btech",
      title: "Smart Health Monitoring System Using IoT and ML",
      student: "B.Tech Team",
      year: "2024",
      status: "completed",
    },
  ],
  
  achievements: [
    {
      id: "ach-1",
      title: "Best Research Paper Award",
      description: "Received for outstanding research contribution in AI and Cognitive Computing at International Conference",
      year: "2024",
      category: "award",
    },
    {
      id: "ach-2",
      title: "International Research Collaboration Grant",
      description: "Awarded research grant for collaborative project with Nottingham Trent University, UK",
      year: "2023",
      category: "grant",
    },
    {
      id: "ach-3",
      title: "Keynote Speaker - AI Summit 2024",
      description: "Invited as keynote speaker at International AI Summit on Future of Cognitive Computing",
      year: "2024",
      category: "talk",
    },
    {
      id: "ach-4",
      title: "Academic Excellence Award",
      description: "Recognized for excellence in teaching and research at institutional level",
      year: "2023",
      category: "recognition",
    },
    {
      id: "ach-5",
      title: "Indo-UK Research Partnership",
      description: "Established research collaboration with multiple UK universities for joint research programs",
      year: "2022",
      category: "collaboration",
    },
  ],
  
  gallery: [
    {
      id: "gal-1",
      title: "International AI Conference 2024",
      description: "Presenting research findings at the annual AI conference",
      image: "",
      date: "2024",
    },
    {
      id: "gal-2",
      title: "Research Workshop at NTU",
      description: "Conducting workshop on Machine Learning at Nottingham Trent University",
      image: "",
      date: "2024",
    },
    {
      id: "gal-3",
      title: "Department Seminar",
      description: "Annual department seminar on emerging technologies in AI",
      image: "",
      date: "2023",
    },
    {
      id: "gal-4",
      title: "Keynote Speech",
      description: "Delivering keynote address at International AI Summit",
      image: "",
      date: "2024",
    },
    {
      id: "gal-5",
      title: "Graduation Ceremony",
      description: "Celebrating academic achievements with graduating students",
      image: "",
      date: "2024",
    },
    {
      id: "gal-6",
      title: "Research Lab Collaboration",
      description: "Working with research team on AI and cognitive computing projects",
      image: "",
      date: "2023",
    },
  ],
  
  contact: {
    email: "jyotisekhar.banerjee@bitcollege.in",
    linkedin: "https://www.linkedin.com/in/dr-jyoti-sekhar-banerjee-6b052718b?originalSubdomain=in",
    googleScholar: "https://scholar.google.com/citations?user=XXXXX",
    address: "Department of CSE (AI & ML), Techno Bengal Institute of Technology, Kolkata, West Bengal, India",
    twitter: "https://twitter.com/drjsbanerjee",
    github: "https://github.com/drjsbanerjee",
  },
};

export function getContent(): SiteContent {
  const stored = localStorage.getItem("siteContent");
  if (stored) {
    return JSON.parse(stored);
  }
  return defaultContent;
}

export function saveContent(content: SiteContent): void {
  localStorage.setItem("siteContent", JSON.stringify(content));
}
