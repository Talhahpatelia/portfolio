import type { ImageItem } from "@/lib/types";

/**
 * Photos, certificates and screenshots, described once and reused by the
 * awards and projects. Alt text says what is in the picture; captions say who,
 * where and who took it. `scan` is for certificates and documents, `screen` is for app screens and renders; both are shown whole (fit: "contain").
 */
const photo = (src: string, width: number, height: number, alt: string, caption?: string): ImageItem => ({
  src,
  width,
  height,
  alt,
  caption,
  kind: "photo",
});
const scan = (src: string, width: number, height: number, alt: string, caption?: string): ImageItem => ({
  src,
  width,
  height,
  alt,
  caption,
  fit: "contain",
  kind: "certificate",
});
const screen = (src: string, width: number, height: number, alt: string, caption?: string): ImageItem => ({
  src,
  width,
  height,
  alt,
  caption,
  fit: "contain",
  kind: "screen",
});

export const images = {
  // Student supercomputing
  asc25Awards: photo(
    "/images/awards/asc25-awards-evening.jpg",
    1600,
    1050,
    "The Wits HPC team on stage at the ASC25 awards evening in Xining, China, each holding a certificate",
    "The Wits HPC team at the ASC25 awards evening in Xining, China. Talhah Patelia is fourth from the left. Photo: Wits HPC.",
  ),
  isc25Certificate: scan(
    "/images/awards/isc25-certificate.jpg",
    1027,
    722,
    "ISC25 Student Cluster Competition certificate of achievement awarded to Talhah Patelia",
    "Certificate of achievement, ISC25, June 2025.",
  ),
  chpcTeam: photo(
    "/images/awards/chpc2024-wits-a-team.jpg",
    799,
    611,
    "The four members of the Wits A team standing in front of their booth at the CHPC National Student Cluster Competition",
    "Wits A at the CHPC National Student Cluster Competition, Gqeberha, December 2024. Photo: CHPC.",
  ),
  chpcBooth: photo(
    "/images/awards/chpc2024-wits-a-booth.jpg",
    799,
    533,
    "Two members of the Wits A team working together at a laptop in their booth",
    "Wits A at work in their booth. Photo: CHPC.",
  ),

  // UZH Deep Dive into Blockchain, 2026
  uzhTeam: photo(
    "/images/awards/uzh-ddib-team-medals.jpg",
    1600,
    1067,
    "Five members of the winning team wearing gold medals on rainbow ribbons in front of a projected slide that lists them as first place in the best group project",
    "The Pacy team with their first-place medals for the best group project. Talhah Patelia is second from the right.",
  ),
  uzhVoting: photo(
    "/images/awards/uzh-ddib-voting.jpg",
    860,
    960,
    "Talhah Patelia receiving a UZH Blockchain Center badge in front of a slide that names him as winner of the voting challenge",
    "Receiving a winner's badge for the DAO governance (voting) challenge.",
  ),
  uzhPow: photo(
    "/images/awards/uzh-ddib-pow.jpg",
    1600,
    1067,
    "Talhah Patelia, on the right, standing with a man in a blue hoodie while they hold a small badge",
    "The Proof-of-Work mining challenge.",
  ),
  uzhCardano: photo(
    "/images/awards/uzh-ddib-cardano.jpg",
    1600,
    1067,
    "Talhah Patelia, on the right, standing with a man in a blue hoodie while they hold a small badge",
    "The Cardano staking challenge.",
  ),
  uzhPresentation: photo(
    "/images/awards/uzh-ddib-presentation.jpg",
    1600,
    1067,
    "Talhah Patelia speaking into a microphone while presenting the final project with two teammates",
    "Presenting the final project, Pacy.",
  ),
  uzhCertificate: photo(
    "/images/awards/uzh-ddib-certificate.jpg",
    1600,
    1067,
    "Talhah Patelia shaking hands with a man while holding his University of Zurich confirmation for the Deep Dive into Blockchain summer school",
    "With the University of Zurich confirmation for the summer school, 5 to 24 July 2026.",
  ),

  // AFRETEC
  nairobiTeam: photo(
    "/images/awards/afretec-nairobi-team.jpg",
    1600,
    1200,
    "Talhah Patelia in a dark suit with five team members at the C4DLab in Nairobi, in front of a cardboard storage prototype and a cardboard map of Kenya",
    "With the team at the C4DLab, University of Nairobi, 2024.",
  ),
  nairobiDemo: photo(
    "/images/awards/afretec-nairobi-demo.jpg",
    1600,
    1200,
    "Talhah Patelia leaning over a cardboard model of the storage units while the team looks on, beside a cardboard map of Kenya",
    "Showing the prototype: cardboard storage units and a map of Kenya.",
  ),
  seedCertificates: photo(
    "/images/awards/afretec-seed-certificates.jpg",
    1600,
    1067,
    "Talhah Patelia, Jared Swart and three other participants standing on stage holding certificates of recognition",
    "Certificates of recognition at the AFRETEC SEED Challenge dinner at Wits, 2026. Talhah Patelia is on the left and Jared Swart is second from left.",
  ),
  seedPortrait: photo(
    "/images/awards/afretec-seed-portrait.jpg",
    1600,
    1067,
    "Talhah Patelia in a grey suit and round glasses, resting his chin on his hand, with Jared Swart smiling behind him at the AFRETEC SEED Challenge dinner",
    "At the AFRETEC SEED Challenge dinner at Wits, with Jared Swart behind.",
  ),
  seedStage: photo(
    "/images/awards/afretec-seed-stage.jpg",
    1600,
    1067,
    "About twenty winners, coaches and guests on stage at Wits making W hand signs, with Talhah Patelia third from the left",
    "On stage at the AFRETEC SEED Challenge dinner at Wits. Talhah Patelia is third from the left.",
  ),

  // Certificates
  studentEntrepreneur: scan(
    "/images/awards/student-entrepreneur-certificate.jpg",
    1400,
    1010,
    "Certificate of Student Entrepreneur Recognition from the Wits Innovation Centre awarded to Talhah Patelia",
    "Certificate of Student Entrepreneur Recognition, 26 April 2024.",
  ),
  agofTag: scan(
    "/images/awards/agof-candidate-fellow-tag.jpg",
    1400,
    2157,
    "Jamboree 2024 name tag reading Talhah Patelia, Allan Gray Orbis Foundation, Candidate Fellow",
    "Jamboree 2024 name tag.",
  ),
  wesafCertificate: scan(
    "/images/awards/wesaf-certificate.jpg",
    1400,
    953,
    "Certificate of Merit from the Wits-Edinburgh Sustainable African Futures Doctoral Programme awarded to Talhah Patelia",
    "Certificate of Merit, 4 September 2023.",
  ),
  ieeeCertificate: scan(
    "/images/awards/ieee-certificate.jpg",
    1400,
    1013,
    "IEEE Entrepreneurship Prospector Workshop 2023 certificate for Talhah Patelia",
    "The workshop certificate records participation and completion. IEEE's report names Gotcha as the winning pitch.",
  ),
  mtnCertificate: scan(
    "/images/awards/mtn-certificate.jpg",
    953,
    1384,
    "MTN Business App Academy NQF level 5 completion certificate for Talhah Patelia",
    "Completion certificate, 16 September 2021.",
  ),
  eskom2019Certificate: scan(
    "/images/awards/eskom-2019-certificate.jpg",
    1400,
    1924,
    "Eskom Expo for Young Scientists certificate awarding Talhah Patelia of Auckland Park Academy of Excellence a gold medal",
    "Gold medal certificate, 20 July 2019.",
  ),
  sayessCertificate: scan(
    "/images/awards/sayess-certificate.jpg",
    1400,
    2194,
    "SA-YESS certificate awarding Talhah Patelia a gold medal in the robotics category for Scietmeer",
    "SA-YESS gold medal certificate, 29 November 2019.",
  ),
  ngGoldCertificate: scan(
    "/images/awards/north-gauteng-gold-certificate.jpg",
    1400,
    2135,
    "North Gauteng Science Fair gold certificate awarded to Talhah Patelia for Scietmeer3, a precision robot and mobile science lab",
    "Gold certificate.",
  ),
  ngGrottobotPrize: scan(
    "/images/awards/north-gauteng-grottobot-prize.jpg",
    1400,
    1992,
    "North Gauteng Science Fair special prize certificate for the best project in the GrottoBot Challenge, sponsored by SAAB Grintek Defence",
    "Special prize: best project in the GrottoBot Challenge.",
  ),
  ngSecondBest: scan(
    "/images/awards/north-gauteng-second-best.jpg",
    1400,
    2141,
    "North Gauteng Science Fair special prize certificate for the second best overall project, sponsored by TT3 Repairs",
    "Special prize: second best overall project.",
  ),
  ngHandshake: photo(
    "/images/awards/north-gauteng-2019-special-prize.jpg",
    784,
    836,
    "Talhah Patelia shaking hands with a presenter while holding his special prize certificate",
    "Receiving a special prize.",
  ),

  // Project photos and screens
  ewbStructure: photo(
    "/images/projects/ewb-prototype-structure.jpg",
    1400,
    1050,
    "A small frame built from plastic bottles joined by orange connectors, standing on a wooden table",
    "The frame, built at small scale.",
  ),
  ewbModel: photo(
    "/images/projects/ewb-prototype-model.jpg",
    1400,
    1050,
    "A small model made from plastic bottles and an orange connector, standing on a sofa",
    "A smaller model.",
  ),
  ewbConnector: photo(
    "/images/projects/ewb-connector.jpg",
    1400,
    1050,
    "An orange connector holding several plastic bottles together with a rod through it",
    "An orange connector joining the bottles.",
  ),
  maftuhaExam: screen(
    "/images/projects/maftuha-exam-screen.jpg",
    1211,
    412,
    "Maftuha's exam screen with an exam paper on the left and an answer editor on the right",
    "Maftuha's exam screen, from the TADHack demo video.",
  ),
  navigoPlanner: screen(
    "/images/projects/navigo-planner.jpg",
    900,
    1863,
    "Navigo's trip planner showing a map of the Wits campuses with From and To fields",
    "Planning a trip.",
  ),
  navigoRoute: screen(
    "/images/projects/navigo-route.jpg",
    900,
    1863,
    "Navigo showing a walking and bus route between AMIC Deck and Wits Junction Residence",
    "A trip result.",
  ),
  navigoReminder: screen(
    "/images/projects/navigo-reminder.jpg",
    900,
    1863,
    "Navigo's reminder settings, offering an alert five, ten, fifteen, twenty or thirty minutes before the bus",
    "Departure reminders.",
  ),
  navigoLostFound: screen(
    "/images/projects/navigo-lostfound.jpg",
    900,
    1863,
    "Navigo's lost-and-found form for reporting a found item",
    "Lost and found.",
  ),
  navigoMap: screen(
    "/images/projects/navigo-map.jpg",
    900,
    1863,
    "Navigo's map with a route highlighted across the Wits campus",
    "The route on the map.",
  ),
};
