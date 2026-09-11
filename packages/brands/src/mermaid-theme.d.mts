import type { Brand, Mode } from './index';
export const MERMAID_WRAPPING_WIDTH: number;
export const MERMAID_NODE_PADDING: number;
export function mermaidPalette(brand: Brand): string[];
export function mermaidClassDefs(brand: Brand): string;
export function mermaidTheme(brand: Brand, mode?: Mode, fontFamily?: string): Record<string, string>;
export function mermaidThemeCSS(brand: Brand, mode?: Mode): string;
