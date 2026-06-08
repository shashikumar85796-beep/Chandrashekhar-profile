export const professor = {
  name: "Dr. Chandra Shekhar",
  title: "Professor & In-Charge (Admissions)",
  institution: "BVBC, GGSIP University, Delhi",
  university: "Guru Gobind Singh Indraprastha University, Delhi",
  department: "Bharatiya Vidya Bhavan · New Delhi",
  tagline:
    "Professor | Academic Administrator | Career Mentor | Motivational Speaker | Strategic Education Advisor",
  roleBadge: "सलाहकार – शिक्षा एवं रोजगार",
  roleBadgeEn: "Advisor – Education & Employment",
  bio: `Prof. Dr. Chandra Shekhar is a distinguished academician, educational strategist, researcher, and administrator currently serving as Professor & In-Charge Admissions at BVBC, GGSIP University, Delhi. With extensive experience in higher education leadership, institutional development, academic administration, and student mentorship, he has established himself as a respected personality in the field of education and career guidance across India.

He is widely recognized as a Career Mentor, Motivational Speaker, and Strategy Maker for universities and colleges, providing academic and administrative guidance to more than 50 colleges and universities throughout the country. More than 10,000 students have benefited from his academic counselling, career mentoring, and strategic educational guidance, helping them achieve success in their professional journeys.

He is the Founder of GuidanceShiksha.com, a dedicated educational guidance platform established to support students and aspirants in selecting the right academic path and building a successful career journey through proper counselling and mentorship. He has also served as the Former Director of DITM College, affiliated with GGSIP University, Delhi, where he played an important role in institutional growth, academic excellence, and student development.

As an active researcher and academic contributor, he has published more than 20 research papers in reputed National and International Journals in the fields of education, management, career development, and academic administration. He has actively participated in 18+ National and International Conferences, Seminars, Workshops, and Academic Programs, sharing his expertise and research insights with the academic community.

In addition to his academic and administrative responsibilities, he is associated as an Advisor – Shiksha & Rozgar with DD National and DD Morning Show, Prasar Bharati, contributing towards educational awareness, career counselling, and youth empowerment initiatives. With a visionary approach towards educational transformation and student success, Prof. Dr. Chandra Shekhar continues to inspire institutions, educators, and students through leadership, strategic planning, and dedicated service to society.`,
  pullQuote:
    "With a visionary approach towards educational transformation and student success, I continue to inspire institutions, educators, and students through leadership, strategic planning, academic excellence, and dedicated service to society.",
  email: "cshekharrajput@gmail.com",
  phone: "+91 8826252304",
  whatsappNumber: "918826252304",
  office: "BVBC, GGSIP University, Delhi",
  address: "BVBC, GGSIP University, Delhi",
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
    { label: "Research Publications", value: 20 },
    { label: "Students Mentored", value: 10000 },
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
    year: "Past",
    name: "Shiksha Samman Award",
    org: "National Recognition Forum · Field: Education",
    desc: "Awarded in recognition of outstanding contribution to the field of education, leadership, and academic service to society.",
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