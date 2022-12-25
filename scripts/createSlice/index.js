/**
 * run: with npm run generate:slice <layer> <slice>
 * ex: npm run generate:slice features articleRecommendationsList
 * ex: npm run generate:slice pages testPage
 */

const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Type layer: ${layers.join(', or')}`);
}

if (!sliceName) {
    throw new Error('Type slice name');
}

createTemplate(layer, sliceName);
