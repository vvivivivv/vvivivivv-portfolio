import { ArrowRight, Github } from "lucide-react";
import javaImage from "../assets/images/java.png";
import rstudioImage from "../assets/images/rstudio.png";
import canvaImage from "../assets/images/canva.png";

const projects = [
  {
    id: 1,
    title: "BTO Management System",
    description: "Java-based backend system for managing Build-To-Order housing processes using MVC and file I/O.",
    image: javaImage,
    tags: ["Java"],
    githubUrl: "https://github.com/vvivivivv/bto-management-system",
  },
  {
    id: 2,
    title: "Crop Yield Analysis",
    description: "Data analysis and ML regression model to predict crop yield productivity and output.",
    image: rstudioImage,
    tags: ["R Studio", "Machine Learning"],
    githubUrl: "https://github.com/vvivivivv/crop-yield-analytics",
  },
  {
    id: 3,
    title: "Project Mockups via Canva",
    description: "Mockups created with Canva for UI planning and prototyping.",
    image: canvaImage,
    tags: ["Canva", "Design"],
    githubUrl: "https://github.com/vvivivivv/project-mockups",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of my recent projects that I have completed
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-large overflow-hidden shadow-xs card-hover h-[400px] flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-end">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/vvivivivv"
          >
            My Github
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
