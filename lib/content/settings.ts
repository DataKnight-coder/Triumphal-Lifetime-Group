import { readFileSync } from 'fs';
import { parse as parseYaml } from 'yaml';
import path from 'path';

export type GlobalSettings = {
  company_name?: string;
  general_email?: string;
  primary_phone?: string;
  whatsapp?: string;
  address?: string;
  copyright_text?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  seo_description?: string;
  seo_og_image?: string;
};

/** Load global settings from `content/settings/global.yml` */
export function getGlobalSettings(): GlobalSettings {
  const filePath = path.resolve(process.cwd(), 'content/settings/global.yml');
  try {
    const raw = readFileSync(filePath, 'utf-8');
    return parseYaml(raw) as GlobalSettings;
  } catch (e) {
    console.warn('Failed to load global settings:', e);
    return {};
  }
}
