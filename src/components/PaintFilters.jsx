/*
 * PAINT FILTERS
 *
 * Every painted edge on this site is a solid shape run through an SVG
 * displacement filter. Two kinds live here:
 *
 *   #brush*  — static roughness for chips, bars and rules.
 *   #heat*   — one filter per animation frame. The stylesheet flips
 *              between them with step-end keyframes, and that flipping
 *              is the 15fps heat shimmer.
 *
 * In the old static site these were 14 near-identical <filter> blocks
 * differing only by a seed number — about 56 lines of copy-paste. Here
 * they are two arrays. This is the one place the move to components
 * pays for itself immediately.
 *
 * The heavy set has 8 frames and the fine set has 6, so the two layers
 * drift out of phase instead of pulsing in lockstep.
 */

const HEAVY_SEEDS = [11, 23, 37, 51, 68, 84, 97, 113];
const FINE_SEEDS = [19, 41, 63, 79, 91, 107];

export default function PaintFilters() {
    return (
        <svg className="svg-defs" aria-hidden="true" focusable="false">
            <defs>
                {/* ---------- static ---------- */}
                <filter id="brushHeavy" x="-25%" y="-25%" width="150%" height="150%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.014 0.035" numOctaves="3" seed="11" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="28" xChannelSelector="R" yChannelSelector="G" />
                </filter>

                <filter id="brushEdge" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" seed="4" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="13" xChannelSelector="R" yChannelSelector="G" />
                </filter>

                <filter id="brushFine" x="-15%" y="-15%" width="130%" height="130%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="3" seed="19" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" />
                </filter>

                {/* ---------- heat: heavy masses ---------- */}
                {HEAVY_SEEDS.map((seed, i) => (
                    <filter key={`heatA${i}`} id={`heatA${i}`} x="-25%" y="-25%" width="150%" height="150%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.013 0.033"
                            numOctaves="3"
                            seed={seed}
                            result="n"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="n"
                            scale="26"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                ))}

                {/* ---------- heat: thin strokes and dots ---------- */}
                {FINE_SEEDS.map((seed, i) => (
                    <filter key={`heatB${i}`} id={`heatB${i}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.05"
                            numOctaves="2"
                            seed={seed}
                            result="n"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="n"
                            scale="6"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                ))}
            </defs>
        </svg>
    );
}
