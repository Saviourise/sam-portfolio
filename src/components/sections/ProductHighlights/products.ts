import {
  stylemeupImg,
  dailyfoodImg,
  esogerImg,
  prodilyImg,
  rayandsonsmobilevaletImg,
  expressconsultcleaningImg,
  plutoenterprisellcImg,
  wattlensImg,
  kuponlogisticsImg,
} from '../../../assets/project-images'

const projects = [
  {
    badge: 'contract',
    image: stylemeupImg,
    imageAlt: 'StyleMeUp app screenshot',
    title: 'StyleMeUp — Fashion Platform',
    summary: [
      'StyleMeUp is a fashion discovery platform that connects users with curated outfit inspiration, personal styling recommendations, and seamless shopping experiences across multiple brands.',
      'Led cross-functional product discovery sessions, defined user personas, mapped end-to-end user journeys, and prioritised the feature backlog through MoSCoW analysis in collaboration with the design and engineering teams.',
    ],
    result: 'Shipped v1 on schedule across iOS and Android with a 4.6-star launch rating and 12k downloads within the first 30 days.',
    info: [
      { label: 'Year', value: '2023' },
      { label: 'Role', value: 'Product Manager / QA' },
    ],
    links: [
      { label: 'Live Demo', href: 'https://stylemeup.ng' },
      { label: 'Case Study', href: '#' },
    ],
  },
  {
    badge: 'contract',
    image: prodilyImg,
    imageAlt: 'Prodily app screenshot',
    title: 'Prodily — AI-Powered Team Productivity & Sustainability Tool',
    summary: [
      'Teams lacked visibility into productivity patterns and inefficiencies, leading to wasted effort and poor decision-making.',
      'Defined and led development of an AI-powered platform to track team activity and generate actionable productivity insights.',
      'Analyzed team activity data and usage trends (Excel + structured tracking) to identify inefficiencies. Used insights to prioritize features such as performance tracking and workflow recommendations.',
      'Worked with cross-functional teams to align product features with real user needs and business goals.',
    ],
    result: 'Improved team productivity visibility and tracking. Enabled smarter workflow decisions through AI-driven insights. Reduced inefficiencies in task execution (qualitative impact).',
    info: [
      { label: 'Year', value: '2025' },
      { label: 'Role', value: 'Co-founder | Product Manager' },
    ],
    links: [
      { label: 'Live Demo', href: 'https://prodily.tech' },
    ],
  },
  {
    badge: 'contract',
    image: dailyfoodImg,
    imageAlt: 'DailyFood app screenshot',
    title: 'Dailyfood.app — Web & Mobile Food Platform',
    summary: [
      'Led product coordination across 10 cross-functional teams to deliver a web and mobile food platform, ensuring alignment between product vision, user experience, and execution timelines.',
      'Conducted product and design reviews to identify usability gaps and improve user flows. Used user feedback and behavioral insights to guide feature prioritization and maintain consistency across the platform.',
      'Collaborated closely with stakeholders and engineering teams to resolve blockers and maintain delivery momentum.',
    ],
    result: 'Successfully launched a multi-team product on time while maintaining quality and user experience consistency.',
    info: [
      { label: 'Client', value: 'DailyFood' },
      { label: 'Year', value: '2025' },
      { label: 'Role', value: 'Product Manager' },
    ],
    links: [
      { label: 'View Project', href: 'https://dailyfood.app' },
    ],
  },
  {
    badge: 'contract',
    image: wattlensImg,
    imageAlt: 'Wattlens app screenshot',
    title: 'Wattlens — Clean, Analyse & Report Energy Data (Sweden)',
    summary: [
      'Led product delivery for an energy data platform focused on eliminating manual spreadsheet workflows in data cleaning, analysis, and reporting. Broke down real user processes to identify time-consuming tasks and worked closely with engineering to introduce automation and streamline the entire workflow into a single system.',
      'Used data analysis and user feedback to prioritize features that directly improved speed and usability, ensuring the product solved a clear, high-friction problem rather than adding unnecessary complexity.',
    ],
    result: 'Reduced reporting time from hours to under 5 minutes and improved overall data processing efficiency.',
    info: [
      { label: 'Client', value: 'Wattlens' },
      { label: 'Year', value: '2025' },
      { label: 'Role', value: 'Project Manager' },
    ],
    links: [
      { label: 'View Project', href: 'https://wattlens.com' },
    ],
  },
  {
    badge: 'contract',
    image: rayandsonsmobilevaletImg,
    imageAlt: 'Ray and Sons Mobile Valet screenshot',
    title: 'RayAndSonsMobileValet (UK)',
    summary: [
      'Managed and improved service operations for a UK-based mobile car valet business, focusing on streamlining booking, scheduling, and service execution.',
      'Identified inefficiencies in appointment coordination and workflow management, and introduced structured processes to improve task tracking and team alignment. Worked closely with stakeholders to ensure smooth daily operations and consistent service delivery.',
      'Applied a data-informed approach by reviewing booking patterns and service timelines to optimize scheduling and reduce operational friction.',
    ],
    result: 'Increased scheduling efficiency, reduced service delays, and improved overall customer experience, enabling more reliable and scalable service delivery.',
    info: [
      { label: 'Client', value: 'Ray and Sons LLC' },
      { label: 'Year', value: '2026' },
      { label: 'Role', value: 'Project Manager | Business Developer' },
    ],
    links: [
      { label: 'View Project', href: '#' },
    ],
  },
  {
    badge: 'contract',
    image: expressconsultcleaningImg,
    imageAlt: 'Express Consult Cleaning screenshot',
    title: 'ExpressConsultCleaning (USA)',
    summary: [
      'Led the structuring and optimization of operations for a cleaning service business, focusing on improving booking flow, service coordination, and overall delivery efficiency. Analyzed how appointments were scheduled and executed, identifying gaps in communication and task tracking that affected service consistency.',
      'Worked closely with stakeholders to introduce clearer workflows, improve scheduling structure, and ensure better alignment between customer requests and service execution. Used simple data tracking and service patterns to make more informed decisions around capacity and daily operations.',
    ],
    result: 'Improved scheduling efficiency, reduced service delays, and created a more structured and reliable service delivery process.',
    info: [
      { label: 'Year', value: '2024' },
      { label: 'Role', value: 'Project Manager | Executive Assistant' },
    ],
    links: [
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    badge: 'contract',
    image: plutoenterprisellcImg,
    imageAlt: 'Pluto Enterprise LLC screenshot',
    title: 'Pluto Enterprise LLC — Logistics & Operations Optimization (USA)',
    summary: [
      'Led the coordination and optimization of logistics operations across transportation, freight brokerage, dispatching, and third-party logistics (3PL). Focused on improving workflow efficiency, team alignment, and operational visibility within a fast-paced logistics environment.',
      'Analyzed existing processes and identified inefficiencies in manual coordination and communication. Implemented structured task management and streamlined workflows using digital tools, enabling better tracking, faster decision-making, and improved collaboration across teams.',
    ],
    result: 'Improved operational efficiency, reduced dispatch delays, and enhanced visibility across logistics processes, supporting more scalable and reliable service delivery.',
    info: [
      { label: 'Client', value: 'Pluto Enterprise LLC' },
      { label: 'Year', value: '2022' },
      { label: 'Role', value: 'Product Manager' },
    ],
    links: [
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    badge: 'contract',
    image: kuponlogisticsImg,
    imageAlt: 'Kupon Logistics screenshot',
    title: 'Kupon Logistics',
    summary: [
      'Led the coordination and optimization of logistics and delivery operations, focusing on improving dispatch efficiency, order tracking, and communication between teams. Identified gaps in how deliveries were managed and introduced more structured workflows to reduce delays and improve visibility across operations.',
      'Worked closely with stakeholders and operational teams to align business needs with execution, while using data from delivery patterns and timelines to guide process improvements and prioritization.',
    ],
    result: 'Improved delivery coordination, reduced operational delays, and increased visibility across the logistics workflow.',
    info: [
      { label: 'Year', value: '2022' },
      { label: 'Role', value: 'Web Developer' },
    ],
    links: [
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    badge: 'contract',
    image: esogerImg,
    imageAlt: 'Esoger app screenshot',
    title: 'Esoger — Engineering Solutions & Process Training Platform (Libya)',
    summary: [
      'Led product development and coordination to deliver a web-based engineering solutions and e-learning platform, aligning technical workflows, user experience, and execution. Translated complex engineering processes into intuitive product features, while optimizing onboarding, enrollment flows, and navigation using user behavior insights.',
      'Conducted product structuring across training modules, interactive tools, and subscription tiers to improve accessibility and scalability. Collaborated closely with engineering experts and development teams to resolve blockers and maintain delivery momentum.',
    ],
    result: 'Successfully launched a scalable platform that simplified engineering workflows, improved access to technical training, and increased user engagement through structured learning and subscription models.',
    info: [
      { label: 'Client', value: 'Esoger' },
      { label: 'Year', value: '2022' },
      { label: 'Role', value: 'Product Manager / QA' },
    ],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'Case Study', href: '#' },
    ],
  },
]

export default projects
