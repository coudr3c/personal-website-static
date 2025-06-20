import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border border-zinc-200 dark:border-zinc-700 min-h-[320px] flex flex-col">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight mb-2">
          {project.title}
        </h3>
        {project.period && (
          <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            {project.period}
          </span>
        )}
      </div>
      
      <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed text-base flex-grow">
        {project.description}
      </p>
      
      <div className="mt-auto space-y-4">
        {project.links && Object.keys(project.links).length > 0 && (
          <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-600">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
              >
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
              >
                Demo
              </a>
            )}
            {project.links.report && (
              <a
                href={project.links.report}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
              >
                Report
              </a>
            )}
            {project.links.external && (
              <a
                href={project.links.external}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
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
                  className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
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