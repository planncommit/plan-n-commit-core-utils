import i18next from 'i18next';
import type { AvailableLanguages, Namespaces } from './config';

export function getCurrentLanguage() {
  return i18next.language;
}

export function changeLanguage(language: AvailableLanguages) {
  i18next.changeLanguage(language);
}

export function getNamespaceTranslations<Namespace extends keyof Namespaces>(
  namespace: Namespace,
): {
  getLabel: (key: string, options?: any) => string;
  labels: Namespaces[Namespace];
} {
  const labels = i18next.getResourceBundle(i18next.language, namespace);

  const getLabel = (key: string, options?: any) =>
    i18next.t(`${namespace}:${key}`, options) as string;

  return { getLabel, labels };
}
