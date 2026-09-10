import { NavLink, Link } from 'react-router-dom';

const LINKS = [
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' }
];

/*
 * On the old single-page site, working out which link to highlight took
 * a scroll listener measuring section positions. With real routes the
 * router already knows: NavLink puts aria-current="page" on the active
 * link by itself. The stylesheet paints [aria-current], so the marker
 * is now free — and correct for screen readers without extra work.
 */
export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <Link to="/" className="nav-brand">Billy Phan</Link>
                <ul className="nav-links">
                    {LINKS.map((link) => (
                        <li key={link.to}>
                            <NavLink to={link.to}>{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
