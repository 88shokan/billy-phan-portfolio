/*
 * Roles, newest first. Add one by copying an object — the timeline
 * markers cycle colour on their own, so there is nothing else to touch.
 *
 * `stack` tag colours: cobalt | orange | green | yellow | violet | pink,
 * or omit `tone` for a plain taupe swatch.
 */

const experience = [
    {
        id: 'mccormick-taylor',
        meta: 'May 2026 — August 2026 · Philadelphia, PA',
        role: 'Web Development Intern',
        org: 'McCormick Taylor',
        points: [
            'Engineered a C# data migration pipeline using the WordPress REST API and Dapper to import 150+ project records from the company website into a SQL Server database, eliminating manual data entry.',
            'Lead the rebrand for the ASCE Structural Engineering Institute Philadelphia Chapter, utilizing Adobe XD to design the User Experience.',
            'Assisting with the design and program of company internal web components, using Adobe XD, C# and JavaScript.'
        ],
        stack: [
            { label: 'C#', tone: 'cobalt' },
            { label: 'JavaScript', tone: 'orange' },
            { label: 'Blazor', tone: 'green' },
            { label: 'Adobe XD', tone: 'yellow' },
            { label: 'WordPress', tone: 'violet' },
            { label: 'Azure', tone: 'pink' }
        ]
    },
    {
        id: 'owlhacks',
        meta: 'Dec 2024 — Oct 2025 · Philadelphia, PA',
        role: 'Graphic Designer',
        org: 'OwlHacks',
        points: [
            'Utilized Canva to design a sponsorship prospectus and collaborated on the theme for OwlHacks 2025, tailoring materials to appeal to investors and brands. Secured sponsorships from Fortune 500 companies like SAP, and Google.',
            'Managed the creation of the OwlHacks 2025 trailer and designed graphics for the OwlHacks Instagram page, ensuring all deliverables were completed on time by coordinating with over 80+ team members via Slack. Increased social media engagement and event visibility through consistent and appealing visuals.'
        ],
        stack: [
            { label: 'Canva', tone: 'yellow' },
            { label: 'Photoshop', tone: 'cobalt' },
            { label: 'After Effects', tone: 'green' }
        ]
    }
];

export default experience;
