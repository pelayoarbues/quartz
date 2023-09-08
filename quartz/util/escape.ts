export function escapeHTML(input: string): string {
    const entityMap: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
  
    return input.replace(/[&<>"']/g, (char) => entityMap[char]);
  }
  