import { images } from "@/data/images";
import type { ProjectItem } from "@/lib/types";

/**
 * Projects, newest first when displayed.
 * An entry has its own page only when content/projects/<slug>.md exists.
 */
export const projects: ProjectItem[] = [
  // Current
  {
    slug: "gotchaeducation-platform",
    seoTitle: "GotchaEducation: offline school software",
    title: "GotchaEducation",
    summary:
      "School software for Hifz classes, exams and community service, used by 182 students across 8 schools.",
    tags: ["EdTech", "Software", "Startup"],
    date: "2026-07",
    status: "Live",
    role: "Founder",
    stack: ["React Native", "Next.js", "Supabase", "Firebase"],
    links: [
      { label: "gotchaeducation.com", href: "https://www.gotchaeducation.com/", kind: "Live" },
      { label: "Hifz App", href: "https://hifz.gotchaeducation.com/", kind: "Live" },
      { label: "GotchaExam", href: "https://www.gotchaexam.com/", kind: "Live" },
      {
        label: "Community Service App",
        href: "https://www.gotchaeducation.com/products/community-service-app",
        kind: "Live",
      },
    ],
    related: [{ type: "award", slug: "allan-gray-gotchaexam-funding" }],
    featured: true,
  },
  {
    slug: "navigotransport-campus-transit",
    image: images.navigoPlanner,
    gallery: [images.navigoRoute, images.navigoReminder, images.navigoLostFound, images.navigoMap],
    seoTitle: "NavigoTransport: Wits campus shuttle app",
    title: "NavigoTransport",
    summary:
      "A Wits shuttle app that plans trips on the phone, so routes and timetables work without signal.",
    tags: ["Transport", "Mobile", "Software"],
    date: "2026-06",
    status: "Live",
    role: "Co-founder and director",
    stack: ["React Native", "Expo", "On-device routing", "Offline maps"],
    links: [
      { label: "navigotransport.com", href: "https://www.navigotransport.com/", kind: "Live" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.navigotransport.app&pcampaignid=web_share",
        kind: "Store",
      },
      { label: "iOS TestFlight", href: "https://testflight.apple.com/join/vK7WpcnY", kind: "Beta" },
    ],
    featured: true,
  },

  // 2025
  {
    slug: "asc-student-supercomputer-challenge",
    image: images.asc25Awards,
    gallery: [images.chpcTeam],
    seoTitle: "Wits HPC team: ASC25 finalist, CHPC 2nd",
    title: "Wits HPC student cluster team",
    summary:
      "Builds and tunes a supercomputer under a power cap. 2025 ASC finalist, 2024 CHPC runner-up, ISC25 competitor.",
    tags: ["HPC", "Systems", "International"],
    date: "2025-05",
    stack: ["Linux", "Slurm", "MPI", "Benchmarking"],
    links: [
      { label: "Wits HPC ASC25 site", href: "https://asc.witshpc.com/", kind: "Source" },
      {
        label: "ASC25 preliminary result",
        href: "https://www.asc-events.net/StudentChallenge/ASC25/preliminary-result.php",
        kind: "Source",
      },
    ],
    related: [
      { type: "award", slug: "asc-top-25-global-2025" },
      { type: "award", slug: "chpc-student-cluster-competition-2024" },
      { type: "award", slug: "deans-special-award-2025" },
    ],
    featured: true,
  },
  {
    slug: "micromouse-robotics",
    seoTitle: "Wits MicroMouse Robotics: first Wits team",
    title: "Wits MicroMouse Robotics",
    summary:
      "The first MicroMouse team at Wits: small robots that solve a maze on their own. Lead engineer, then manager.",
    tags: ["Robotics", "Embedded", "Engineering"],
    date: "2025",
    status: "Completed",
    role: "Lead engineer, then manager",
    stack: ["Custom PCBs", "EasyEDA", "JLCPCB", "Wi-Fi"],
  },
  {
    slug: "sound-controlled-robot-car",
    title: "Sound-controlled robot car",
    summary:
      "A car driven by whistles. Goertzel detection of DTMF tones, PWM motor control and gyro-based PID correction.",
    tags: ["Robotics", "Signal Processing", "Embedded"],
    date: "2025",
    status: "Completed",
    stack: ["MEMS microphone", "Goertzel", "PID", "PWM"],
  },
  {
    slug: "infusion-pump-platform",
    seoTitle: "Low-cost infusion pump design",
    title: "Low-cost infusion pump",
    summary:
      "A peristaltic infusion pump with quick-change tubing and variable flow, designed to be made locally.",
    tags: ["Medical", "Embedded", "CAD"],
    date: "2025",
    status: "In progress",
    stack: ["ESP32", "Motor drivers", "CAD"],
  },

  // 2024
  {
    slug: "afretec-nairobi-agricultural-storage",
    image: images.nairobiTeam,
    gallery: [images.nairobiDemo],
    seoTitle: "Decentralised farm storage: AFRETEC winner",
    title: "Decentralised farm storage platform",
    summary:
      "Modular storage and a digital logistics system to cut post-harvest losses for small farmers. First place in Nairobi.",
    tags: ["Agriculture", "Sustainability", "Impact"],
    date: "2024-10",
    status: "Completed",
    role: "Led development",
    related: [{ type: "award", slug: "afretec-nairobi-first-place-2024" }],
  },
  {
    slug: "afretec-wits-fintech-robot-delivery",
    title: "Payments and robot food delivery",
    summary:
      "Mobile payments linked to a robot that delivers food between Wits East and West Campus.",
    tags: ["Robotics", "Fintech", "Systems"],
    date: "2024",
    status: "Completed",
  },
  {
    slug: "navigotransport-barbados",
    title: "Public transport prototype for Barbados",
    summary:
      "A prototype shown to the Barbados Transport Board, visualising routes, schedules and passenger flows.",
    tags: ["Transport", "Software", "Consulting"],
    date: "2024",
    status: "Completed",
  },
  {
    slug: "clap-based-electronic-lock",
    title: "Clap-detecting electronic lock",
    summary: "The clap-detection stage of a multi-stage electronic lock, built around signal processing and timing.",
    tags: ["Electronics", "Signal Processing"],
    date: "2024",
    status: "Completed",
  },

  // 2023
  {
    slug: "gotcha-education",
    seoTitle: "GotchaExam: exam cheating detection",
    title: "GotchaExam",
    summary:
      "Exam proctoring that detects cheating in online and offline exams. The first product of GotchaEducation.",
    tags: ["EdTech", "AI/ML", "Startup"],
    date: "2023-07",
    status: "Live",
    role: "Founder",
    stack: ["React Native", "Node.js", "Supabase"],
    links: [
      { label: "gotchaexam.com", href: "https://www.gotchaexam.com/", kind: "Live" },
      {
        label: "IEEE Entrepreneurship report",
        href: "https://entrepreneurship.ieee.org/2023_07_21_ieee-entrepreneurship-hosts-successful-workshop-at-wits-university-south-africa/",
        kind: "Press",
      },
    ],
    related: [
      { type: "award", slug: "ieee-entrepreneurship-prospectors-2023" },
      { type: "award", slug: "allan-gray-gotchaexam-funding" },
    ],
  },
  {
    slug: "pothole-detection-embedded-ml",
    title: "Pothole detection and decay prediction",
    summary:
      "A sensor and machine learning system that finds potholes and models how road damage grows. Won Best Coder at the Adapt IT hackathon.",
    tags: ["AI/ML", "Embedded", "Infrastructure"],
    date: "2023-08",
    status: "Completed",
    related: [{ type: "award", slug: "best-coder-adaptit-2023" }],
  },
  {
    slug: "ewb-sustainable-housing",
    seoTitle: "Housing from recycled plastic bottles",
    image: images.ewbStructure,
    gallery: [images.ewbModel, images.ewbConnector],
    title: "Housing from recycled plastic",
    summary:
      "A low-cost housing design for migrants using recycled plastics and bottles. Top 10 of about 1,400 student projects.",
    tags: ["Sustainability", "Engineering", "Design"],
    date: "2023-07",
    status: "Completed",
    related: [{ type: "award", slug: "ewb-top-10-project-2023" }],
  },

  // 2021
  {
    slug: "maftuha-edtech-platform",
    image: images.maftuhaExam,
    seoTitle: "Maftuha: TADHack South Africa winner 2021",
    title: "Maftuha",
    summary:
      "One application for running a school online: classes, exams, invigilation by image processing, marking and chat. Built at 16.",
    tags: ["EdTech", "AI/ML", "Software"],
    date: "2021-09",
    status: "Completed",
    role: "Co-builder, with Adela Bootha",
    stack: ["Next.js", "Tauri", "Prisma", "PostgreSQL", "Firebase", "TensorFlow.js"],
    links: [
      {
        label: "TADHack South Africa winner article",
        href: "https://blog.tadhack.com/2021/10/14/tadhack-south-africa-winner-maftuha/",
        kind: "Press",
      },
    ],
    related: [{ type: "award", slug: "tadhack-winner-2021" }],
  },
  {
    slug: "agribot-agriculture-robotics",
    seoTitle: "Agribot: Eskom Expo gold, Taiwan silver",
    title: "Agribot",
    summary:
      "A mobile agriculture robot. Gold at Eskom Expo 2020, then silver at the Taiwan International Science Fair.",
    tags: ["Robotics", "Agriculture", "Sustainability"],
    date: "2020-08",
    status: "Completed",
    image: {
      src: "/images/awards/taiwan-science-fair-2021.jpg",
      alt: "Eskom Expo announcement card showing Talhah Patelia, who was representing South Africa at the 2021 Taiwan International Science Fair",
      width: 830,
      height: 501,
      caption: "Announcement card from Eskom Expo.",
    },
    links: [
      {
        label: "Fair abstract",
        href: "https://twsf.ntsec.gov.tw/activity/race-2/2021/pdf/100045.pdf",
        kind: "Source",
      },
    ],
    related: [
      { type: "award", slug: "eskom-expo-gold-2020" },
      { type: "award", slug: "taiwan-science-fair-silver-2021" },
    ],
  },

  // 2019 and earlier
  {
    slug: "scietmeer-mobile-science-lab",
    seoTitle: "Scietmeer: science lab rover, IFEST silver",
    title: "Scietmeer",
    summary:
      "A six-wheeled mobile science laboratory for search and rescue, archaeology, architecture and farming. Silver at IFEST Tunisia.",
    tags: ["Robotics", "Science", "Hardware"],
    date: "2019-11",
    status: "Completed",
    image: {
      src: "/images/projects/scietmeer-cad.jpg",
      alt: "CAD render of Scietmeer, a six-wheeled rover with a robotic arm",
      width: 1200,
      height: 690,
      caption: "CAD render.",
      kind: "screen",
    },
    related: [
      { type: "award", slug: "sayess-gold-2019" },
      { type: "award", slug: "ifest-tunisia-silver-2020" },
    ],
  },
  {
    slug: "cave-traversal-robot",
    title: "GrottoBot cave robot",
    summary:
      "A robot built to travel over uneven, cave-like ground. Gold and two special prizes at the North Gauteng Science Fair.",
    tags: ["Robotics", "Engineering", "Hardware"],
    date: "2019-08",
    status: "Completed",
    related: [{ type: "award", slug: "north-gauteng-science-fair-2019" }],
  },
  {
    slug: "quadruped-walking-robot",
    title: "Quadruped walking robot",
    summary: "A 3D-printed four-legged robot, programmed to walk. Built at 13 and placed first at the VUT and AMS Science Fair.",
    tags: ["Robotics", "3D Printing", "Embedded"],
    date: "2018-05",
    status: "Completed",
    image: {
      src: "/images/projects/quadruped-2018.jpg",
      alt: "A small yellow quadruped robot walking on a tiled floor",
      width: 880,
      height: 810,
      caption: "The prototype, May 2018.",
    },
    related: [{ type: "award", slug: "vut-ams-science-fair-2018-first-place" }],
  },
];
