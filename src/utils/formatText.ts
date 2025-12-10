export function convertToSmartApostrophe(text: string): string {
  return text.replace(/(\w)'(\w)/g, "$1’$2");
}
