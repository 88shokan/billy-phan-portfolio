import PaintField from './PaintField.jsx';
import useOffscreen from '../hooks/useOffscreen.js';

/*
 * The banner at the top of every inner page. It carries the same paint
 * as the home hero but in a shorter band, so the pages read as one site
 * rather than four.
 *
 * `numeral` keeps the I / II / III / IV marks from the old single-page
 * layout — they were doing real work as a sense of place, and there is
 * no reason to lose them just because the sections became routes.
 */
export default function PageHeader({ numeral, title, lead }) {
    const [ref, offscreen] = useOffscreen();

    return (
        <header className={offscreen ? 'page-header is-offscreen' : 'page-header'} ref={ref}>
            <PaintField variant="page" />
            <div className="page-header-grain" aria-hidden="true" />

            <div className="container page-header-inner">
                {numeral && <span className="section-number">{numeral}</span>}
                <h1 className="page-title">{title}</h1>
                {lead && <p className="lead">{lead}</p>}
            </div>
        </header>
    );
}
