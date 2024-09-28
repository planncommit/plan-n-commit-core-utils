import i18next from 'i18next';
import common from './locales/common/en.json';

export const languages = ['en', 'pt-BR'] as const;

export type AvailableLanguages = (typeof languages)[number];

export type Namespaces = {
  common: typeof common;
};

export function configure<Namespace extends keyof Namespaces>(
  resources: any,
  namespaces: Namespace[],
) {
  i18next.init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    supportedLngs: languages,
    ns: namespaces,
    resources,
  });
}
