import PageHeader from '../components/PageHeader.jsx';
import { EDUCATION } from '../data/site.js';

export default function About() {
    return (
        <>
            <PageHeader
                numeral="I"
                title="About"
                lead="Nice to meet you! My name is Billy Phan, a Software Engineer and Computer Science student at Temple University, based in Philadelphia, PA."
            />

            <div className="container section">
                <div className="about-layout">
                    {/*
                      * The frame crops to 4:5 with object-fit, so any shape of
                      * photo works. If the crop cuts your head off, adjust
                      * --photo-focus on .about-photo in styles.css.
                      */}
                    <div className="about-photo">
                        <figure className="photo-frame">
                            <div className="photo-plate">
                                <img src="/resources/imgs/billy_selfie.jpg" alt="Billy Phan" decoding="async" />
                            </div>
                        </figure>
                    </div>

                    <div className="prose">
                        <p>
                            I grew up always being around technology, which is pivotal to my interest in
                            Software Engineering. I love tackling complex problems and creating efficient
                            solutions to them.
                        </p>
                        <p>
                            I am interested in all facets of Software Engineering, but I am particularly
                            interested in the <strong>Web Development</strong> side of things.
                        </p>
                        <p>
                            Outside of work and school, I enjoy playing video games, going to the gym,
                            cooking, listening to music, and doing freelance video-editing!
                        </p>
                    </div>

                    <aside className="card card-cobalt edu-card">
                        <div className="card-color-bar" />
                        <div className="card-body edu-body">
                            <div className="edu-main">
                                <span className="card-tag">Education</span>
                                <h3 className="card-title">{EDUCATION.degree}</h3>
                                <p className="edu-school">{EDUCATION.school}</p>
                                <p className="edu-meta">{EDUCATION.meta}</p>
                                <p className="card-text">{EDUCATION.societies}</p>
                            </div>
                            <div className="edu-side">
                                <h4 className="edu-subhead">Important Coursework</h4>
                                <ul className="skill-tags edu-tags">
                                    {EDUCATION.coursework.map((course) => (
                                        <li key={course} className="skill-tag">{course}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
