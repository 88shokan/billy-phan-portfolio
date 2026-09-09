/*
 * `tone` sets the card's pigment, which drives its top bar, its tag and
 * its hover shadow: orange | green | pink | cobalt | yellow | violet.
 *
 * `badges` is a list, and takes as many as you like — they wrap onto
 * new rows inside the card footer. Two forms, mix them freely:
 *
 *     badges: ['React', 'JavaScript']                // takes the card's tone
 *     badges: [{ label: 'React', tone: 'cobalt' }]   // its own colour
 *
 * `live` and `code` are optional — leave a key out entirely and that
 * link is not rendered. Prefer omitting it to pointing it at '#', which
 * looks like a working link and does nothing.
 */

const projects = [
    {
        id: 'project-one',
        tag: 'Web App',
        title: 'Portfolio Site',
        blurb: "The current site you're on! The style is inspired by an art cover for a song. Made with React, HTML, CSS, and JavaScript.",
        tone: 'orange',
        badges: ['React', 'JavaScript', 'HTML', 'CSS'],
        year: '2026'
        // TODO: once this is pushed, add:
        //   code: 'https://github.com/88shokan/<repo>',
        //   live: 'https://88shokan.github.io'
    },
    {
        id: 'project-two',
        tag: 'Script',
        title: 'Data Migration Script',
        blurb: 'During my internship at McCormick Taylor, I wrote a script in C# to import 150+ project records from the company website to a SQL database.',
        tone: 'cobalt',
        badges: ['C#', 'SQL Server', 'Dapper'],
        year: '2026',
        code: 'https://github.com/88shokan/MigrationScriptApp'
    },
    {
        id: 'project-three',
        tag: 'Hackathon Project',
        title: 'Neat Street',
        blurb: 'During OwlHacks 2024, I worked with my team to create a mobile application that gamified the process of cleaning up litter in your neighborhood. The app was built with Flask, Swift, Hugging Face, and Python.',
        tone: 'green',
        badges: ['Python', 'Flask', 'Swift', 'Hugging Face'],
        year: '2024',
        code: 'https://github.com/88shokan/Neat-Street'
    }
];

export default projects;
