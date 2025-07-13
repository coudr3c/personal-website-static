import { memo, useCallback } from 'react';
import type { Language } from '../i18n/context';

type LanguageToggleProps = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
    const handleKeyDown = useCallback((e: React.KeyboardEvent, lang: Language) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setLanguage(lang);
        }
    }, [setLanguage]);

    return (
        <div className="flex items-center gap-2 mr-2">
            <span
                onClick={() => setLanguage('en')}
                className={`text-2xl cursor-pointer transition-opacity ${
                    language === 'en'
                        ? 'opacity-100'
                        : 'opacity-50 hover:opacity-75'
                }`}
                title="English"
                role="button"
                tabIndex={0}
                aria-label="Switch to English"
                onKeyDown={(e) => handleKeyDown(e, 'en')}
            >
                🇬🇧
            </span>
            <span
                onClick={() => setLanguage('fr')}
                className={`text-2xl cursor-pointer transition-opacity ${
                    language === 'fr'
                        ? 'opacity-100'
                        : 'opacity-50 hover:opacity-75'
                }`}
                title="Français"
                role="button"
                tabIndex={0}
                aria-label="Changer vers le français"
                onKeyDown={(e) => handleKeyDown(e, 'fr')}
            >
                🇫🇷
            </span>
        </div>
    );
}

export default memo(LanguageToggle);