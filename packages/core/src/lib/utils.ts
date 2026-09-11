import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Fügt Klassennamen konditional zusammen (`clsx`) und löst Tailwind-Konflikte
 * deterministisch auf (`tailwind-merge`). Der Framework-Standard zum Komponieren
 * von `className`-Props.
 *
 * @param inputs  Klassennamen, Arrays oder bedingte Maps (clsx-Syntax).
 * @returns Der zusammengeführte, konfliktbereinigte Klassen-String.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

