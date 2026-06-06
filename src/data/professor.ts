export const professor = {
  name: "Dr. Chandra Shekhar",
  title: "Professor & In-Charge (Admissions)",
  institution: "BHARATIYA VIDYA BHAVAN, KG Marg, Copernicus Marg, New Delhi, Delhi 110001",
  university: "Guru Gobind Singh Indraprastha University, Delhi",
  department: "Bharatiya Vidya Bhavan · New Delhi",
  tagline:
    "Visionary academic leader in Big Data Analytics, Research Innovation, and Education Administration",
  roleBadge: "सलाहकार – शिक्षा एवं रोजगार",
  roleBadgeEn: "Advisor – Education & Employment",
  bio: `Dr. Chandra Shekhar is a distinguished Professor and In-Charge of Admissions at BHARATIYA VIDYA BHAVAN, KG Marg, Copernicus Marg, New Delhi, Delhi 110001, affiliated with Guru Gobind Singh Indraprastha University, Delhi. With over two decades of experience in higher education, he is a recognized leader in Big Data Analytics, Cybersecurity, Data Mining, and Academic Administration.

A recipient of the prestigious Shiksha Ratna Award (2023) and the National Recognition Award (2024) — both presented by the Hon'ble Speaker of the Delhi Vidhan Sabha — Dr. Shekhar is also a Career Advisor for Door Darshan Prasar Bharati, hosting the nationally televised morning show "Shiksha Avam Rojgar," where he guides students and professionals on education and employment opportunities across India.

His research spans Apache Hadoop frameworks, encrypted voting systems, Big Data security, and political data analytics. He is committed to mentoring the next generation of engineers and researchers, building strong academic-industry bridges, and transforming educational institutions through strategic leadership and innovation.`,
  pullQuote:
    "Dedicated to fostering student-centric learning, promoting research excellence, and empowering teams through integrity, innovation, and purposeful leadership.",
  email: "cshekharrajput@gmail.com",
  phone: "+91 8826252304",
  whatsappNumber: "918826252304",
  office: "Bharatiya Vidya Bhavan, New Delhi",
  address: "BHARATIYA VIDYA BHAVAN, KG Marg, Copernicus Marg, New Delhi, Delhi 110001",
  role: "Professor & In-Charge (Admissions)",
  social: {
    scholar: "https://scholar.google.com",
    researchgate: "https://www.researchgate.net",
    springer: "https://link.springer.com/article/10.1007/s41870-025-02405-3",
    jatit: "https://www.jatit.org/",
    youtube: "https://youtu.be/LDwy1OKb5Vw?si=EZ9zyn4rCMQn4xi4",
    whatsapp: "https://wa.me/918826252304",
    email: "mailto:cshekharrajput@gmail.com",
  },
  stats: [
    { label: "Years of Experience", value: 20 },
    { label: "Research Publications", value: 6 },
    { label: "National Awards", value: 2 },
  ],
  interests: [
    "Big Data Analytics",
    "Apache Hadoop",
    "Data Mining",
    "Sentiment Analysis",
    "Cybersecurity",
    "ECDSA & Digital Signatures",
    "Machine Learning",
    "Cloud Computing",
    "Educational Administration",
    "Career Counseling",
  ],
  qualifications: [
    "Ph.D. – Big Data Analytics (Doctoral Research)",
    "Ph.D. – Education (Doctoral Honorary)",
    "M.Tech – Computer Science Engineering",
    "M.Tech – Information Technology",
    "MCA – Master of Computer Applications",
    "M.Sc – Mathematics",
  ],
};

export type Publication = {
  id: string;
  title: string;
  venue: string;
  year: number;
  date?: string;
  volume?: string;
  type: "Journal" | "Conference" | "Book";
  url?: string;
  isbn?: string;
  tags: string[];
  featured?: boolean;
  isNew?: boolean;
};

export const publications: Publication[] = [
  {
    id: "p1",
    title:
      "Enhanced Sentiment Analysis and Data Mining of Political Leaders' Popularity on Social Media Platforms Using an Optimized Apache Hadoop Framework for Accurate Election Outcome Prediction",
    venue: "Journal of Theoretical and Applied Information Technology (JATIT)",
    volume: "Vol. 103, No. 11",
    year: 2025,
    date: "15 June 2025",
    type: "Journal",
    url: "https://www.jatit.org/volumes/Vol103No11/23Vol103No11.pdf",
    tags: ["Hadoop", "Data Mining", "Sentiment Analysis", "Election Prediction"],
    featured: true,
    isNew: true,
  },
  {
    id: "p2",
    title:
      "An Innovative and Secured Electronic Voting System Based on Elliptic Curved Signing Approach (ECDSA) and Digital Signatures",
    venue: "Springer Nature (Scopus Indexed)",
    year: 2025,
    date: "6 March 2025",
    type: "Journal",
    url: "https://link.springer.com/article/10.1007/s41870-025-02405-3",
    tags: ["Cybersecurity", "ECDSA", "Digital Signatures", "E-Voting"],
    featured: true,
    isNew: true,
  },
  {
    id: "p3",
    title:
      "A Robust and Secured Encryption Scheme for Big Data Security Based on Hadoop Distributed File System",
    venue: "European Chemical Bulletin (Scopus Indexed)",
    volume: "Volume 12, Special Issue 3",
    year: 2023,
    type: "Journal",
    url: "https://www.eurchembull.com/issue-content/a-robust-and-secured-encryption-scheme-for-big-data-security-based-on-hadoop-distributed-file-system-12746",
    isbn: "ISSN: 2063-5346",
    tags: ["Big Data", "Hadoop HDFS", "Encryption", "Security"],
  },
  {
    id: "p4",
    title: "Efficient Data Mining of Political Result Through the Apache Hadoop Structure",
    venue: "International Journal of Scientific Development and Research",
    volume: "Vol. 7, Issue 3",
    year: 2023,
    date: "March 2023",
    type: "Journal",
    tags: ["Data Mining", "Apache Hadoop", "Political Analytics"],
  },
  {
    id: "p5",
    title: "Defiance and Predicament: 4G Network",
    venue:
      "5th National Conference — Innovations in E-Commerce, Management, IT and Media",
    year: 2018,
    date: "February 21, 2018",
    type: "Conference",
    tags: ["4G Networks", "Telecommunications"],
  },
  {
    id: "p6",
    title: "Identification of Faces in Images Using MapReduce",
    venue: "Proceeding — Digital India: Recent Paradigm Shift in IT, Media & Management",
    year: 2016,
    date: "March 2016",
    type: "Conference",
    tags: ["MapReduce", "Face Recognition", "Digital India"],
  },
];

export type Award = {
  year: number | string;
  name: string;
  org: string;
  desc: string;
  presentedBy?: string;
  watchUrl?: string;
  kind?: "award" | "media";
};

export const awards: Award[] = [
  {
    year: 2024,
    name: "National Recognition Award – 2024",
    org: "National Recognition Forum · Field: Education",
    desc: "Presented by the Hon'ble Speaker of the Delhi Vidhan Sabha, Government of Delhi.",
    presentedBy: "Hon'ble Speaker of the Delhi Vidhan Sabha",
    kind: "award",
  },
  {
    year: 2023,
    name: "Shiksha Ratna Award – 2023",
    org: "National Recognition Forum · Field: Education",
    desc: "Presented by the Hon'ble Speaker of the Delhi Vidhan Sabha, Shri Ram Nivas, Government of Delhi.",
    presentedBy: "Hon'ble Speaker of the Delhi Vidhan Sabha",
    kind: "award",
  },
  {
    year: "Ongoing",
    name: "Career Advisor – Door Darshan Prasar Bharati",
    org: "DD Morning Live Show — Shiksha Avam Rojgar",
    desc: "Regular guest expert on the DD Morning Live Show 'Shiksha Avam Rojgar,' advising students and youth on education and employment opportunities. Nationally broadcast on Doordarshan (DD India).",
    watchUrl: "https://youtu.be/LDwy1OKb5Vw?si=EZ9zyn4rCMQn4xi4",
    kind: "media",
  },
];

export const mediaAppearances = [
  {
    outlet: "Doordarshan (DD India) — Prasar Bharati",
    show: "DD Morning Live Show — Shiksha Avam Rojgar",
    role: "Career Advisor",
    description:
      "Dr. Chandra Shekhar appears as a career and education advisor on this nationally televised morning show, guiding lakhs of viewers on higher education, career paths, and employment opportunities in India.",
    url: "https://youtu.be/LDwy1OKb5Vw?si=EZ9zyn4rCMQn4xi4",
  },
];