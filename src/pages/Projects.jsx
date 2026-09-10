import PageHeader from '../components/PageHeader.jsx';
import projects from '../data/projects.js';

/*
 * Badges accept a bare string or a { label, tone } object, and fall back
 * to the card's own pigment when no tone is given — so the common case
 * stays `badges: ['React', 'CSS']` and per-badge colour is there when a
 * card needs it. The singular `badge` is still honoured so an older
 * entry pasted in does not silently render an empty footer.
 */
function badgeList(project) {
    const raw = project.badges || (project.badge ? [project.badge] : []);

    return raw.map((entry) =>
        typeof entry === 'string'
            ? { label: entry, tone: project.tone }
            : { label: entry.label, tone: entry.tone || project.tone }
    );
}

export default function Projects() {
    return (
        <>
            <PageHeader
                numeral="III"
                title="Projects"
                lead="Some of my favorite projects I built during work, school, and in my free time!"
            />

            <div className="container section">
                <div className="grid grid-3">
                    {projects.map((project) => {
                        const badges = badgeList(project);

                        return (
                            <article className={`card card-${project.tone}`} key={project.id}>
                                <div className="card-color-bar" />
                                <div className="card-body">
                                    <span className="card-tag">{project.tag}</span>
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-text">{project.blurb}</p>

                                    {(project.live || project.code) && (
                                        <div className="card-links">
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                                            )}
                                            {project.code && (
                                                <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="card-footer">
                                    {badges.length > 0 && (
                                        <ul className="card-badges">
                                            {badges.map((badge) => (
                                                <li key={badge.label} className={`badge badge-${badge.tone}`}>
                                                    {badge.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <span className="card-year">{project.year}</span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
