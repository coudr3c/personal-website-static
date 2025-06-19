import { useEffect } from 'react';
import { useTranslation } from '../i18n/context';

interface SEOHeadProps {
    pageKey?: 'home' | 'about' | 'skills' | 'cv' | 'projects' | 'gsoc';
}

export default function SEOHead({ pageKey = 'home' }: SEOHeadProps) {
    const { t, language } = useTranslation();

    useEffect(() => {
        // Update document title
        const baseTitle = 'Rémi Coudert - Software Developer & Tech Enthusiast';
        const frenchTitle = 'Rémi Coudert - Développeur Logiciel & Passionné de Tech';
        
        if (pageKey === 'home') {
            document.title = language === 'fr' ? frenchTitle : baseTitle;
        } else {
            const pageTitle = t.pages[pageKey];
            const siteTitle = language === 'fr' ? frenchTitle : baseTitle;
            document.title = `${pageTitle} - ${siteTitle}`;
        }

        // Update meta description
        const enDescription = 'Portfolio of Rémi Coudert, software developer specializing in web technologies and modern development practices. Google Summer of Code participant.';
        const frDescription = 'Portfolio de Rémi Coudert, développeur logiciel spécialisé en technologies web et pratiques de développement modernes. Participant au Google Summer of Code.';
        
        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', language === 'fr' ? frDescription : enDescription);
        }

        // Update Open Graph meta tags
        const ogTitleMeta = document.querySelector('meta[property="og:title"]');
        const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
        
        if (ogTitleMeta) {
            ogTitleMeta.setAttribute('content', language === 'fr' ? 'Rémi Coudert - Développeur Logiciel' : 'Rémi Coudert - Software Developer');
        }
        
        if (ogDescriptionMeta) {
            ogDescriptionMeta.setAttribute('content', language === 'fr' ? 'Portfolio présentant projets, compétences techniques et expérience professionnelle' : 'Portfolio showcasing projects, technical skills, and professional experience');
        }

        // Update Twitter Card meta tags
        const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
        const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
        
        if (twitterTitleMeta) {
            twitterTitleMeta.setAttribute('content', language === 'fr' ? 'Rémi Coudert - Développeur Logiciel' : 'Rémi Coudert - Software Developer');
        }
        
        if (twitterDescriptionMeta) {
            twitterDescriptionMeta.setAttribute('content', language === 'fr' ? 'Portfolio présentant projets, compétences techniques et expérience professionnelle' : 'Portfolio showcasing projects, technical skills, and professional experience');
        }

    }, [language, pageKey, t]);

    return null; // This component doesn't render anything
}