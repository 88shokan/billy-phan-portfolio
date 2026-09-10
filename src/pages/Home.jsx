import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PaintField from '../components/PaintField.jsx';
import useOffscreen from '../hooks/useOffscreen.js';
import { CONTACT } from '../data/site.js';

const SIGNPOSTS = [
    { to: '/about', numeral: 'I', label: 'About', note: 'Learn more about me and what I do!' },
    { to: '/experience', numeral: 'II', label: 'Experience', note: 'Learn about my career path!' },
    { to: '/projects', numeral: 'III', label: 'Projects', note: 'Some of my work I have done in school, work, and in my free-time!' }
];

/*
 * Module scope, so it survives Home unmounting and remounting as you
 * move between routes. The white wash is an arrival — it should play
 * when someone lands on the site, not every time they click back to
 * the home page, which gets old by the third visit.
 *
 * Flipped in an effect rather than in the state initialiser because
 * StrictMode double-invokes render in development: setting it there
 * would mark the veil as already played before it ever ran.
 *
 * To play it on every visit home instead, delete this flag and drop
 * the {playVeil && ...} guard below.
 */
let veilHasPlayed = false;

export default function Home() {
    const [ref, offscreen] = useOffscreen();
    const [playVeil] = useState(!veilHasPlayed);

    useEffect(() => {
        veilHasPlayed = true;
    }, []);

    return (
        <>
            <header className={offscreen ? 'hero is-offscreen' : 'hero'} id="top" ref={ref}>
                <PaintField variant="hero" />

                {/* heavier grain, sitting on the paint but under the type */}
                <div className="hero-grain" aria-hidden="true" />

                <div className="container hero-inner">
                    <p className="hero-label">Software Engineer</p>

                    <div className="hero-nameplate">
                        <h1>Billy Phan</h1>
                    </div>

                    <p className="hero-scribble">portfolio &amp; résumé</p>

                    <p className="hero-subtitle">
                        Computer Science student based in Philadelphia, PA
                    </p>

                    <div className="hero-actions">
                        <Link to="/projects" className="btn btn-primary">See my work</Link>
                        <a href={`mailto:${CONTACT.email}`} className="btn btn-accent">Get in touch</a>
                        <a href={CONTACT.resume} className="btn btn-outline">Download résumé</a>
                    </div>
                </div>

                {/* the white wash, lifting off the painting. Last child so it
                    sits over the type as well as the paint. */}
                {playVeil && <div className="hero-veil" aria-hidden="true" />}
            </header>

            {/* With the sections split across routes, the home page has to
                point at them or they are invisible. */}
            <section className="section container">
                <div className="signposts">
                    {SIGNPOSTS.map((item) => (
                        <Link key={item.to} to={item.to} className="signpost">
                            <span className="signpost-numeral">{item.numeral}</span>
                            <h2 className="signpost-label">{item.label}</h2>
                            <p className="signpost-note">{item.note}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
