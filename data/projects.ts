// data/projects.ts
import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  // ===== Healthcare / Medical =====
  {
    slug: "infusion-pump-platform",
    title: "Infusion Pump Platform (Peristaltic + Control)",
    short:
      "Designing a low-cost infusion pump system with quick-change tubing and variable flow control.",
    description:
      "Early-stage healthcare hardware project focused on an affordable, locally manufacturable infusion pump platform. Work includes requirements definition, pump mechanics (linear/cam/peristaltic), control architecture, safety constraints, and manufacturable design.",
    tags: ["Medical", "Embedded", "CAD", "Research"],
    stage: "Validation",
    funding: "Bootstrapped",
    stack: ["ESP32", "Motor drivers", "Mechanical design", "CAD"],
    // links: [{ label: "Notes", href: "https://example.com" }],
  },

  // ===== EdTech / Startup =====
  {
    slug: "gotcha-education",
    title: "Gotcha (EdTech Proctoring)",
    short: "Autonomous cheat detection online/offline.",
    description:
      "EdTech product focused on improving assessment integrity with practical workflows and real-world constraints. Progressed from concept to MVP and deployment.",
    tags: ["EdTech", "ML", "Startup"],
    stage: "MVP",
    funding: "Funded", // R100k startup funding (AGOF)
    stack: ["React Native", "Node.js", "Supabase"],
    links: [{ label: "Website", href: "https://gotchaexam.com/" }],
    featured: true,
  },
  {
    slug: "gotcha-class-management",
    title: "Gotcha Class Management Platform",
    short:
      "Lightweight class and learner information system for small institutions.",
    description:
      "Product validation and MVP deployment for smaller institutions lacking enterprise education tooling. Focus on usability, low admin overhead, and reliable records.",
    tags: ["EdTech", "Software", "Impact"],
    stage: "MVP",
    funding: "Bootstrapped",
    stack: ["React Native", "Supabase"],
  },
  {
    slug: "hifz-mobile",
    title: "Hifz Mobile – Class & Progress Management App",
    short: "Mobile app for managing hifz classes, attendance, and progress.",
    description:
      "Shipped mobile application used for class management and progress tracking in hifz programmes, iterated through teacher feedback and continuous releases.",
    tags: ["EdTech", "Mobile", "Software"],
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
      "Completed humanitarian engineering design project focusing on sustainable, low-cost housing for migrants using recycled plastics and bottles.",
    tags: ["Sustainability", "Engineering", "Design"],
    stage: "Completed",
    funding: "None",
    featured: true,
  },

  // ===== Robotics / Hardware (early) =====
  {
    slug: "quadruped-walking-robot",
    title: "3D-Printed Quadruped Walking Robot",
    short: "Designed and programmed a quadruped robot capable of walking.",
    description:
      "Early robotics project exploring gait control, mechanical design, and embedded programming through hands-on prototyping.",
    tags: ["Robotics", "3D Printing", "Embedded"],
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
    stage: "Completed",
    funding: "None",
  },
  {
    slug: "scietmeer-mobile-science-lab",
    title: "Scietmeer – Mobile Science Laboratory Robot",
    short: "Mobile robotics platform for science and field applications.",
    description:
      "Developed a mobile science laboratory robot for field applications including search and rescue, archaeology, architecture, and farming.",
    tags: ["Robotics", "Science", "Hardware"],
    stage: "Completed",
    funding: "None",
  },
  {
    slug: "agribot-agriculture-robotics",
    title: "Agribot – Sustainable Agriculture Robotics Platform",
    short: "Robotics platform focused on farming and sustainability.",
    description:
      "Built a sustainability-oriented agriculture robotics platform integrating mechanical systems, electronics, and embedded software.",
    tags: ["Robotics", "Agriculture", "Sustainability"],
    stage: "Completed",
    funding: "None",
    featured: true,
  },

  // ===== Embedded ML / Infrastructure =====
  {
    slug: "pothole-detection-embedded-ml",
    title: "Embedded Pothole Detection & Decay Prediction",
    short: "Sensor-driven ML system for pothole detection and modelling.",
    description:
      "Proof-of-concept system combining embedded sensing and ML inference to detect potholes and model how road damage decays over time.",
    tags: ["Machine Learning", "Embedded", "Infrastructure"],
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
    stage: "Completed",
    funding: "None",
  },
  {
    slug: "afretec-nairobi-agricultural-storage",
    title: "Decentralised Agricultural Storage & Logistics Platform",
    short: "Platform addressing post-harvest losses and market access.",
    description:
      "Led development of a decentralised agricultural storage and logistics platform using modular infrastructure and a supporting digital system to reduce post-harvest losses.",
    tags: ["Agriculture", "Sustainability", "Impact"],
    stage: "MVP",
    funding: "None",
    links: [
      {
        label: "AFRETEC article",
        href: "https://afretec.uonbi.ac.ke/afretec-uon-student-makerthon-2024-a-showcase-of-innovation-and-collaboration/",
      },
    ],
  },
  {
    slug: "navigotransport-barbados",
    title: "NavigoTransport × Barbados (Public Transport Prototype)",
    short: "Prototype public transport system for a national authority.",
    description:
      "Early-stage consultancy and prototype demonstration for the Barbados Transport Board, visualising routes, schedules, and user flows.",
    tags: ["Transport", "Software", "Consulting"],
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
      "Built and tuned a multi-node HPC cluster, executed benchmarks and advanced scientific/AI workloads, and presented results to an international panel.",
    tags: ["HPC", "Systems", "International"],
    stage: "Completed",
    funding: "None",
    stack: ["Linux", "Slurm", "MPI", "Benchmarking"],
  }, 

  // ===== Electronics / Signal Processing =====
  {
    slug: "clap-based-electronic-lock",
    title: "Clap-Based Detection Subsystem (Electronic Lock)",
    short: "Signal-processing-based clap detection with timing logic.",
    description:
      "Designed and implemented a clap-based detection subsystem as part of a multi-stage electronic lock, focusing on detection accuracy and integration.",
    tags: ["Electronics", "Signal Processing"],
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
    stage: "Completed",
    funding: "None",
    stack: ["MEMS microphone", "Goertzel", "PID control", "PWM motor control"],
  },
];
