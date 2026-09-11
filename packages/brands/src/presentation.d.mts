import type { Brand } from './index.mjs';
export const slides: {id:string;gruppe:string;titel:string;zweck:string;zonen:{zone:string;inhalt:string}[];dataviz?:string;fehler:string}[];
export const presets: {id:string;titel:string;zweck:string;dramaturgie:string;folgen:{typ:string;hinweis:string}[]}[];
export function presentationTheme(brand:Brand): Record<string,any>;
