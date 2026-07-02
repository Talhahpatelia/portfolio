// data/projects.ts
import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  // ===== Healthcare / Medical =====
  {
    slug: "infusion-pump-platform",
    title: "Infusion Pump Platform (Peristaltic + Control)",
    short:
      "Low-cost infusion pump platform with quick-change tubing and variable flow control.",
    description:
      "Early-stage healthcare hardware project focused on an affordable, locally manufacturable infusion pump platform. Work includes requirements definition, pump mechanics, control architecture, safety constraints, calibration, alarms, and manufacturable design.",
    tags: ["Medical", "Embedded", "CAD", "Research"],
    date: "2025",
    stage: "Validation",
    funding: "Bootstrapped",
    stack: ["ESP32", "Motor drivers", "Mechanical design", "CAD"],
  },

  // ===== EdTech / Startup =====
  {
    slug: "maftuha-edtech-platform",
    title: "Maftuha Institutional EdTech Platform",
    short: "Institution, classroom, exam, invigilation, marking, and secure chat platform.",
    description:
      "Built an all-in-one EdTech platform for institutions during the shift to online learning. The local codebase includes institution and classroom management, secure joins, exam creation, image-processing-based invigilation, marking workflows, and secure chat.",
    tags: ["EdTech", "AI/ML", "Software"],
    date: "2021-09",
    stage: "Completed",
    funding: "None",
    stack: ["Next.js", "Tauri", "Prisma", "PostgreSQL", "Firebase", "TensorFlow.js"],
    links: [
      {
        label: "TADHack South Africa winner article (2021)",
        href: "https://blog.tadhack.com/2021/10/14/tadhack-south-africa-winner-maftuha/",
        kind: "Proof",
      },
      {
        label: "TADHack Global 2021 summary",
        href: "https://blog.tadhack.com/2021/09/26/tadhack-global-2021-summary/",
        kind: "Proof",
      },
    ],
  },
  {
    slug: "gotcha-education",
    title: "Gotcha (EdTech Proctoring)",
    short: "Autonomous cheat detection for online and offline assessments.",
    description:
      "EdTech product focused on assessment integrity, practical teacher workflows, and real-world deployment constraints. The 2023 IEEE Entrepreneurship workshop article identifies Gotcha as a first-place venture concept focused on autonomous cheat detection in online and offline exams.",
    tags: ["EdTech", "AI/ML", "Startup"],
    date: "2023-07",
    stage: "MVP",
    funding: "Funded", // R100k startup funding (AGOF), kept as portfolio-supplied context.
    stack: ["React Native", "Node.js", "Supabase"],
    links: [
      { label: "GotchaExam website", href: "https://www.gotchaexam.com/", kind: "Live" },
      { label: "GotchaEducation company site", href: "https://www.gotchaeducation.com/", kind: "Live" },
      {
        label: "IEEE Entrepreneurship article (2023)",
        href: "https://entrepreneurship.ieee.org/2023_07_21_ieee-entrepreneurship-hosts-successful-workshop-at-wits-university-south-africa/",
        kind: "Proof",
      },
    ],
    featured: true,
  },
  {
    slug: "gotcha-class-management",
    title: "Gotcha Class Management Platform",
    short:
      "Lightweight class and learner information system for small institutions.",
    description:
      "Product validation and MVP deployment for smaller institutions lacking enterprise education tooling. Focus on usability, low admin overhead, and reliable learner records.",
    tags: ["EdTech", "Software", "Impact"],
    date: "2024",
    stage: "MVP",
    funding: "Bootstrapped",
    stack: ["React Native", "Supabase"],
  },
  {
    slug: "hifz-mobile",
    title: "Hifz Mobile - Class & Progress Management App",
    short: "Mobile app for managing hifz classes, attendance, and progress.",
    description:
      "Shipped mobile application used for class management and progress tracking in hifz programmes, iterated through teacher feedback and continuous releases.",
    tags: ["EdTech", "Mobile", "Software"],
    date: "2025",
    stage: "Scaling",
    funding: "Bootstrapped",
    stack: ["React Native (Expo)", "Supabase"],
    featured: true,
  },

  // ===== Community / Civic Tech =====
  {
    slug: "school-community-service-platform",
    title: "Community Service Tracking Platform for Schools",
    short: "Platform to formalise and scale community service participation.",
    description:
      "Civic-tech project in problem discovery and stakeholder validation to improve how schools track, verify, and report student community service.",
    tags: ["Community", "Software", "Impact"],
    date: "2025",
    stage: "Validation",
    funding: "Bootstrapped",
    stack: ["React Native", "Supabase"],
  },

  // ===== Sustainability / Humanitarian Design =====
  {
    slug: "ewb-sustainable-housing",
    title: "Sustainable Housing Using Recycled Materials (EWB)",
    short: "Affordable housing concept using recycled plastics and bottles.",
    description:
      "Completed humanitarian engineering design project focused on sustainable, low-cost housing for migrants using recycled plastics and bottles. Selected among the top projects from roughly 1,400 students.",
    tags: ["Sustainability", "Engineering", "Design"],
    date: "2023-07",
    stage: "Completed",
    funding: "None",
    featured: true,
  },

  // ===== Robotics / Hardware =====
  {
    slug: "quadruped-walking-robot",
    title: "3D-Printed Quadruped Walking Robot",
    short: "Designed and programmed a quadruped robot capable of walking.",
    description:
      "Early robotics project exploring gait control, mechanical design, 3D printing, and embedded programming through hands-on prototyping.",
    tags: ["Robotics", "3D Printing", "Embedded"],
    date: "2018-05",
    stage: "Completed",
    funding: "None",
  },
  {
    slug: "cave-traversal-robot",
    title: "Cave-Traversal Robotics System (Grottobot)",
    short: "Robotics system designed for cave-like terrain traversal.",
    description:
      "Built a robot designed to traverse uneven, cave-like terrain for exploration scenarios, integrating mechanical design, electronics, and control logic.",
    tags: ["Robotics", "Engineering", "Hardware"],
    date: "2019-08",
    stage: "Completed",
    funding: "None",
  },
  {
    slug: "scietmeer-mobile-science-lab",
    title: "Scietmeer - Mobile Science Laboratory Robot",
    short: "Mobile robotics platform for science and field applications.",
    description:
      "Developed a mobile science laboratory robot for field applications including search and rescue, archaeology, architecture, and farming. The project later represented South Africa internationally at IFEST Tunisia in 2020.",
    tags: ["Robotics", "Science", "Hardware"],
    date: "2019-11",
    stage: "Completed",
    funding: "None",
  },
  {
    slug: "agribot-agriculture-robotics",
    title: "Agribot - Sustainable Agriculture Robotics Platform",
    short: "Robotics platform focused on farming and sustainability.",
    description:
      "Built a sustainability-oriented agriculture robotics platform integrating mechanical systems, electronics, and embedded software. The 2021 Taiwan International Science Fair abstract lists Agribot as an engineering project by Talhah Patelia and Zayd Kara.",
    tags: ["Robotics", "Agriculture", "Sustainability"],
    date: "2020-08",
    stage: "Completed",
    funding: "None",
    links: [
      {
        label: "Taiwan International Science Fair abstract (2021)",
        href: "https://twsf.ntsec.gov.tw/activity/race-2/2021/pdf/100045.pdf",
        kind: "Proof",
      },
    ],
    featured: true,
  },

  // ===== Embedded ML / Infrastructure =====
  {
    slug: "pothole-detection-embedded-ml",
    title: "Embedded Pothole Detection & Decay Prediction",
    short: "Sensor-driven ML system for pothole detection and modelling.",
    description:
      "Proof-of-concept system combining embedded sensing and ML inference to detect potholes and model how road damage decays over time. Local project files include environmental sensing work with temperature and humidity data capture.",
    tags: ["AI/ML", "Embedded", "Infrastructure"],
    date: "2023-08",
    stage: "Completed",
    funding: "None",
    stack: ["Embedded sensors", "ML inference", "Prototyping"],
  },

  // ===== AFRETEC / Transport / Fintech =====
  {
    slug: "afretec-wits-fintech-robot-delivery",
    title: "Fintech Payments + Robotic Food Delivery (AFRETEC)",
    short: "Integrated mobile payments with robotic campus food delivery.",
    description:
      "Integrated fintech payments with a robotic food delivery concept designed for campus operation between East and West Campus.",
    tags: ["Robotics", "Fintech", "Systems"],
    date: "2024",
    stage: "Completed",
    funding: "None",
  },
  {
    slug: "afretec-nairobi-agricultural-storage",
    title: "Decentralised Agricultural Storage & Logistics Platform",
    short: "Platform addressing post-harvest losses and market access.",
    description:
      "Led development of a decentralised agricultural storage and logistics platform using modular infrastructure and a supporting digital system to reduce post-harvest losses. The University of Nairobi AFRETEC article documents the 2024 Makerthon, cross-university teams, and agriculture-focused innovation work.",
    tags: ["Agriculture", "Sustainability", "Impact"],
    date: "2024-10",
    stage: "MVP",
    funding: "None",
    links: [
      {
        label: "AFRETEC UoN Makerthon article (2024)",
        href: "https://afretec.uonbi.ac.ke/afretec-uon-student-makerthon-2024-a-showcase-of-innovation-and-collaboration/",
        kind: "Proof",
      },
    ],
  },
  {
    slug: "navigotransport-barbados",
    title: "NavigoTransport x Barbados (Public Transport Prototype)",
    short: "Prototype public transport system for a national authority.",
    description:
      "Early-stage consultancy and prototype demonstration for the Barbados Transport Board, visualising routes, schedules, and user flows.",
    tags: ["Transport", "Software", "Consulting"],
    date: "2024",
    stage: "Validation",
    funding: "None",
    featured: true,
  },

  // ===== HPC / Supercomputing =====
  {
    slug: "asc-student-supercomputer-challenge",
    title: "ASC Student Supercomputer Challenge (Global Finals)",
    short: "Designed and optimised HPC systems under strict power limits.",
    description:
      "Built and tuned a multi-node HPC cluster, executed benchmarks and scientific/AI workloads, and presented results to an international panel. The Wits HPC ASC25 site records Wits as a Top 25 finalist for the 2025 final round at Qinghai University in Xining, China.",
    tags: ["HPC", "Systems", "International"],
    date: "2025-03",
    stage: "Completed",
    funding: "None",
    stack: ["Linux", "Slurm", "MPI", "Benchmarking"],
    links: [
      { label: "Wits HPC ASC25 site", href: "https://asc.witshpc.com/", kind: "Proof" },
      {
        label: "ASC25 preliminary result",
        href: "https://www.asc-events.net/StudentChallenge/ASC25/preliminary-result.php",
        kind: "Proof",
      },
    ],
  },

  // ===== Electronics / Signal Processing =====
  {
    slug: "clap-based-electronic-lock",
    title: "Clap-Based Detection Subsystem (Electronic Lock)",
    short: "Signal-processing-based clap detection with timing logic.",
    description:
      "Designed and implemented a clap-based detection subsystem as part of a multi-stage electronic lock, focusing on detection accuracy and integration.",
    tags: ["Electronics", "Signal Processing"],
    date: "2024",
    stage: "Completed",
    funding: "None",
  },
  {
    slug: "sound-controlled-robot-car",
    title: "Sound-Controlled Robotic Car",
    short: "Whistle-driven robot using Goertzel and DTMF encoding.",
    description:
      "Built a sound-controlled robotic car using custom 3D-printed whistles, MEMS microphone input, Goertzel detection with DTMF encoding, PWM motor control, and IMU-based PID correction.",
    tags: ["Robotics", "Signal Processing", "Embedded"],
    date: "2025",
    stage: "Completed",
    funding: "None",
    stack: ["MEMS microphone", "Goertzel", "PID control", "PWM motor control"],
  },

  // ===== Current Work =====
  {
    slug: "gotchaeducation-platform",
    title: "GotchaEducation - Offline-First Education Software",
    short:
      "Live education software and consulting across Hifz, exams, community service, LMS, tutoring, and school operations.",
    description:
      "Current company and product direction for offline-first education systems. GotchaEducation supports real learner workflows through reusable SaaS products and custom education software for institutions that need practical online and offline delivery.",
    tags: ["EdTech", "Software", "Startup", "Impact"],
    date: "2026-07",
    stage: "Scaling",
    funding: "Bootstrapped",
    role: "Founder",
    impact: "100+ students supported across active education workflows and pilots.",
    stack: ["React Native", "Next.js", "Firebase", "Supabase", "Offline-first architecture"],
    links: [
      {
        label: "GotchaEducation company site",
        href: "https://www.gotchaeducation.com/",
        kind: "Live",
      },
      {
        label: "Hifz App product site",
        href: "https://hifz.gotchaeducation.com/",
        kind: "Live",
      },
      {
        label: "GotchaExam product site",
        href: "https://www.gotchaexam.com/",
        kind: "Live",
      },
      {
        label: "Community Service App product page",
        href: "https://www.gotchaeducation.com/products/community-service-app",
        kind: "Live",
      },
    ],
    featured: true,
  },
  {
    slug: "navigotransport-campus-transit",
    title: "NavigoTransport - Offline-First Campus Transit",
    short:
      "Private-beta Wits shuttle app with on-device routing, offline timetables, reminders, safety, and lost-and-found flows.",
    description:
      "Current transport product focused on making campus shuttle movement predictable for Wits students. The app computes trips on-device, keeps routes and timetables available offline, and includes student-facing service alerts, reminders, campus security, and lost-and-found workflows.",
    tags: ["Transport", "Mobile", "Software", "Infrastructure"],
    date: "2026-06",
    stage: "MVP",
    funding: "Bootstrapped",
    role: "Co-founder",
    impact: "Live Android listing and iOS TestFlight beta for Wits campus transit.",
    stack: ["React Native", "Expo", "On-device routing", "Offline maps", "Push notifications"],
    links: [
      {
        label: "NavigoTransport website",
        href: "https://www.navigotransport.com/",
        kind: "Live",
      },
      {
        label: "Google Play listing",
        href: "https://play.google.com/store/apps/details?id=com.navigotransport.app&pcampaignid=web_share",
        kind: "Store",
      },
      {
        label: "iOS TestFlight beta",
        href: "https://testflight.apple.com/join/vK7WpcnY",
        kind: "Beta",
      },
    ],
    featured: true,
  },
];
