'use client';
import { createContext, useContext, type CSSProperties, type ReactNode } from 'react';

// Structural contract: the core has no dependency on any brand or brand registry.
export interface BrandScope {
  id: string;
  mode: 'light' | 'dark';
  variables: Record<string,string | number>;
}
const Context = createContext<BrandScope | null>(null);
export function BrandProvider({ brand, children, className = '' }: { brand: BrandScope; children: ReactNode; className?: string }) {
  return <Context.Provider value={brand}>
    <div data-brand={brand.id} data-mode={brand.mode} className={`framework-scope ${brand.mode === 'dark' ? 'dark' : ''} ${className}`} style={brand.variables as CSSProperties}>{children}</div>
  </Context.Provider>;
}
export function useBrand() {
  const value = useContext(Context);
  if (!value) throw new Error('useBrand requires a BrandProvider');
  return value;
}
