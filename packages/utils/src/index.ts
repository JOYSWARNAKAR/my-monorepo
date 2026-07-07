export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US');
}

export function slugify(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-');
}
