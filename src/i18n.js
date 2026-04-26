import de from './locales/de.json' assert { type: 'json' };
import en from './locales/en.json' assert { type: 'json' };

export const messages = { de, en };

export function t(locale, key) {
  // Split the key by dots and navigate the object
  const keys = key.split('.');
  let current = messages[locale];
  for (const k of keys) {
    if (current && typeof current === 'object') {
      current = current[k];
    } else {
      // Fallback to the key itself if not found
      return key;
    }
  }
  return current !== undefined && current !== null ? current : key;
}