import { stylemeupImg, dailyfoodImg, esogerImg } from '../../../assets/project-images'


const projects = [
    {
        badge: 'contract',
        image: stylemeupImg,
        imageAlt: 'StyleMeUp app screenshot',
        title: 'StyleMeUp — Fashion Platform',
        summary: [
            'StyleMeUp is a fashion discovery platform that connects users with curated outfit inspiration, personal styling recommendations, and seamless shopping experiences across multiple brands.',
            'Lead cross-functional product discovery sessions, defined user personas, mapped end-to-end user journeys, and prioritised the feature backlog through MoSCoW analysis in collaboration with the design and engineering teams.',
        ],
        result: 'Shipped v1 on schedule across iOS and Android with a 4.6-star launch rating and 12k downloads within the first 30 days.',
        info: [
            { label: 'Year', value: '2023' },
            { label: 'Role', value: 'Product Manager / QA' },
        ],
        links: [
            { label: 'Live Demo', href: '#' },
            { label: 'Case Study', href: '#' },
        ],
    },
    {
        badge: 'contract',
        image: dailyfoodImg,
        imageAlt: 'DailyFood app screenshot',
        title: 'Dailyfood.app — Web & Mobile Food Platform',
        summary: [
            'Lead product coordination across 10 cross-functional teams to deliver a web and mobile food platform, ensuring alignment between product vision, user experience, and execution timelines.',
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
            { label: 'View Project', href: '#' },
        ],
    },
    {
        badge: 'contract',
        image: esogerImg,
        imageAlt: 'Esoger app screenshot',
        title: 'Esoger — Engineering Solutions & Process Training Platform ( Libya )',
        summary: [
            'Lead product development and coordination to deliver a web-based engineering solutions and e-learning platform, aligning technical workflows, user experience, and execution. Translated complex engineering processes into intuitive product features, while optimizing onboarding, enrollment flows, and navigation using user behavior insights.',
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

export default projects;