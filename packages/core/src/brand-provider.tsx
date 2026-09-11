'use client';
import { createContext, useContext, useState, type CSSProperties, type ReactNode } from 'react';

// Structural contract: the core has no dependency on any brand or brand registry.
export interface BrandScope {
  id: string;
  mode: 'light' | 'dark';
  variables: Record<string,string | number>;
}
const Context = createContext<BrandScope | null>(null);
const PortalContext = createContext<HTMLElement | undefined>(undefined);
export function useBrandPortal() { return useContext(PortalContext); }
export function BrandProvider({ brand, children, className = '' }: { brand: BrandScope; children: ReactNode; className?: string }) {
  const [portal, setPortal] = useState<HTMLDivElement | null>(null);
  return <Context.Provider value={brand}>
    <PortalContext.Provider value={portal ?? undefined}><div data-brand={brand.id} data-mode={brand.mode} className={`framework-scope ${brand.mode === 'dark' ? 'dark' : ''} ${className}`} style={brand.variables as CSSProperties}>{children}<div ref={setPortal} data-brand-portals="" /></div></PortalContext.Provider>
  </Context.Provider>;
}
export function useBrand() {
  const value = useContext(Context);
  if (!value) throw new Error('useBrand requires a BrandProvider');
  return value;
}
