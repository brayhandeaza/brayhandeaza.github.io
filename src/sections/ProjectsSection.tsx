import { Project } from "@/helpers/types"
import "@styles/ProjectsSection.scss"

type Props = {
    projects: Project[]
}

const ProjectsSection: React.FC<Props> = ({ projects }) => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-heading mt-5">Projects</h2>
            <div className="projects-list col-12 d-flex">
                {projects.map((project) => (
                    <a href={project.github} target="_blank" key={project.id} className="project-card hover">
                        <div className="project-card-body">
                            <h3 className="project-name">
                                {project.name}
                            </h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-techs">
                                {project.technologies?.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech.name}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection
