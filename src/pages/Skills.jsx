import PageHeader from '../components/PageHeader.jsx';
import skills from '../data/skills.js';

export default function Skills() {
    return (
        <>
            <PageHeader
                numeral="III"
                title="Skills"
                lead="The tools I reach for first, roughly in the order I reach for them."
            />

            <div className="container section">
                <div className="skill-clusters">
                    {skills.map((cluster) => (
                        <div className="skill-cluster" key={cluster.group}>
                            <h4>{cluster.group}</h4>
                            <ul className="skill-tags">
                                {cluster.items.map((item) => (
                                    <li
                                        key={item.label}
                                        className={item.tone ? `skill-tag skill-tag-${item.tone}` : 'skill-tag'}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
