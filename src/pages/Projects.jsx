import PageHeader from '../components/PageHeader.jsx';
import projects from '../data/projects.js';

export default function Projects() {
    return (
        <>
            <PageHeader
                numeral="IV"
                title="Projects"
                lead="Some of my favorite projects I built during work, school, and in my free time!"
            />

            <div className="container section">
                <div className="grid grid-3">
                    {projects.map((project) => (
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
                                <span className={`badge badge-${project.tone}`}>{project.badge}</span>
                                <span className="card-year">{project.year}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}
