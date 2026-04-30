import { 
  FaBalanceScale, 
  FaMoneyBillWave, 
  FaGraduationCap, 
  FaSeedling,
  FaUserGraduate,
  FaGavel,
  FaHeartbeat,
  FaHandHoldingHeart,
  FaLandmark,
  FaChartLine 
} from "react-icons/fa";

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Aims & Objectives", path: "/aims" },
    ],
  },
  {
    label: "Management",
    path: "/management",
    children: [
      { label: "Management Team", path: "/management" },
      { label: "Organogram", path: "/organogram" },
    ],
  },
  { label: "Projects", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://placehold.co/1400x600/1a4a6b/ffffff?text=JDPC+Enugu+Diocese",
    title: "Justice, Development and Peace",
    subtitle: "Championing human rights and good governance across Enugu Diocese",
  },
  {
    id: 2,
    image: "https://placehold.co/1400x600/2d7a9a/ffffff?text=Community+Outreach",
    title: "Serving 2.6 Million People",
    subtitle: "Collaborating with Caritas and six other Dioceses for integral human development",
  },
  {
    id: 3,
    image: "https://placehold.co/1400x600/8B6914/ffffff?text=Empowering+Communities",
    title: "Building Capacity for Change",
    subtitle: "Faith-based, non-profit, non-governmental organization committed to establishing just structures",
  },
];

export const THEMATIC_AREAS = [
  {
    icon: FaBalanceScale,
    title: "Good Governance",
    description: "JDPC Enugu promotes human rights, good governance and dignity, uplifting the less privileged through just structures and fostering transparency and social transformation.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Microfinance",
    description: "JDPC Enugu's microfinance initiatives empower marginalized individuals by providing financial tools and support, fostering economic growth and self-sufficiency.",
  },
  {
    icon: FaGraduationCap,
    title: "Capacity Building",
    description: "JDPC Enugu's capacity building for development and vocational skills empowers the less privileged through various vocational and skill-building programs.",
  },
  {
    icon: FaSeedling,
    title: "Agriculture & Livelihoods",
    description: "This JDPC Enugu initiative prioritizes uplifting the less privileged through agricultural empowerment, fostering sustainable livelihoods and community prosperity.",
  },
  {
    icon: FaUserGraduate,
    title: "Civic/Voter Education",
    description: "JDPC Enugu actively encourages civic awareness, educating citizens on voting processes, ensuring informed choices during elections for an empowered community.",
  },
  {
    icon: FaGavel,
    title: "Legal Aid for Prisoners",
    description: "JDPC Enugu offers crucial legal aid and counseling to those awaiting trial, championing justice and human rights for incarcerated individuals.",
  },
  {
    icon: FaHeartbeat,
    title: "Healthcare",
    description: "JDPC Enugu advances healthcare by providing medical services, health education, and advocacy for underserved communities, fostering improved well-being.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Charitable Activities",
    description: "JDPC Enugu actively engages in charitable activities, delivering vital aid, services, and support to marginalized persons, fostering a spirit of compassion.",
  },
  {
    icon: FaLandmark,
    title: "Tax Justice",
    description: "JDPC Enugu advocates for tax justice, promoting fair taxation policies, educating communities, and fostering transparency to ensure equitable socio-economic development.",
  },
  {
    icon: FaChartLine,
    title: "Monitoring Programme",
    description: "JDPC Enugu operates a parish and grassroots monitoring programme to oversee and support local initiatives, ensuring effective development at the grassroots level.",
  },
];

// Keep the rest of your data unchanged
export const AIMS = [
  "To promote the quality of life for all people, through the enhancement of human development.",
  "To promote and sustain human rights and dignity.",
  "To animate and form groups to participate in their own development for the common good.",
  "To promote good governance and accountability through budget advocacy; citizens' enlightenment campaigns, town hall meetings, workshops aimed at engaging government structures to ensure accountability and transparency; Election monitoring to ensure the votes of the people counts in the electoral processes.",
  "To build capacity of individuals and groups by giving them voice so that they are able to help themselves and contribute meaningfully to the society.",
  "To identify unjust structures and take corrective actions.",
  "To create a forum for information gathering and dissemination as a community empowerment tool.",
  "To promote Legal assistance, Legal aid Legal and counselling Legal services for Awaiting Trial Persons Public interest litigation.",
  "To promote the Catholic Social Teachings, as a way of contributing to the process of social transformation.",
  "To network with development partners, international agencies, government agencies and NGOs for integral human development, poverty reduction and good governance.",
];

export const MANAGEMENT_STAFF = [
  { name: "Chinedu Innocent", role: "Program Manager", image: "https://placehold.co/200x200/1a4a6b/ffffff?text=CI" },
  { name: "Chinonyelum Viola Chibuoke", role: "Human Resource Manager", image: "https://placehold.co/200x200/2d7a9a/ffffff?text=CVC" },
  { name: "Chinedu Casmir Aziegbo", role: "DEC Officer 1", image: "https://placehold.co/200x200/1a4a6b/ffffff?text=CCA" },
  { name: "Jane Chime", role: "Household and Economic Strengthening (HES) Officer", image: "https://placehold.co/200x200/2d7a9a/ffffff?text=JC" },
  { name: "Chinenye Okafor", role: "Monitoring and Evaluation (M&E) Officer", image: "https://placehold.co/200x200/1a4a6b/ffffff?text=CO" },
  { name: "Chinonyelum Nwaeze", role: "Data Officer 2", image: "https://placehold.co/200x200/2d7a9a/ffffff?text=CN" },
  { name: "Ndidiamaka Ngwu", role: "Care and Support (C&S) Officer", image: "https://placehold.co/200x200/1a4a6b/ffffff?text=NN" },
  { name: "Cynthia Nnedi Nworie", role: "Ad-Hoc Staff", image: "https://placehold.co/200x200/2d7a9a/ffffff?text=CNN" },
  { name: "Emmanuella Ugwu", role: "Finance Officer", image: "https://placehold.co/200x200/1a4a6b/ffffff?text=EU" },
];

export const ONGOING_PROJECTS = ["PROMIC", "OVC Access", "Tax Justice", "ActionAid"];

export const PAST_PROJECTS = [
  "Faster by CRS",
  "OVC 4GATE by CCFN",
  "Voice to the people V2P by Christian Aid Nigeria",
  "Training youths in poultry farming with the empowerment of over 150 youths with 100 day-old chickens.",
];

export const GALLERY_CATEGORIES = [
  "All",
  "2022 Handover Start-up Kits for Out-of-School Children",
  "Group Photos for Tax Justice",
  "Program Meeting",
  "2021 Handover Start-up Kits for Out-of-School People",
  "JDPC Enugu Team's Advocacy Visit to Enugu East Local Government Chairman, Chief Alex Ugwu",
];

export const GALLERY_IMAGES = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `https://placehold.co/400x300/1a4a6b/ffffff?text=Gallery+${i + 1}`,
  category: GALLERY_CATEGORIES[Math.floor(Math.random() * (GALLERY_CATEGORIES.length - 1)) + 1],
  alt: `JDPC Activity ${i + 1}`,
}));