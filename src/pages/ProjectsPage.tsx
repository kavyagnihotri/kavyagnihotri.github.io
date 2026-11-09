import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

/**
 * Project entry from /public/projects/index.json
 * `repo` and `link` are optional: add them whenever a project gets a public home.
 */
type Project = {
  title: string;
  period: string;
  group: string;
  summary: string;
  tag?: string;
  tech?: string[];
  repo?: string;
  link?: string;
};

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <article className="py-4 border-b last:border-b-0">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.tag && <Badge variant="outline" className="text-xs">{project.tag}</Badge>}
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">{project.period}</span>
      </div>

      <p className="text-muted-foreground mt-1 leading-relaxed">{project.summary}</p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
        {project.tech?.map((t) => (
          <Badge key={t} variant="secondary" className="text-xs font-normal">{t}</Badge>
        ))}
        <div className="flex items-center gap-4 text-sm ml-auto">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Github className="h-4 w-4" /> Code
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <ExternalLink className="h-4 w-4" /> Link
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

/**
 * ProjectsPage
 *
 * An unlisted page (not in the header nav, linked only from the footer)
 * with everything on the CV that isn't on the main page.
 * Data: /public/projects/index.json
 */
const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/projects/index.json')
      .then((r) => (r.ok ? r.json() : []))
      .then(setProjects)
      .catch(() => setProjects([]));
  }, []);

  // Keep groups in the order they first appear in the JSON
  const groups = [...new Set(projects.map((p) => p.group))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground mb-8">
            Research and side projects. Code is linked where it is public.
          </p>
          {groups.map((group) => (
            <section key={group} className="mb-10">
              <h2 className="text-2xl font-bold mb-2 pb-2 border-b">{group}</h2>
              {projects.filter((p) => p.group === group).map((p) => (
                <ProjectItem key={p.title} project={p} />
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
