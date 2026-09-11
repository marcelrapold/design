import { foundationVariables, semanticTokens, resolveFoundation } from './foundation.mjs';
export { foundation, resolveFoundation, semanticTokens, tokenDocument, dtcgTokens } from './foundation.mjs';
import neutralData from './neutral.json' with { type: 'json' };
import goldbachData from './goldbach.json' with { type: 'json' };

export const colorKeys = Object.freeze(Object.keys(neutralData.modes.light));
const hex = /^#[0-9a-f]{6}$/i;
const length = /^(?:0|[1-9][0-9]?)(?:\.[0-9]+)?(?:px|rem)$/;
function keys(value, expected, name) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${name}: object required`);
  if (Object.keys(value).some(key => !expected.includes(key)) || expected.some(key => !(key in value))) throw new Error(`${name}: invalid keys`);
}
export function defineBrand(input) {
  keys(input, [...(input.tokens ? ['tokens'] : []), 'schemaVersion','id','name','version','status','modes','typography','shape','sources'], 'brand');
  if (input.schemaVersion !== 1 || !/^[a-z][a-z0-9-]*$/.test(input.id)) throw new Error('Invalid brand identity');
  if (typeof input.name !== 'string' || !input.name.trim() || !/^\d+\.\d+\.\d+$/.test(input.version)) throw new Error('Invalid brand metadata');
  if (!['baseline','draft','approved'].includes(input.status)) throw new Error('Invalid brand status');
  if (!input.modes || !input.modes.light || Object.keys(input.modes).some(k => !['light','dark'].includes(k))) throw new Error('Invalid modes');
  for (const [mode, colors] of Object.entries(input.modes)) {
    keys(colors, colorKeys, mode);
    for (const [key, value] of Object.entries(colors)) if (typeof value !== 'string' || !hex.test(value)) throw new Error(`Invalid color: ${mode}.${key}`);
  }
  keys(input.typography, ['family','bodyWeight','headingWeight'], 'typography');
  if (typeof input.typography.family !== 'string' || !/^[A-Za-z0-9 ,"'-]+$/.test(input.typography.family)) throw new Error('Invalid font family');
  for (const weight of [input.typography.bodyWeight,input.typography.headingWeight]) if (!Number.isInteger(weight) || weight < 100 || weight > 900) throw new Error('Invalid font weight');
  keys(input.shape, ['radius','shadow','buttonMinHeight'], 'shape');
  if (!length.test(input.shape.radius) || !length.test(input.shape.buttonMinHeight) || !['none','0 1px 3px #00000014'].includes(input.shape.shadow)) throw new Error('Invalid geometry');
  if (!Array.isArray(input.sources) || input.sources.some(s => typeof s !== 'string')) throw new Error('Invalid sources');
  resolveFoundation(input);
  const result = structuredClone(input);
  function freeze(value) { Object.values(value).forEach(v => { if (v && typeof v === 'object') freeze(v); }); return Object.freeze(value); }
  return freeze(result);
}
export const neutral = defineBrand(neutralData);
export const goldbach = defineBrand(goldbachData);
export const brands = Object.freeze([neutral, goldbach]);

export function toCssVariables(brand, requestedMode = 'light') {
  const mode = requestedMode === 'dark' && brand.modes.dark ? 'dark' : 'light';
  return Object.fromEntries([
    ...Object.entries(foundationVariables(brand)),
    ...Object.entries(semanticTokens(brand,mode)).map(([key,value]) => [`--${key}`,value]),
    ['--radius',brand.shape.radius], ['--font-mono','ui-monospace, SFMono-Regular, Menlo, monospace'], ['--brand-font',brand.typography.family], ['--brand-body-weight',brand.typography.bodyWeight],
    ['--brand-heading-weight',brand.typography.headingWeight], ['--brand-radius',brand.shape.radius],
    ['--brand-shadow',brand.shape.shadow], ['--brand-button-height',brand.shape.buttonMinHeight],
  ]);
}

export function contrast(a,b) {
  const luminance = hex => {
    const [r,g,b] = hex.slice(1).match(/../g).map(v => parseInt(v,16)/255).map(v => v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4);
    return .2126*r + .7152*g + .0722*b;
  };
  const x=luminance(a),y=luminance(b);
  return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);
}
