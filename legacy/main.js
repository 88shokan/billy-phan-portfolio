/* ============================================================
   PAINTED PORTFOLIO — Behaviour
   ------------------------------------------------------------
   Loaded from index.html with <script src="main.js" defer>.
   `defer` means the browser never blocks parsing on this file
   and runs it once the DOM is built — so there is no need to
   wrap any of it in a DOMContentLoaded listener.

   Everything here is an enhancement. With JavaScript off the
   page still renders, the nav links still jump, and the paint
   still shimmers; you just lose the throttling and the
   you-are-here marker.

   To add a feature: write a named function, guard it against
   its own elements being missing, and call it at the bottom.
   ============================================================ */

(function () {
    'use strict';

    /* --------------------------------------------------------
       1. Stop painting what nobody is looking at.

       The hero's shimmer is two SVG displacement passes running
       15 times a second. That is the most expensive thing on
       the page, and without this it keeps running while you
       read the sections far below it.

       `animation-play-state: paused` rather than removing the
       animation: paused freezes the current frame and resumes
       from it, so nothing jumps when the hero scrolls back in.
       -------------------------------------------------------- */
    function gatePaint() {
        var fields = document.querySelectorAll('.hero, .footer');
        if (!fields.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                entry.target.classList.toggle('is-offscreen', !entry.isIntersecting);
            });
        }, {
            /* start again slightly before it scrolls back into view,
               so it is already moving by the time you see it */
            rootMargin: '150px 0px'
        });

        fields.forEach(function (field) {
            observer.observe(field);
        });
    }

    /* --------------------------------------------------------
       2. Mark the section currently being read.

       The rule: the active section is the last one whose top
       edge has passed under the nav bar.

       The obvious alternative — an IntersectionObserver watching
       a band across the middle of the viewport — looks tidier but
       is wrong for short sections. Skills is barely half a screen
       tall, so by the time its top reaches the viewport the middle
       band is already down in Projects, and Skills can never be
       highlighted at all. A threshold line does not care how tall
       a section is.

       Reading a few rects per frame is cheap, and the rAF gate
       means this runs at most once per frame no matter how many
       scroll events fire.
       -------------------------------------------------------- */
    function trackSections() {
        var links = Array.prototype.slice.call(
            document.querySelectorAll('.nav-links a[href^="#"]')
        );

        /* pair each nav link with the section it points at */
        var sections = [];
        links.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === '#') return;
            var section = document.querySelector(href);
            if (section) sections.push({ el: section, link: link });
        });
        if (!sections.length) return;

        var nav = document.querySelector('.nav');
        var current = null;
        var queued = false;

        function update() {
            queued = false;

            /* measured, not hardcoded: the nav wraps to two rows
               on a phone and gets taller */
            var line = (nav ? nav.getBoundingClientRect().height : 60) + 40;

            var active = null;
            sections.forEach(function (section) {
                if (section.el.getBoundingClientRect().top <= line) {
                    active = section.link;   /* last one wins */
                }
            });

            if (active === current) return;   /* nothing to repaint */
            current = active;

            links.forEach(function (link) {
                if (link === active) {
                    link.setAttribute('aria-current', 'true');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }

        function schedule() {
            if (queued) return;
            queued = true;
            requestAnimationFrame(update);
        }

        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule, { passive: true });
        update();
    }

    /* --------------------------------------------------------
       Run. Only the paint gate needs IntersectionObserver; if a
       browser somehow lacks it the shimmer simply keeps running,
       which is what it did before this file existed.
       -------------------------------------------------------- */
    if ('IntersectionObserver' in window) gatePaint();
    trackSections();
})();
