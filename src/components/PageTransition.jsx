import { useLocation } from 'react-router-dom';

/*
 * Route transitions.
 *
 * The key is the whole mechanism: changing it on every pathname makes
 * React throw the old page's DOM away and mount the new one fresh, so
 * the CSS enter animation runs again. Without the key React reuses the
 * nodes, the animation never restarts, and nothing appears to happen.
 *
 * This animates pages IN only, not out. A proper exit animation means
 * keeping the outgoing page mounted while the new one arrives — that
 * needs a library (framer-motion's AnimatePresence, or
 * react-transition-group) and, more to the point, it delays the content
 * you asked for by the length of the exit. Enter-only at ~400ms reads
 * as a deliberate transition and never makes the site feel slow.
 *
 * The animation itself lives in styles.css under "ROUTE TRANSITIONS",
 * which is also where it gets switched off for prefers-reduced-motion.
 */
export default function PageTransition({ children }) {
    const { pathname } = useLocation();

    return (
        <div className="page-transition" key={pathname}>
            {children}
        </div>
    );
}
