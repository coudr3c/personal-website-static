import PageTemplate from './page-template';
import { useTranslation } from '../i18n/context';

export default function GSoC() {
    const { t } = useTranslation();

    return (
        <PageTemplate pageTitle={t.pages.gsoc} seoPageKey="gsoc">
            <div className="space-y-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
                        {t.gsoc.title}
                    </h2>
                    <p className="text-lg text-theme-text-secondary mb-6">
                        {t.gsoc.subtitle}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-theme-text-primary mb-3">{t.gsoc.projectOverview}</h3>
                        <ul className="space-y-2 text-theme-text-secondary">
                            <li><strong>{t.gsoc.year}:</strong> 2017</li>
                            <li><strong>{t.gsoc.organization}:</strong> Scala Native</li>
                            <li><strong>{t.gsoc.mentor}:</strong> Denys Shabalin</li>
                            <li><strong>{t.gsoc.duration}:</strong> Summer 2017</li>
                        </ul>
                    </div>
                    
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-theme-text-primary mb-3">{t.gsoc.technologies}</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Scala', 'C++', 'Java', 'POSIX Threads', 'Atomics', 'Compilers'].map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.gsoc.projectGoal}</h3>
                    <p className="text-theme-text-secondary leading-relaxed">
                        {t.gsoc.projectGoalText}
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.gsoc.keyComponents}</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-theme-surface rounded-lg border border-theme-border p-4 shadow-sm">
                            <h4 className="font-semibold text-theme-text-primary mb-2">{t.gsoc.lowLevelPrimitives}</h4>
                            <ul className="text-theme-text-secondary space-y-1">
                                <li>{t.gsoc.lowLevelItems.posix}</li>
                                <li>{t.gsoc.lowLevelItems.atomics}</li>
                                <li>{t.gsoc.lowLevelItems.concurrent}</li>
                            </ul>
                        </div>
                        <div className="bg-theme-surface rounded-lg border border-theme-border p-4 shadow-sm">
                            <h4 className="font-semibold text-theme-text-primary mb-2">{t.gsoc.highLevelComponents}</h4>
                            <ul className="text-theme-text-secondary space-y-1">
                                <li>{t.gsoc.highLevelItems.locks}</li>
                                <li>{t.gsoc.highLevelItems.thread}</li>
                                <li>{t.gsoc.highLevelItems.forkJoin}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.gsoc.majorChallenges}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <ul className="text-theme-text-secondary space-y-3">
                            <li>
                                {t.gsoc.challengesItems.youngProject}
                            </li>
                            <li>
                                {t.gsoc.challengesItems.missingFeatures}
                            </li>
                            <li>
                                {t.gsoc.challengesItems.complexDependencies}
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.gsoc.technicalAchievements}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <ul className="text-theme-text-secondary space-y-3">
                            <li>
                                {t.gsoc.achievementsItems.ported}
                            </li>
                            <li>
                                {t.gsoc.achievementsItems.implemented}
                            </li>
                            <li>
                                {t.gsoc.achievementsItems.created}
                            </li>
                            <li>
                                {t.gsoc.achievementsItems.contributed}
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.gsoc.learningOutcomes}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <p className="text-theme-text-secondary leading-relaxed mb-4">
                            {t.gsoc.learningText}
                        </p>
                        <ul className="text-theme-text-secondary space-y-2">
                            <li><strong>Compiler Engineering:</strong> {t.gsoc.learningItems.compiler}</li>
                            <li><strong>Systems Programming:</strong> {t.gsoc.learningItems.systems}</li>
                            <li><strong>Language Design:</strong> {t.gsoc.learningItems.language}</li>
                            <li><strong>Open Source Collaboration:</strong> {t.gsoc.learningItems.openSource}</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.gsoc.acknowledgements}</h3>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-6 shadow-sm">
                        <p className="text-theme-text-secondary leading-relaxed mb-4">
                            {t.gsoc.acknowledgementsText1}
                        </p>
                        <p className="text-theme-text-secondary leading-relaxed">
                            {t.gsoc.acknowledgementsText2}
                        </p>
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">{t.gsoc.impactFuture}</h3>
                    <p className="text-theme-text-secondary leading-relaxed mb-4">
                        {t.gsoc.impactText}
                    </p>
                    <div className="flex gap-4">
                        <a 
                            href="https://github.com/scala-native/scala-native" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            {t.gsoc.viewScalaNative} →
                        </a>
                        <a 
                            href="https://github.com/coudr3c/scala-native" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            {t.gsoc.viewContributions} →
                        </a>
                    </div>
                </section>
            </div>
        </PageTemplate>
    );
}
