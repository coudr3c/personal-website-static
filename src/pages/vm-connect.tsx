import PageTemplate from './page-template';
import { useTranslation } from '../i18n/context';

export default function VmConnect() {
    const { t } = useTranslation();

    return (
        <PageTemplate pageTitle={t.pages.vmConnect} seoPageKey="vm-connect">
            <div className="space-y-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
                        {t.vmConnect.title}
                    </h2>
                    <p className="text-lg text-theme-text-secondary mb-6">
                        {t.vmConnect.subtitle}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-theme-text-primary mb-3">{t.vmConnect.projectOverview}</h3>
                        <ul className="space-y-2 text-theme-text-secondary">
                            <li><strong>{t.vmConnect.period}:</strong> 2025</li>
                            <li><strong>{t.vmConnect.purpose}:</strong> {t.vmConnect.purposeText}</li>
                            <li><strong>{t.vmConnect.target}:</strong> {t.vmConnect.targetText}</li>
                            <li><strong>{t.vmConnect.platform}:</strong> {t.vmConnect.platformText}</li>
                        </ul>
                    </div>
                    
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-theme-text-primary mb-3">{t.vmConnect.technologies}</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Rust', 'egui', 'Tokio', 'AWS SDK', 'AWS SSM', 'RDP', 'WebSocket', 'Cross-platform'].map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.vmConnect.problemStatement}</h3>
                    <p className="text-theme-text-secondary leading-relaxed">
                        {t.vmConnect.problemText}
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.vmConnect.solutionFeatures}</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-theme-surface rounded-lg border border-theme-border p-4 shadow-sm">
                            <h4 className="font-semibold text-theme-text-primary mb-2">{t.vmConnect.coreFunctionality}</h4>
                            <ul className="text-theme-text-secondary space-y-1">
                                <li>{t.vmConnect.coreItems.ssmTunnel}</li>
                                <li>{t.vmConnect.coreItems.rdpConnection}</li>
                                <li>{t.vmConnect.coreItems.guiInterface}</li>
                                <li>{t.vmConnect.coreItems.multiVm}</li>
                            </ul>
                        </div>
                        <div className="bg-theme-surface rounded-lg border border-theme-border p-4 shadow-sm">
                            <h4 className="font-semibold text-theme-text-primary mb-2">{t.vmConnect.advancedFeatures}</h4>
                            <ul className="text-theme-text-secondary space-y-1">
                                <li>{t.vmConnect.advancedItems.portForwarding}</li>
                                <li>{t.vmConnect.advancedItems.rdpDiscovery}</li>
                                <li>{t.vmConnect.advancedItems.taskManagement}</li>
                                <li>{t.vmConnect.advancedItems.shutdown}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.vmConnect.technicalArchitecture}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-2">{t.vmConnect.threadingModel}</h4>
                                <p className="text-theme-text-secondary">
                                    {t.vmConnect.threadingText}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-2">{t.vmConnect.communicationFlow}</h4>
                                <p className="text-theme-text-secondary">
                                    {t.vmConnect.communicationText}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.vmConnect.securityBestPractices}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <ul className="text-theme-text-secondary space-y-3">
                            <li>
                                <strong>AWS IAM Integration:</strong> {t.vmConnect.securityItems.iamIntegration}
                            </li>
                            <li>
                                <strong>Resource Management:</strong> {t.vmConnect.securityItems.resourceManagement}
                            </li>
                            <li>
                                <strong>Error Handling:</strong> {t.vmConnect.securityItems.errorHandling}
                            </li>
                            <li>
                                <strong>Thread Safety:</strong> {t.vmConnect.securityItems.threadSafety}
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.vmConnect.implementationHighlights}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-3">{t.vmConnect.technicalAchievements}</h4>
                                <ul className="text-theme-text-secondary space-y-2">
                                    <li>{t.vmConnect.technicalItems.crossPlatform}</li>
                                    <li>{t.vmConnect.technicalItems.asyncPatterns}</li>
                                    <li>{t.vmConnect.technicalItems.processMonitoring}</li>
                                    <li>{t.vmConnect.technicalItems.modernGui}</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-3">{t.vmConnect.developmentQuality}</h4>
                                <ul className="text-theme-text-secondary space-y-2">
                                    <li>{t.vmConnect.qualityItems.errorHandling}</li>
                                    <li>{t.vmConnect.qualityItems.modularArch}</li>
                                    <li>{t.vmConnect.qualityItems.rustEdition}</li>
                                    <li>{t.vmConnect.qualityItems.buildTargets}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.vmConnect.impactFuture}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <p className="text-theme-text-secondary leading-relaxed mb-4">
                            {t.vmConnect.impactText}
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-2">{t.vmConnect.currentStatus}</h4>
                                <ul className="text-theme-text-secondary space-y-1">
                                    <li>✅ {t.vmConnect.currentItems.coreFunctionality}</li>
                                    <li>✅ {t.vmConnect.currentItems.guiInterface}</li>
                                    <li>✅ {t.vmConnect.currentItems.crossPlatform}</li>
                                    <li>✅ {t.vmConnect.currentItems.errorHandling}</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-theme-text-primary mb-2">{t.vmConnect.futureEnhancements}</h4>
                                <ul className="text-theme-text-secondary space-y-1">
                                    <li>{t.vmConnect.futureItems.dynamicConfig}</li>
                                    <li>{t.vmConnect.futureItems.profileManagement}</li>
                                    <li>{t.vmConnect.futureItems.integrationTests}</li>
                                    <li>{t.vmConnect.futureItems.dynamicRdp}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.vmConnect.resources}</h3>
                    <div className="flex gap-4">
                        <a 
                            href="https://github.com/coudr3c/rust-vm-connect" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            {t.vmConnect.viewSourceCode} →
                        </a>
                    </div>
                </section>
            </div>
        </PageTemplate>
    );
}