import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import PaintFilters from './components/PaintFilters.jsx';
import Grain from './components/Grain.jsx';
import Nav from './components/Nav.jsx';
import PageTransition from './components/PageTransition.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import NotFound from './pages/NotFound.jsx';

/*
 * Changing route keeps the old scroll position, which lands you halfway
 * down a page you have not read yet. 'instant' matters: the stylesheet
 * sets scroll-behavior: smooth, so a plain scrollTo would animate the
 * whole page length on every navigation — and it would race the enter
 * transition, which looks like a stutter.
 */
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <>
            {/* the SVG filter defs every painted edge on the site points at */}
            <PaintFilters />
            <Grain />
            <ScrollToTop />

            {/* the shell stays put; only what is inside PageTransition animates */}
            <Nav />

            <main id="main">
                <PageTransition>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </PageTransition>
            </main>

            <Footer />
        </>
    );
}
