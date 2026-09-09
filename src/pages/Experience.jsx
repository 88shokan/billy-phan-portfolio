import PageHeader from '../components/PageHeader.jsx';
import experience from '../data/experience.js';

export default function Experience() {
    return (
        <>
            <PageHeader
                numeral="II"
                title="Experience"
                lead="Some of my experience, pertaining to my career!"
            />

            <div className="container section">
                <ol className="timeline">
                    {experience.map((role) => (
                        <li className="timeline-item" key={role.id}>
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                                <p className="timeline-meta">{role.meta}</p>
                                <h3 className="timeline-role">{role.role}</h3>
                                <p className="timeline-org">{role.org}</p>

                                <ul className="timeline-points">
                                    {role.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                {role.stack && role.stack.length > 0 && (
                                    <ul className="skill-tags timeline-stack">
                                        {role.stack.map((tool) => (
                                            <li
                                                key={tool.label}
                                                className={tool.tone ? `skill-tag skill-tag-${tool.tone}` : 'skill-tag'}
                                            >
                                                {tool.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}
