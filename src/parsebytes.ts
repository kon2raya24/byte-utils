
// Type exports for consumers
// Add specific types as needed
/**
 * parseBytes
 * @param str
 */
export function parseBytes(str: string): number {
  const match = str.match(/^(\d+(?:\.\d+)?)\s*(B|KB|MB|GB|TB|PB)$/i);
  if (!match) throw new Error("Invalid format. Use: 100B, 1.5KB, 10MB, 2GB");
  const units: Record<string, number> = { B: 1, KB: 1024, MB: 1048576, GB: 1073741824, TB: 1099511627776, PB: 1125899906842624 };
  return parseFloat(match[1]) * units[match[2].toUpperCase()];
}
