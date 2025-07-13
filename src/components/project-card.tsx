import { memo } from 'react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-theme-surface rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border border-theme-border min-h-[320px] flex flex-col">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-theme-text-primary leading-tight mb-2">
          {project.title}
        </h3>
        {project.period && (
          <span className="text-sm text-theme-text-secondary font-medium">
            {project.period}
          </span>
        )}
      </div>
      
      <p className="text-theme-text-secondary mb-6 leading-relaxed text-base flex-grow">
        {project.description}
      </p>
      
      <div className="mt-auto space-y-4">
        {project.links && Object.keys(project.links).length > 0 && (
          <div className="flex flex-wrap gap-4 pt-4 border-t border-theme-border">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Demo
              </a>
            )}
            {project.links.report && (
              <a
                href={project.links.report}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Report
              </a>
            )}
            {project.links.external && (
              <a
                href={project.links.external}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
          </div>
        )}
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="pt-2">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="tech-tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(ProjectCard);