// Layout values are Framework defaults, not claims about a corporate slide template.
export function presentationTheme(brand) {
  const colors = brand.modes.light;
  return {
    schemaVersion: 1,
    brand: { id: brand.id, version: brand.version, status: brand.status },
    canvas: { ratio: '16:9', widthInches: 13.333333, heightInches: 7.5 },
    typography: { family: brand.typography.family.split(',')[0].trim(), titlePt: 42, headingPt: 32, bodyPt: 20, notePt: 12, bodyWeight: brand.typography.bodyWeight, headingWeight: brand.typography.headingWeight },
    colors: { background: colors.background, text: colors.foreground, muted: colors['muted-foreground'], accent: colors.primary, onAccent: colors['primary-foreground'] },
    layout: { marginInches: .65, maxBodyPoints: 4, maxWordsPerSlide: 55, provenance: 'framework-defaults; supplied slide masters override these values' },
    evidence: { required: true, location: 'speaker-notes', fields: ['repository','commit','path','claimType'], allowedClaimTypes: ['fact','inference','open-question'] },
    assets: { logo: 'provided SVG only; preserve geometry and brand-specific clear space', iconPolicy: 'use the selected brand asset source; omit when missing', imageryPolicy: 'use brand-specific imagery rules only when imagery supports the message' },
    outputs: ['editable-pptx','pdf','sources.json'],
  };
}
