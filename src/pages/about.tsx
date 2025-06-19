import PageTemplate from './page-template';
import KomugiLink from '../components/komugi-link';
import { useTranslation } from '../i18n/context';

export default function About() {
    const { t } = useTranslation();
                                   
    return (
        <>
            <PageTemplate pageTitle={t.pages.about} seoPageKey="about">
                <div className="gap-3 grid grid-rows text-justify">
                    <p>{t.about.intro}</p>
                    <p>{t.about.education} at <KomugiLink/> in Thonon-les-Bains, France.</p>
                    <p>{t.about.komugi}</p>
                    <p>{t.about.previousWork}</p>
                    <p>{t.about.thesisPart1} <a href='https://team.inria.fr/privatics/' className='underline'>PRIVATICS lab</a> {t.about.thesisPart2} <a href='https://team.inria.fr/privatics/claude-castelluccia/' className='underline'>Claude Castelluccia</a>.</p>
                    <p>{t.about.interests}</p>
                    <p>{t.about.polyquityPart1} <a href='https://polyquity.ch/' className='underline'>Polyquity</a>{t.about.polyquityPart2}</p>
                    <p>{t.about.football}</p>
                    <p>{t.about.coaching}</p>
                    <p>{t.about.lastUpdate}</p>
                </div>
            </PageTemplate>
        </>
    );
}