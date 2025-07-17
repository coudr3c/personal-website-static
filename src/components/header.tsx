import { Link } from 'react-router';
import { useState } from 'react';
import { useTranslation } from '../i18n/context';
import { useThemeToggle } from '../hooks/useThemeToggle';
import NavigationLink from './navigation-link';
import LanguageToggle from './language-toggle';
import ThemeToggle from './theme-toggle';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useTranslation();
    const { toggleTheme, getEmojiContent, getTitle } = useThemeToggle();

    return (
        <header className="sticky top-0 z-50 py-6 w-full bg-theme-surface/90 backdrop-blur-md border-b border-theme-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Home */}
                    <div className="flex items-center">
                        <Link
                            to='/'
                            className="text-theme-text-primary hover:text-blue-600 transition-colors"
                        >
                            {t.nav.home}
                        </Link>
                    </div>

                    {/* Centered profile image */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                        <img 
                            className="h-12 w-12 rounded-full border-2 border-theme-border hover:border-blue-500 transition-colors"
                            src="bp.jpg"
                            alt={t.nav.profile}
                            width="48"
                            height="48"
                            loading="eager"
                        />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="sm:hidden p-2 text-theme-text-secondary hover:text-theme-text-primary"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
                            <NavigationLink to="/about">{t.nav.about}</NavigationLink>
                            <NavigationLink to="/skills">{t.nav.skills}</NavigationLink>
                            <NavigationLink to="/cv">{t.nav.cv}</NavigationLink>
                            <NavigationLink href="resume_cv.pdf" external>{t.nav.cvPdf}</NavigationLink>
                            <NavigationLink href="https://github.com/coudr3c/" external>{t.nav.github}</NavigationLink>
                            <NavigationLink to="/projects">{t.nav.projects}</NavigationLink>
                        </nav>
                        <LanguageToggle language={language} setLanguage={setLanguage} />
                        <ThemeToggle toggleTheme={toggleTheme} getEmojiContent={getEmojiContent} getTitle={getTitle} />
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="sm:hidden mt-4 py-4 border-t border-theme-border" id="mobile-menu" aria-label="Mobile navigation">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-center gap-2 mb-2">
                                <LanguageToggle language={language} setLanguage={setLanguage} />
                                <ThemeToggle toggleTheme={toggleTheme} getEmojiContent={getEmojiContent} getTitle={getTitle} />
                            </div>
                            <NavigationLink to="/about" onClick={() => setIsMenuOpen(false)} isMobile>{t.nav.about}</NavigationLink>
                            <NavigationLink to="/skills" onClick={() => setIsMenuOpen(false)} isMobile>{t.nav.skills}</NavigationLink>
                            <NavigationLink to="/cv" onClick={() => setIsMenuOpen(false)} isMobile>{t.nav.cv}</NavigationLink>
                            <NavigationLink href="resume_cv.pdf" external onClick={() => setIsMenuOpen(false)} isMobile>{t.nav.cvPdf}</NavigationLink>
                            <NavigationLink href="https://github.com/coudr3c/" external onClick={() => setIsMenuOpen(false)} isMobile>{t.nav.github}</NavigationLink>
                            <NavigationLink to="/projects" onClick={() => setIsMenuOpen(false)} isMobile>{t.nav.projects}</NavigationLink>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
