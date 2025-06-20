import { Link } from 'react-router';
import { useState } from 'react';
import { useTranslation, type Language } from '../i18n/context';
import { useTheme } from '../contexts/theme-context';
import type { Theme } from '../contexts/theme-context';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 py-6 w-full bg-white/95 backdrop-blur-sm dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Home */}
                    <div className="flex items-center">
                        <Link
                            to='/'
                            className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t.nav.home}
                        </Link>
                    </div>

                    {/* Centered profile image */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
                        <img 
                            className="h-12 w-12 rounded-full border-2 border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                            src="bp.jpg"
                            alt={t.nav.profile}
                        />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="sm:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation and Language Toggle */}
                    <div className="hidden sm:flex items-center gap-1">
                        <nav className="flex items-center gap-1">
                            <NavLink to="/about">{t.nav.about}</NavLink>
                            <NavLink to="/skills">{t.nav.skills}</NavLink>
                            <NavLink to="/cv">{t.nav.cv}</NavLink>
                            <NavLink href="resume_cv.pdf" external>{t.nav.cvPdf}</NavLink>
                            <NavLink href="https://github.com/coudr3c/" external>{t.nav.github}</NavLink>
                            <NavLink to="/projects">{t.nav.projects}</NavLink>
                        </nav>
                        <LanguageToggle language={language} setLanguage={setLanguage} />
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="sm:hidden mt-4 py-4 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-center gap-2 mb-2">
                                <LanguageToggle language={language} setLanguage={setLanguage} />
                                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                            </div>
                            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</MobileNavLink>
                            <MobileNavLink to="/skills" onClick={() => setIsMenuOpen(false)}>{t.nav.skills}</MobileNavLink>
                            <MobileNavLink to="/cv" onClick={() => setIsMenuOpen(false)}>{t.nav.cv}</MobileNavLink>
                            <MobileNavLink href="resume_cv.pdf" external onClick={() => setIsMenuOpen(false)}>{t.nav.cvPdf}</MobileNavLink>
                            <MobileNavLink href="https://github.com/coudr3c/" external onClick={() => setIsMenuOpen(false)}>{t.nav.github}</MobileNavLink>
                            <MobileNavLink to="/projects" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</MobileNavLink>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

type NavLinkProps = {
    children: React.ReactNode;
    to?: string;
    href?: string;
    external?: boolean;
    onClick?: () => void;
};

function NavLink({ children, to, href, external, onClick }: NavLinkProps) {
    const className = "px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors";
    
    if (external && href) {
        return (
            <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
                {children}
            </a>
        );
    }
    
    return to ? (
        <Link to={to} className={className} onClick={onClick}>
            {children}
        </Link>
    ) : null;
}

function MobileNavLink({ children, to, href, external, onClick }: NavLinkProps) {
    const className = "block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors";
    
    if (external && href) {
        return (
            <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
                {children}
            </a>
        );
    }
    
    return to ? (
        <Link to={to} className={className} onClick={onClick}>
            {children}
        </Link>
    ) : null;
}

type LanguageToggleProps = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
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
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLanguage('en');
                    }
                }}
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
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLanguage('fr');
                    }
                }}
            >
                🇫🇷
            </span>
        </div>
    );
}

type ThemeToggleProps = {
    theme: Theme;
    toggleTheme: () => void;
};

function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
    const getEmojiContent = () => {
        return theme === 'dark' ? '🌙' : '☀️';
    };

    const getTitle = () => {
        return theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    };

    return (
        <span
            onClick={toggleTheme}
            className="text-2xl cursor-pointer transition-opacity hover:opacity-75"
            title={getTitle()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTheme();
                }
            }}
        >
            {getEmojiContent()}
        </span>
    );
}
