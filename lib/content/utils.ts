import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function recordValue(item: unknown, key: string): unknown {
  if (typeof item !== 'object' || item === null) return undefined;
  return (item as Record<string, unknown>)[key];
}

function numericOrder(item: unknown): number {
  const displayOrder = recordValue(item, 'display_order');
  if (typeof displayOrder === 'number') return displayOrder;

  const order = recordValue(item, 'order');
  return typeof order === 'number' ? order : 0;
}

function stableKey(item: unknown): string {
  for (const key of ['slug', 'name', 'title', 'question']) {
    const value = recordValue(item, key);
    if (typeof value === 'string') return value;
  }
  return '';
}

/**
 * Reads all markdown files from a folder, parses front‑matter and content.
 * Ignores `.gitkeep` and any non‑`.md` files.
 * Returns an array of items sorted by optional `order` front‑matter (numeric).
 */
export function readMarkdownCollection<T>(folder: string): T[] {
  const absolute = path.resolve(process.cwd(), folder);
  if (!fs.existsSync(absolute)) return [];

  const files = fs.readdirSync(absolute).sort((a, b) => a.localeCompare(b));
  const items: T[] = [];

  for (const file of files) {
    if (file.startsWith('.')) continue; // skip .gitkeep and hidden files
    if (!file.endsWith('.md')) continue;
    const fullPath = path.join(absolute, file);
    try {
      const raw = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(raw);
      const item = { ...data, content } as unknown as T;
      items.push(item);
    } catch (error) {
      console.warn(`Failed to parse markdown file ${fullPath}:`, error);
    }
  }

  return items.sort((a, b) => {
    const orderDifference = numericOrder(a) - numericOrder(b);
    return orderDifference || stableKey(a).localeCompare(stableKey(b));
  });
}
