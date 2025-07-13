import PageTemplate from './page-template';
import ProjectCard from '../components/project-card';
import { projects } from '../data/projects';
import { useTranslation } from '../i18n/context';
import { useMemo } from 'react';

export default function Projects() {
    const { t } = useTranslation();

    // Memoize filtered and grouped projects for performance
    const { featuredProjects, groupedProjects } = useMemo(() => {
        const featuredProjects = projects.filter(project => project.featured);
        const otherProjects = projects.filter(project => !project.featured);

        const groupedProjects = otherProjects.reduce((acc, project) => {
            if (!acc[project.category]) {
                acc[project.category] = [];
            }
            acc[project.category].push(project);
            return acc;
        }, {} as Record<string, typeof projects>);

        return { featuredProjects, groupedProjects };
    }, []);

    return (
        <PageTemplate pageTitle={t.pages.projects}>
            <div className="space-y-12">
                {featuredProjects.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-theme-text-primary mb-6">
                            {t.projects.featured}
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {featuredProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>
                )}

                {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
                    <section key={category}>
                        <h2 className="text-2xl font-bold text-theme-text-primary mb-6">
                            {t.projects.categories[category as keyof typeof t.projects.categories]}
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {categoryProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </PageTemplate>
    );
}
