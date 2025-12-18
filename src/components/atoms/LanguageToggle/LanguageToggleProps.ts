export interface LanguageToggleProps {
  currentLang: 'en' | 'hi';
  onChange: (lang: 'en' | 'hi') => void;
}
