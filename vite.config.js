import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

/*
 * GitHub Pages has no server-side routing: asking for /projects directly
 * (a refresh, or a shared link) hits a file that does not exist, and Pages
 * answers with 404.html. Making 404.html a byte copy of index.html means
 * the app boots anyway and the router reads the URL as normal.
 *
 * Without this, every deep link on the deployed site 404s while working
 * perfectly in dev — which is a genuinely confusing way to find out.
 */
function spaFallback() {
    return {
        name: 'spa-fallback-404',
        closeBundle() {
            const index = path.resolve('dist', 'index.html');
            if (fs.existsSync(index)) {
                fs.copyFileSync(index, path.resolve('dist', '404.html'));
            }
        }
    };
}

export default defineConfig({
    /*
     * '/' is correct for a repo named <username>.github.io, which is served
     * from the domain root. If you ever host this in a project repo instead
     * (github.com/88shokan/portfolio -> /portfolio/), change this to
     * '/portfolio/' or every asset URL will 404.
     */
    base: '/',
    plugins: [react(), spaFallback()]
});
