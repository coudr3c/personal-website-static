import PageTemplate from './page-template';
import KomugiLink from '../components/komugi-link';
import { useTranslation } from '../i18n/context';

export default function Home() {
    const { t } = useTranslation();
    
    return (
        <>
            <PageTemplate pageTitle={t.pages.home} seoPageKey="home">
                <div className="grid grid-row gap-3">
                    <p>{t.home.jobDescription} <KomugiLink/>.</p>
                    <p>{t.home.contactText} <a className='underline' href='mailto:remi-coudert@protonmail.com'>remi-coudert@protonmail.com</a>.</p>
                </div>
                <div className="">
                    <img 
                    src='lake.jpg' 
                    alt="Scenic lake view with mountains in the background"
                    width="800"
                    height="600"
                    loading="lazy"
                />
                </div>
            </PageTemplate>
        </>
    );
}
