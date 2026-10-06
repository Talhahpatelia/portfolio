import { images } from "@/data/images";
import type { AwardItem } from "@/lib/types";

/**
 * Awards and results, newest first when displayed.
 * Wording follows the certificates, official pages and signed reports in my files.
 * An entry has its own page only when content/awards/<slug>.md exists.
 */
export const awards: AwardItem[] = [
  // 2026
  {
    slug: "uzh-deep-dive-into-blockchain-2026",
    seoTitle: "Four firsts, UZH Deep Dive into Blockchain",
    image: images.uzhTeam,
    gallery: [images.uzhVoting, images.uzhPow, images.uzhCardano, images.uzhPresentation, images.uzhCertificate],
    result: "4 firsts",
    title: "First place in four challenges, Deep Dive into Blockchain",
    summary:
      "Won the final project and three challenges at the University of Zurich Blockchain Center's summer school in Stellenbosch, on an industry scholarship.",
    tags: ["Software", "Academic"],
    date: "2026-07",
    org: "University of Zurich Blockchain Center",
    links: [
      {
        label: "LinkedIn post",
        href: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7491180813154435073/",
        kind: "Source",
      },
    ],
  },
  {
    slug: "afretec-seed-challenge-2026",
    image: images.seedCertificates,
    gallery: [images.seedPortrait, images.seedStage],
    result: "Coach",
    title: "Coach, AFRETEC SEED Challenge winners",
    summary:
      "Coached, with Jared Swart, Dr. Crop: a pan-African student team whose offline crop-disease tool won the agriculture track.",
    tags: ["Agriculture", "Entrepreneurship"],
    date: "2026",
    org: "AFRETEC",
  },

  // 2025
  {
    slug: "sanren-cyber-security-challenge-2025",
    result: "2nd overall",
    title: "2nd overall, SANReN Cyber Security Challenge nationals",
    summary:
      "Second overall at the national final, with first place in the MWR challenge and the CTF, and a tied first in the Orange Cyberdefense challenge.",
    tags: ["Software", "Academic"],
    date: "2025-12",
    org: "SANReN",
  },
  {
    slug: "deans-special-award-2025",
    result: "Full tuition",
    seoTitle: "Special Dean's Award, Wits (2025)",
    title: "Special Dean's Award",
    summary:
      "Full tuition for a Master's at Wits, awarded to members of the Wits HPC team for national and international student supercomputing results.",
    tags: ["Academic", "HPC"],
    date: "2025",
    org: "University of the Witwatersrand",
    image: {
      src: "/awards/deens-award-1.jpeg",
      alt: "Page 26 of the Wits Faculty of Engineering awards booklet, listing the Dean's Special Awards",
      width: 881,
      height: 1280,
      caption: "Page 26 of the faculty awards booklet.",
      fit: "contain",
      kind: "certificate",
    },
    related: [{ type: "project", slug: "asc-student-supercomputer-challenge" }],
    featured: true,
  },
  {
    slug: "asc-top-25-global-2025",
    image: images.asc25Awards,
    result: "Top 25",
    title: "Top 25 finalist, ASC Student Supercomputer Challenge",
    summary:
      "One of 25 finalist teams from more than 300 that entered, at the final round at Qinghai University in Xining, China.",
    tags: ["HPC", "International"],
    date: "2025-05",
    org: "Asia Supercomputer Community",
    links: [
      { label: "Wits HPC ASC25 site", href: "https://asc.witshpc.com/", kind: "Source" },
      {
        label: "ASC25 preliminary result",
        href: "https://www.asc-events.net/StudentChallenge/ASC25/preliminary-result.php",
        kind: "Source",
      },
    ],
    related: [{ type: "project", slug: "asc-student-supercomputer-challenge" }],
    featured: true,
  },
  {
    slug: "isc25-student-cluster-competition-2025",
    image: images.isc25Certificate,
    result: "Competed",
    title: "ISC25 Student Cluster Competition",
    summary:
      "Took part online, with a Wits team, in the ISC25 Student Cluster Competition, which is held in Hamburg.",
    tags: ["HPC", "International"],
    date: "2025-06",
    org: "ISC High Performance",
  },

  // 2024
  {
    slug: "afretec-nairobi-first-place-2024",
    image: images.nairobiTeam,
    gallery: [images.nairobiDemo],
    result: "1st",
    title: "1st place, AFRETEC Innovation Challenge, Nairobi",
    summary:
      "Led a decentralised farm storage and logistics platform to first place at the University of Nairobi. The prize included a funded incubator stay in Rwanda.",
    tags: ["Agriculture", "Sustainability"],
    date: "2024-10",
    org: "AFRETEC and the University of Nairobi",
    links: [
      {
        label: "AFRETEC UoN Makerthon article",
        href: "https://afretec.uonbi.ac.ke/afretec-uon-student-makerthon-2024-a-showcase-of-innovation-and-collaboration/",
        kind: "Press",
      },
    ],
    related: [{ type: "project", slug: "afretec-nairobi-agricultural-storage" }],
    featured: true,
  },
  {
    slug: "chpc-student-cluster-competition-2024",
    image: images.chpcTeam,
    gallery: [images.chpcBooth],
    result: "2nd overall",
    seoTitle: "CHPC Student Cluster Competition 2024: 2nd",
    title: "2nd overall, CHPC National Student Cluster Competition",
    summary:
      "Wits A placed second of ten teams, won the MATLAB Coding Challenge and took the highest LINPACK result.",
    tags: ["HPC", "Academic"],
    date: "2024-12",
    org: "Centre for High Performance Computing",
    links: [
      {
        label: "CHPC 2024 national round",
        href: "https://scc.chpc.ac.za/national-round-2024/",
        kind: "Source",
      },
    ],
    related: [{ type: "project", slug: "asc-student-supercomputer-challenge" }],
    featured: true,
  },
  {
    slug: "allan-gray-gotchaexam-funding",
    result: "R100,000",
    title: "R100,000 pitch prize, Allan Gray Orbis Foundation",
    summary:
      "Won R100,000 for GotchaExam at the foundation's Founders Pitch, which the foundation calls the E-Squared Varsity Pitch.",
    tags: ["Entrepreneurship", "EdTech"],
    date: "2024-07",
    org: "Allan Gray Orbis Foundation",
    related: [{ type: "project", slug: "gotcha-education" }],
    featured: true,
  },
  {
    slug: "student-entrepreneurship-2024",
    image: images.studentEntrepreneur,
    result: "Recognised",
    title: "Student Entrepreneur Recognition",
    summary:
      "Certificate from the Wits Innovation Centre for building Gotcha, signed by the Deputy Vice-Chancellor for Research and Innovation.",
    tags: ["EdTech", "Entrepreneurship"],
    date: "2024-04-26",
    org: "Wits Innovation Centre",
  },
  {
    slug: "agof-candidate-fellow-2024",
    image: images.agofTag,
    result: "Fellow",
    title: "Allan Gray Orbis Foundation Candidate Fellow",
    summary: "A fellowship that carries a 100% scholarship.",
    tags: ["Entrepreneurship", "Academic"],
    date: "2024",
    org: "Allan Gray Orbis Foundation",
  },

  // 2023
  {
    slug: "wesaf-certificate-of-merit-2023",
    image: images.wesafCertificate,
    result: "Merit",
    title: "Certificate of Merit, Wits-Edinburgh doctoral programme",
    summary:
      "Awarded in the Wits-Edinburgh Sustainable African Futures Doctoral Programme, run in partnership with the Mastercard Foundation.",
    tags: ["Academic", "Sustainability"],
    date: "2023-09-04",
    org: "University of the Witwatersrand",
  },
  {
    slug: "best-coder-adaptit-2023",
    result: "Best Coder",
    title: "Best Coder, Adapt IT hackathon",
    summary: "For an embedded machine learning system that detects potholes and predicts road decay.",
    tags: ["AI/ML", "Embedded"],
    date: "2023-08",
    org: "Adapt IT and Wits",
  },
  {
    slug: "ieee-entrepreneurship-prospectors-2023",
    gallery: [images.ieeeCertificate],
    result: "Winner",
    seoTitle: "Winning pitch, IEEE workshop 2023",
    title: "Winning pitch, IEEE Entrepreneurship Prospectors workshop",
    summary:
      "Gotcha, an exam-integrity venture built with Jesse Thornburg, was chosen as the winning pitch from seven teams.",
    tags: ["Startup", "Entrepreneurship"],
    date: "2023-07",
    org: "IEEE Entrepreneurship and the Wits Innovation Centre",
    image: {
      src: "/awards/IEEE-Entreprenrship-Wits-Workshop-1024x428.jpg",
      alt: "Participants of the IEEE Entrepreneurship workshop standing on steps at Wits",
      width: 1024,
      height: 428,
      caption: "Workshop participants at Wits. Photo from the IEEE Entrepreneurship report.",
    },
    links: [
      {
        label: "IEEE Entrepreneurship report",
        href: "https://entrepreneurship.ieee.org/2023_07_21_ieee-entrepreneurship-hosts-successful-workshop-at-wits-university-south-africa/",
        kind: "Press",
      },
    ],
    related: [{ type: "project", slug: "gotcha-education" }],
    featured: true,
  },
  {
    slug: "ewb-top-10-project-2023",
    image: images.ewbStructure,
    result: "Top 10",
    title: "Top 10 project, Engineers Without Borders challenge",
    summary:
      "A housing design for migrants built from recycled plastics and bottles, ranked among the top projects of about 1,400 students.",
    tags: ["Sustainability", "Engineering"],
    date: "2023-07",
    org: "University of the Witwatersrand",
  },

  // 2021
  {
    slug: "tadhack-winner-2021",
    image: images.maftuhaExam,
    result: "Winner",
    title: "Winner, TADHack South Africa",
    summary: "Won the national hackathon at 16 with Maftuha, an all-in-one platform for schools.",
    tags: ["EdTech", "Hackathon"],
    date: "2021-09",
    org: "TADHack, with MTN and Geekulcha",
    links: [
      {
        label: "TADHack South Africa winner article",
        href: "https://blog.tadhack.com/2021/10/14/tadhack-south-africa-winner-maftuha/",
        kind: "Press",
      },
      {
        label: "TADHack Global 2021 summary",
        href: "https://blog.tadhack.com/2021/09/26/tadhack-global-2021-summary/",
        kind: "Press",
      },
    ],
    related: [{ type: "project", slug: "maftuha-edtech-platform" }],
    featured: true,
  },
  {
    slug: "mtn-business-app-academy-2021",
    image: images.mtnCertificate,
    result: "Completed",
    title: "MTN Business App Academy, NQF level 5",
    summary: "Completed the programme on 16 September 2021.",
    tags: ["Software", "Academic"],
    date: "2021-09-16",
    org: "MTN",
  },
  {
    slug: "top-15-young-geeks-2021",
    result: "Top 15",
    title: "Top 15 Young Geeks South Africa",
    summary: "Named by Geekulcha among the 15 young people making an impact in South Africa's digital economy.",
    tags: ["Recognition"],
    date: "2021-06",
    org: "Geekulcha",
    links: [
      {
        label: "ITWeb article",
        href: "https://www.itweb.co.za/article/geekulcha-names-2021-top-15-young-geeks/GxwQDM1ZRWEqlPVo",
        kind: "Press",
      },
    ],
  },
  {
    slug: "taiwan-science-fair-silver-2021",
    result: "Silver",
    title: "Silver, Taiwan International Science Fair",
    summary: "Represented South Africa with Agribot, an agriculture robot entered with Zayd Kara.",
    tags: ["International", "Robotics"],
    date: "2021-02",
    org: "Taiwan International Science Fair",
    image: {
      src: "/images/awards/taiwan-science-fair-2021.jpg",
      alt: "Eskom Expo announcement card showing Talhah Patelia, who was representing South Africa at the 2021 Taiwan International Science Fair",
      width: 830,
      height: 501,
      caption: "Announcement card from Eskom Expo.",
    },
    links: [
      {
        label: "Fair abstract for Agribot",
        href: "https://twsf.ntsec.gov.tw/activity/race-2/2021/pdf/100045.pdf",
        kind: "Source",
      },
    ],
    related: [{ type: "project", slug: "agribot-agriculture-robotics" }],
  },

  // 2020
  {
    slug: "community-service-1000-face-shields",
    result: "Full Colours",
    seoTitle: "3D-printed face shields, 2020 lockdown",
    title: "3D-printed face shields for medical staff",
    summary:
      "Printed more than 1,000 face shields during the 2020 lockdown, distributed through the Salaam Foundation. Earned Full Colours at Reddam House.",
    tags: ["Community", "Healthcare"],
    date: "2020",
    org: "Reddam House Bedfordview",
    image: {
      src: "/images/awards/face-shields-2020.jpg",
      alt: "Talhah Patelia holding a stack of 3D-printed face shield frames in front of 3D printers",
      width: 600,
      height: 550,
    },
    featured: true,
  },
  {
    slug: "eskom-expo-gold-2020",
    result: "Gold",
    title: "Gold, Eskom Expo",
    summary: "Gold at the 2020 Eskom Expo for Agribot, which was then chosen to represent South Africa in Taiwan.",
    tags: ["Robotics", "Agriculture"],
    date: "2020-08",
    org: "Eskom Expo for Young Scientists",
    image: {
      src: "/images/awards/eskom-expo-medal.jpg",
      alt: "Talhah Patelia wearing a gold medal in front of an Eskom Expo banner",
      width: 808,
      height: 1013,
      caption: "At an Eskom Expo event.",
    },
    links: [
      {
        label: "Eskom Expo media pack",
        href: "https://exposcience.co.za/wp-content/uploads/2023/08/2021-Eskom-Expo-Media-pack-Talhah-Patelia.pdf",
        kind: "Document",
      },
    ],
    related: [{ type: "project", slug: "agribot-agriculture-robotics" }],
  },
  {
    slug: "tadhack-mentorship-2020",
    result: "Prize",
    title: "TADHack prize: mentorship at Contactable",
    summary:
      "The prize for a 2020 TADHack entry was a year-long mentorship programme at the software company Contactable, held during school holidays in 2021.",
    tags: ["Software", "Hackathon"],
    date: "2020-10",
    org: "TADHack and Contactable",
  },
  {
    slug: "ifest-tunisia-silver-2020",
    result: "Silver",
    title: "Silver, IFEST Tunisia",
    summary:
      "Scietmeer, a mobile science laboratory, was one of the top 150 engineering projects at the International Festival of Engineering, Science and Technology.",
    tags: ["International", "Robotics"],
    date: "2020",
    org: "IFEST",
    related: [{ type: "project", slug: "scietmeer-mobile-science-lab" }],
  },

  // 2019
  {
    slug: "sayess-gold-2019",
    image: images.sayessCertificate,
    result: "Gold",
    title: "Gold, robotics, SA-YESS",
    summary:
      "Gold medal at the South African Youth Engineering and Science Symposium for Scietmeer, which led to the selection for IFEST Tunisia.",
    tags: ["Robotics", "International"],
    date: "2019-11-29",
    org: "iMBEWU Science Foundation",
    related: [{ type: "project", slug: "scietmeer-mobile-science-lab" }],
  },
  {
    slug: "tadhack-rising-star-2019",
    result: "Rising Star",
    title: "Rising Star, TADHack Global",
    summary: "Recognised at a 72-hour hackathon run with MTN and Geekulcha in Johannesburg.",
    tags: ["Hackathon"],
    date: "2019-10",
    org: "TADHack, with MTN and Geekulcha",
  },
  {
    slug: "north-gauteng-science-fair-2019",
    gallery: [images.ngHandshake, images.ngGoldCertificate, images.ngGrottobotPrize, images.ngSecondBest],
    result: "Gold",
    seoTitle: "North Gauteng Science Fair 2019: gold, 2nd",
    title: "Gold and two special prizes, North Gauteng Science Fair",
    summary:
      "A cave-exploring robot won a gold medal, the best project in the GrottoBot challenge, and second place overall among 527 learners.",
    tags: ["Robotics", "Engineering"],
    date: "2019-08",
    org: "North Gauteng Science Fair",
    image: {
      src: "/images/awards/north-gauteng-2019-certificates.jpg",
      alt: "Talhah Patelia holding his North Gauteng Science Fair certificates in a sports hall",
      width: 834,
      height: 826,
    },
    links: [
      {
        label: "Fair results page",
        href: "https://www.sciencexpo.org.za/event/ng/news/65.html",
        kind: "Source",
      },
    ],
    related: [{ type: "project", slug: "cave-traversal-robot" }],
    featured: true,
  },
  {
    slug: "eskom-expo-gold-2019",
    image: images.eskom2019Certificate,
    result: "Gold",
    title: "Gold, Eskom Expo regional fair",
    summary: "Gold medal on 20 July 2019 for a robot he designed, printed and programmed.",
    tags: ["Robotics", "Engineering"],
    date: "2019-07-20",
    org: "Eskom Expo for Young Scientists",
  },

  // 2018
  {
    slug: "vut-ams-science-fair-2018-first-place",
    result: "1st",
    title: "1st place, VUT and AMS Science Fair",
    summary: "First place for a 3D-printed quadruped robot that he programmed to walk, aged 13.",
    tags: ["Robotics", "3D Printing"],
    date: "2018-05",
    org: "Vaal University of Technology and the Association of Muslim Schools",
    image: {
      src: "/images/projects/quadruped-2018.jpg",
      alt: "A small yellow quadruped robot walking on a tiled floor",
      width: 880,
      height: 810,
      caption: "The quadruped prototype, May 2018.",
    },
    related: [{ type: "project", slug: "quadruped-walking-robot" }],
  },
  {
    slug: "school-awards-2018-2022",
    title: "School awards, 2018 to 2022",
    summary:
      "At Auckland Park Academy of Excellence: Grade 8 class leader, Principal's Award, top achiever in Grade 9 mathematics. At Reddam House: Full Colours for community service and for competitive science, Platinum awards for design, merit awards in IT and mathematics.",
    tags: ["Academic", "Leadership"],
    date: "2018",
    org: "Auckland Park Academy of Excellence and Reddam House Bedfordview",
  },
];
