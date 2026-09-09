/*
 * A field of brushstrokes.
 *
 * Each stroke is a plain coloured block; the .paint-layer around it
 * carries the animated displacement filter. One filter pass per layer
 * rather than one per stroke — adding strokes to a layer is nearly
 * free, adding a layer costs a full pass. That is why there are only
 * ever two: heavy for big masses, fine for thin strokes a heavy
 * displacement would tear apart.
 *
 * Colour, size and position for every class below live in styles.css
 * under "Hero composition" and "Page-header composition".
 */

const COMPOSITIONS = {
    hero: {
        heavy: [
            'b-sand',
            'b-vermillion',
            'b-apricot',
            'b-marigold',
            'b-red',
            'b-cobalt',
            'b-coral-r',
            'b-coral-b',
            'b-forest-patch'
        ],
        fine: ['b-forest-line', 'b-brown-line', 'b-cream-block', 'b-dot-brown', 'b-dot-marigold']
    },

    /* a shorter band for the top of the inner pages */
    page: {
        heavy: ['p-vermillion', 'p-apricot', 'p-red', 'p-coral', 'p-forest'],
        fine: ['p-cobalt-line', 'p-dot']
    },

    footer: {
        heavy: ['b-f-cobalt', 'b-f-vermillion', 'b-f-forest'],
        fine: []
    }
};

export default function PaintField({ variant = 'hero', dark = false }) {
    const composition = COMPOSITIONS[variant] || COMPOSITIONS.hero;

    return (
        <div className={dark ? 'paint-field paint-field-dark' : 'paint-field'} aria-hidden="true">
            {composition.heavy.length > 0 && (
                <div className="paint-layer paint-layer-heavy">
                    {composition.heavy.map((stroke) => (
                        <span key={stroke} className={`brush ${stroke}`} />
                    ))}
                </div>
            )}

            {composition.fine.length > 0 && (
                <div className="paint-layer paint-layer-fine">
                    {composition.fine.map((stroke) => (
                        <span key={stroke} className={`brush ${stroke}`} />
                    ))}
                </div>
            )}
        </div>
    );
}
