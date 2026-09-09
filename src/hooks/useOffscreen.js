import { useEffect, useRef, useState } from 'react';

/*
 * Reports whether the element has left the viewport.
 *
 * The paint shimmer is two SVG displacement passes running 15 times a
 * second — the most expensive thing on the page. Without this it keeps
 * running while you read something else entirely. The consumer puts an
 * `is-offscreen` class on the element, and the stylesheet pauses the
 * animation rather than removing it, so it resumes from the frame it
 * stopped on instead of jumping.
 *
 *   const [ref, offscreen] = useOffscreen();
 *   <header ref={ref} className={offscreen ? 'hero is-offscreen' : 'hero'}>
 */
export default function useOffscreen(rootMargin = '150px 0px') {
    const ref = useRef(null);
    const [offscreen, setOffscreen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === 'undefined') return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => setOffscreen(!entry.isIntersecting),
            { rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin]);

    return [ref, offscreen];
}
