import PageTemplate from './page-template';
import { useTranslation } from '../i18n/context';

export default function MasterThesis() {
    const { t } = useTranslation();

    return (
        <PageTemplate pageTitle={t.pages.masterThesis} seoPageKey="gsoc">
            <div className="space-y-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
                        {t.masterThesis.title}
                    </h2>
                    <p className="text-lg text-theme-text-secondary mb-6">
                        {t.masterThesis.subtitle}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-theme-text-primary mb-3">{t.masterThesis.thesisOverview}</h3>
                        <ul className="space-y-2 text-theme-text-secondary">
                            <li><strong>{t.masterThesis.period}:</strong> February - July 2020</li>
                            <li><strong>{t.masterThesis.laboratory}:</strong> PRIVATICS, INRIA Grenoble</li>
                            <li><strong>{t.masterThesis.supervisors}:</strong> Prof Claude Castelluccia, Prof Carmela Troncoso</li>
                            <li><strong>{t.masterThesis.institution}:</strong> SPRING Lab, EPFL</li>
                        </ul>
                    </div>
                    
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-theme-text-primary mb-3">{t.masterThesis.technologiesMethods}</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'OpenWPM', 'Web Scraping', 'Pandas', 'DOM Analysis', 'Machine Learning', 'Privacy Research', 'Data Analysis'].map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.masterThesis.researchObjective}</h3>
                    <p className="text-theme-text-secondary leading-relaxed">
                        {t.masterThesis.researchObjectiveText}
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.masterThesis.theoreticalFramework}</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-theme-surface rounded-lg border border-theme-border p-4 shadow-sm">
                            <h4 className="font-semibold text-theme-text-primary mb-2">{t.masterThesis.cognitiveBiases}</h4>
                            <ul className="text-theme-text-secondary space-y-1">
                                <li>{t.masterThesis.cognitiveBiasesItems.system}</li>
                                <li>{t.masterThesis.cognitiveBiasesItems.anchoring}</li>
                                <li>{t.masterThesis.cognitiveBiasesItems.defaultBias}</li>
                                <li>{t.masterThesis.cognitiveBiasesItems.behavioral}</li>
                            </ul>
                        </div>
                        <div className="bg-theme-surface rounded-lg border border-theme-border p-4 shadow-sm">
                            <h4 className="font-semibold text-theme-text-primary mb-2">{t.masterThesis.darkPatternClassification}</h4>
                            <ul className="text-theme-text-secondary space-y-1">
                                <li>{t.masterThesis.darkPatternItems.nudges}</li>
                                <li>{t.masterThesis.darkPatternItems.taxonomy}</li>
                                <li>{t.masterThesis.darkPatternItems.gdpr}</li>
                                <li>{t.masterThesis.darkPatternItems.legal}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.masterThesis.methodology}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-2">{t.masterThesis.dataCollection}</h4>
                                <p className="text-theme-text-secondary">
                                    {t.masterThesis.dataCollectionText}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-2">{t.masterThesis.bannerDetection}</h4>
                                <p className="text-theme-text-secondary">
                                    {t.masterThesis.bannerDetectionText}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-2">{t.masterThesis.darkPatternClassificationMethod}</h4>
                                <p className="text-theme-text-secondary">
                                    {t.masterThesis.darkPatternClassificationText}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.masterThesis.keyFindings}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-3">{t.masterThesis.scaleOfAnalysis}</h4>
                                <ul className="text-theme-text-secondary space-y-2">
                                    <li><strong>100,000</strong> {t.masterThesis.scaleItems.websites}</li>
                                    <li><strong>9,344</strong> {t.masterThesis.scaleItems.banners}</li>
                                    <li><strong>96%</strong> {t.masterThesis.scaleItems.darkPatterns}</li>
                                    <li>{t.masterThesis.scaleItems.coverage}</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-3">{t.masterThesis.darkPatternCategories}</h4>
                                <ul className="text-theme-text-secondary space-y-2">
                                    <li>{t.masterThesis.darkPatternCategoriesItems.visibility}</li>
                                    <li>{t.masterThesis.darkPatternCategoriesItems.language}</li>
                                    <li>{t.masterThesis.darkPatternCategoriesItems.bias}</li>
                                    <li>{t.masterThesis.darkPatternCategoriesItems.rejection}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.masterThesis.technicalImplementation}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-2">{t.masterThesis.openWpmIntegration}</h4>
                                <p className="text-theme-text-secondary">
                                    {t.masterThesis.openWpmText}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-2">{t.masterThesis.dataProcessing}</h4>
                                <p className="text-theme-text-secondary">
                                    {t.masterThesis.dataProcessingText}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.masterThesis.impactSignificance}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <p className="text-theme-text-secondary leading-relaxed mb-4">
                            {t.masterThesis.impactText1}
                        </p>
                        <p className="text-theme-text-secondary leading-relaxed">
                            {t.masterThesis.impactText2}
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.masterThesis.futureWork}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <ul className="text-theme-text-secondary space-y-2">
                            <li>{t.masterThesis.futureWorkItems.beyondFirst}</li>
                            <li>{t.masterThesis.futureWorkItems.nlp}</li>
                            <li>{t.masterThesis.futureWorkItems.largerScale}</li>
                            <li>{t.masterThesis.futureWorkItems.multilingual}</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.masterThesis.resources}</h3>
                    <div className="flex gap-4">
                        <a 
                            href="Master_Thesis.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            {t.masterThesis.downloadThesis} →
                        </a>
                        <a 
                            href="https://github.com/openwpm/OpenWPM" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            {t.masterThesis.viewOpenWpm} →
                        </a>
                    </div>
                </section>
            </div>
        </PageTemplate>
    );
}