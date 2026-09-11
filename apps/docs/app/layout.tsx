import type { Metadata } from 'next';
import './globals.css';
import FrameworkShell from './_components/framework-shell';
export const metadata: Metadata = {
  metadataBase: new URL('https://design.rapold.io'),
  title: 'Design Framework',
  description: 'Ein Designstandard. Austauschbare Brands. Für Interfaces und Management-Präsentationen.',
};
export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="de-CH"><body><FrameworkShell>{children}</FrameworkShell></body></html>;
}
