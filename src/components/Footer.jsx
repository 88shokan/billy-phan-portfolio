import PaintField from './PaintField.jsx';
import useOffscreen from '../hooks/useOffscreen.js';
import { CONTACT } from '../data/site.js';

export default function Footer() {
    const [ref, offscreen] = useOffscreen();

    return (
        <footer className={offscreen ? 'footer is-offscreen' : 'footer'} ref={ref}>
            <PaintField variant="footer" dark />
            <div className="container">
                <div className="footer-content">
                    <div>
                        <p className="footer-logo">Billy Phan</p>
                        <p className="footer-tagline">Student &amp; Software Engineer</p>
                    </div>
                    <div className="footer-links">
                        <a href={`mailto:${CONTACT.email}`}>Email</a>
                        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
