import PageTemplate from './page-template';
import SkillCard from '../components/skill-card';
import { useTranslation } from '../i18n/context';

export default function Skills() {
    const { t } = useTranslation();
    
    return (
        <PageTemplate pageTitle={t.pages.skills} seoPageKey="skills">
            <div className="grid gap-6">
                <SkillCard title={t.skills.webDevelopment}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-theme-text-primary">{t.skills.backend}</h3>
                            <ul className="space-y-2 list-disc list-inside text-theme-text-secondary">
                                <li>Symfony/PHP 8</li>
                                <li>Laravel</li>
                                <li>Doctrine ORM</li>
                                <li>API Platform</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-theme-text-primary">{t.skills.frontend}</h3>
                            <ul className="space-y-2 list-disc list-inside text-theme-text-secondary">
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>HighCharts</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-theme-text-primary">{t.skills.infraDevOps}</h3>
                            <ul className="space-y-2 list-disc list-inside text-theme-text-secondary">
                                <li>AWS (Cognito, API Gateway, Event Bridge, CloudWatch, ECS, S3, RDS...)</li>
                                <li>Terraform</li>
                                <li>Azure</li>
                                <li>Docker</li>
                                <li>Github Actions</li>
                            </ul>
                        </div>
                    </div>
                </SkillCard>

                <SkillCard title={t.skills.programmingLanguages}>
                    <ul className="space-y-2 list-disc list-inside text-theme-text-secondary">
                        <li>PHP 8</li>
                        <li>Scala/Java</li>
                        <li>C/C++</li>
                        <li>Python</li>
                        <li>{t.skills.notionsGoRust}</li>
                    </ul>
                </SkillCard>

                <SkillCard title={t.skills.computerScience}>
                    <ul className="space-y-2 list-disc list-inside text-theme-text-secondary">
                        <li>{t.skills.designPatterns}</li>
                        <li>{t.skills.dataScience}</li>
                        <li>{t.skills.cryptography}</li>
                        <li>{t.skills.scientificCommunication}</li>
                    </ul>
                </SkillCard>

                <SkillCard title={t.skills.languages}>
                    <ul className="space-y-2 list-disc list-inside text-theme-text-secondary">
                        <li>{t.skills.frenchNative}</li>
                        <li>{t.skills.englishFluent}</li>
                    </ul>
                </SkillCard>
            </div>
        </PageTemplate>
    );
}
