// data/awards.ts
import type { AwardItem } from "@/lib/types";

export const awards: AwardItem[] = [
  // ===== 2018 =====
  {
    slug: "vut-ams-science-fair-2018-first-place",
    title: "1st Place – VUT / AMS Science Fair",
    short: "3D-printed and programmed a quadruped robot.",
    description:
      "Designed, 3D printed, and programmed a quadruped robot capable of walking, demonstrating early proficiency in robotics, mechanical design, and embedded systems.",
    tags: ["Robotics", "3D Printing"],
    date: "2018-05",
    org: "Vaal University of Technology / Association of Muslim Schools",
  },
  {
    slug: "grade-8-class-leader",
    title: "Grade 8 Class Leader",
    short: "Leadership and classroom support role.",
    description:
      "Assisted teachers with classroom administration, behaviour management, and peer support responsibilities.",
    tags: ["Leadership"],
    date: "2018-01",
    org: "Auckland Park Academy of Excellence",
  },
  {
    slug: "visual-arts-drama-grade-8",
    title: "Visual Arts & Drama Award (Grade 8)",
    short: "Recognised for creativity and performance.",
    description:
      "Awarded for outstanding talent and promise in visual arts and dramatic performance.",
    tags: ["Arts"],
    date: "2018-12",
    org: "Auckland Park Academy of Excellence",
  },
  {
    slug: "deadliest-debater-grade-8",
    title: "Deadliest Debater (Grade 8)",
    short: "Top debater in the grade.",
    description:
      "Recognised as the strongest debater in Grade 8 for argumentation, delivery, and competitive performance.",
    tags: ["Debating", "Leadership"],
    date: "2018-12",
    org: "Auckland Park Academy of Excellence",
  },
  {
    slug: "good-fellowship-grade-8",
    title: "Good Fellowship Award (Grade 8)",
    short: "Recognised for care and compassion.",
    description:
      "Awarded for demonstrating empathy, responsibility, and positive contribution to the school community.",
    tags: ["Community"],
    date: "2018-12",
    org: "Auckland Park Academy of Excellence",
  },

  // ===== 2019 =====
  {
    slug: "eskom-expo-gold-2019",
    title: "Gold Award – Eskom Expo Science Fair",
    short: "Built a fully functional robot.",
    description:
      "Designed, 3D printed, and programmed a complete robotic system integrating mechanical, electronic, and software components.",
    tags: ["Robotics", "Engineering"],
    date: "2019-07",
    org: "Eskom Holdings SOC Ltd",
  },
  {
    slug: "vut-cii-science-fair-2019-first-place",
    title: "1st Place – VUT / CII Science Fair",
    short: "First place for advanced robotics project.",
    description:
      "Developed a full robotics solution from concept to execution, earning first place at a national-level science fair.",
    tags: ["Robotics"],
    date: "2019-07",
    org: "Vaal University of Technology",
  },
  {
    slug: "gauteng-north-second-best-2019",
    title: "Overall 2nd Best Project – Gauteng North Science Fair",
    short: "Top-ranked robotics project among 527 entries.",
    description:
      "Designed a cave-traversing robot for exploration scenarios, achieving second overall among 527 participants.",
    tags: ["Robotics", "Engineering"],
    date: "2019-08",
    org: "Eskom Holdings SOC Ltd",
    featured: true,
  },
  {
    slug: "gauteng-north-gold-2019",
    title: "Gold Award – Gauteng North Science Fair",
    short: "Gold award for cave exploration robot.",
    description:
      "Recognised with a Gold Award for a robot capable of navigating complex subterranean terrain.",
    tags: ["Robotics"],
    date: "2019-08",
    org: "Eskom Holdings SOC Ltd",
  },
  {
    slug: "grottobot-first-place-2019",
    title: "1st Place – Grottobot Category",
    short: "Best cave-exploration robotics project.",
    description:
      "Awarded first place in the Grottobot category for a robot designed for cave traversal and data collection.",
    tags: ["Robotics"],
    date: "2019-08",
    org: "Eskom Holdings SOC Ltd",
  },
  {
    slug: "north-gauteng-3d-printing-2019",
    title: "1st Place – 3D Printing Competition",
    short: "Won speed and accuracy-based challenge.",
    description:
      "Programmed slicing and printer workflows to rapidly and accurately manufacture a judged object.",
    tags: ["3D Printing"],
    date: "2019-08",
    org: "Eskom Holdings SOC Ltd",
  },
  {
    slug: "tadhack-rising-star-2019",
    title: "Rising Star Award – TADHack",
    short: "Recognised at a global hackathon.",
    description:
      "Awarded Rising Star at a 72-hour global hackathon for innovation and technical execution.",
    tags: ["Hackathon"],
    date: "2019-10",
    org: "TADHack & MTN",
  },
  {
    slug: "principals-award-2019",
    title: "Principal’s Award – APAX",
    short: "Recognised for bringing honour to the school.",
    description:
      "Awarded for exceptional academic, leadership, and co-curricular achievements throughout the year.",
    tags: ["Leadership"],
    date: "2019-11",
    org: "Auckland Park Academy of Excellence",
  },
  {
    slug: "sayess-gold-2019",
    title: "Gold Award – SAYESS",
    short: "Selected to represent South Africa internationally.",
    description:
      "Developed Scietmeer, a mobile science laboratory robot selected to represent South Africa at IFEST Tunisia.",
    tags: ["Robotics", "International"],
    date: "2019-11",
    org: "South African Youth Engineering and Science Symposium",
  },

  // ===== 2020 =====
  {
    slug: "ifest-tunisia-silver-2020",
    title: "Silver Award – IFEST Tunisia",
    short: "International recognition for Scietmeer.",
    description:
      "Represented South Africa internationally and earned a Silver Award at IFEST Tunisia.",
    tags: ["International", "Robotics"],
    date: "2020-03",
    org: "International Festival of Engineering, Science & Technology",
  },
  {
    slug: "eskom-expo-gold-2020",
    title: "Gold Award – Eskom Expo Science Fair",
    short: "Agribot selected for international representation.",
    description:
      "Developed Agribot, a mobile agricultural science platform selected to represent South Africa internationally.",
    tags: ["Robotics", "Agriculture"],
    date: "2020-08",
    org: "Eskom Holdings SOC Ltd",
  },
  {
    slug: "tadhack-internship-2020",
    title: "TADHack Internship Winner",
    short: "Awarded a year-long software internship.",
    description:
      "Selected for a year-long internship at Contactable, working on identification and software systems.",
    tags: ["Software", "Internship"],
    date: "2020-10",
    org: "TADHack & Contactable",
  },
  {
    slug: "community-service-1000-face-shields",
    title: "Full Colours – Community Service",
    short: "3D printed 1,000+ face shields during COVID-19.",
    description:
      "Designed and 3D printed over 1,000 face shields distributed to medical professionals through the Salaam Foundation.",
    tags: ["Community", "Healthcare"],
    date: "2020-12",
    org: "Reddam House Bedfordview",
    featured: true,
  },

  // ===== 2021 =====
  {
    slug: "taiwan-science-fair-silver-2021",
    title: "Silver Award – Taiwan International Science Fair",
    short: "International award for Agribot.",
    description:
      "Developed Agribot, a mobile science laboratory for sustainable agriculture, earning a Silver Award.",
    tags: ["International", "Robotics"],
    date: "2021-02",
    org: "Taiwan International Science Fair",
  },
  {
    slug: "top-15-young-geeks-2021",
    title: "Top 15 Young Geeks South Africa",
    short: "Named among the Top 15 Young Geeks nationally.",
    description:
      "Recognised by industry leaders for impact in technology, innovation, and the digital economy.",
    tags: ["Recognition"],
    date: "2021-06",
    org: "Geekulcha",
    featured: true,
  },
  {
    slug: "tadhack-winner-2021",
    title: "Winner – TADHack (South Africa)",
    short: "Youngest winner nationally and globally.",
    description:
      "Developed Maftuha, an EdTech platform integrating facial recognition and sentiment analysis.",
    tags: ["EdTech", "AI"],
    date: "2021-09",
    org: "TADHack",
  },

  // ===== 2023 =====
  {
    slug: "ewb-top-10-project-2023",
    title: "Top 10 Project – Engineers Without Borders",
    short: "Sustainable housing using recycled materials.",
    description:
      "Designed affordable housing for migrants using recycled plastics and bottles, selected among the top projects from ~1,400 students.",
    tags: ["Sustainability", "Engineering"],
    date: "2023-07",
    org: "University of the Witwatersrand",
  },
  {
    slug: "ieee-entrepreneurship-prospectors-2023",
    title: "1st Place – IEEE Entrepreneurship Prospectors Workshop",
    short: "Won 1st place at Wits Innovation Centre.",
    description:
      "Built and presented a venture concept focused on innovation and entrepreneurship alongside Jesse Thornburg.",
    tags: ["Startup", "Entrepreneurship"],
    date: "2023-07",
    org: "IEEE Entrepreneurship / Wits Innovation Centre",
    links: [
      {
        label: "IEEE article",
        href: "https://entrepreneurship.ieee.org/2023_07_21_ieee-entrepreneurship-hosts-successful-workshop-at-wits-university-south-africa/",
      },
    ],
  },
  {
    slug: "best-coder-adaptit-2023",
    title: "Best Coder – Adapt IT Hackathon",
    short: "ML-based pothole detection system.",
    description:
      "Developed an embedded ML system to detect potholes and predict road decay, earning Best Coder recognition.",
    tags: ["Machine Learning", "Embedded"],
    date: "2023-08",
    org: "Adapt IT / University of the Witwatersrand",
  },

  // ===== 2024 =====
  {
    slug: "student-entrepreneurship-2024",
    title: "Certificate of Student Entrepreneurship",
    short: "Recognised for Gotcha edtech platform.",
    description:
      "Awarded for entrepreneurial leadership and development of Gotcha, an education technology platform.",
    tags: ["EdTech", "Entrepreneurship"],
    date: "2024-04",
    org: "Wits Innovation Centre",
  },
  {
    slug: "allan-gray-gotchaexam-funding",
    title: "R100,000 Startup Funding – GotchaExam",
    short: "Secured funding at AGOF Jamboree.",
    description:
      "Awarded R100,000 in startup funding after pitching GotchaExam to an expert judging panel.",
    tags: ["Startup", "Funding"],
    date: "2024-07",
    org: "Allan Gray Orbis Foundation",
    featured: true,
  },
  {
    slug: "chpc-national-conference-2024",
    title: "CHPC National Conference Selection",
    short: "Represented Wits in HPC systems competition.",
    description:
      "Selected to represent Wits at the CHPC National Conference after winning a competitive HPC challenge.",
    tags: ["HPC"],
    date: "2024-08",
    org: "Centre for High Performance Computing",
  },

  // ===== 2025 =====
  {
    slug: "afretec-nairobi-first-place-2024",
    title: "1st Place – AFRETEC Makerthon (University of Nairobi)",
    short: "Decentralised agricultural storage platform.",
    description:
      "Led development of a digital and physical infrastructure system addressing post-harvest losses for small-scale farmers.",
    tags: ["Agriculture", "Sustainability"],
    date: "2024-10",
    org: "AFRETEC / University of Nairobi",
    links: [
      {
        label: "AFRETEC article",
        href: "https://afretec.uonbi.ac.ke/afretec-uon-student-makerthon-2024-a-showcase-of-innovation-and-collaboration/",
      },
    ],
    featured: true,
  },
  {
    slug: "asc-top-25-global-2025",
    title: "Top 25 Teams – ASC Student Supercomputer Challenge",
    short: "Global finalist in student supercomputing.",
    description:
      "Designed and optimised an HPC cluster and scientific pipelines, qualifying among the top 25 teams globally.",
    tags: ["HPC", "International"],
    date: "2025-03",
    org: "ASC",
    featured: true,
  },
  {
    slug: "deans-award-hpc-2025",
    title: "Dean’s Award – Wits",
    short: "Full Master’s tuition bursary awarded.",
    description:
      "Awarded a full tuition bursary for outstanding performance in national and international supercomputing competitions.",
    tags: ["Academic", "HPC"],
    date: "2025-08",
    org: "University of the Witwatersrand",
    featured: true,
  },
];