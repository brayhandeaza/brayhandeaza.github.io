import projectsData from "../data/portfolio.json"

import "@styles/ProjectsSection.scss"



const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-heading mt-5">Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <a href={project.github} target="_blank" key={project.id} className="project-card">
                        <div className="project-card-inner">
                            <img className="project-image" src={project.image} alt={project.name} loading="lazy" />
                            <div className="project-card-overlay">
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-techs">
                                    {project.technologies?.map((tech, i) => (
                                        <img key={i} src={tech.image} alt={tech.name} title={tech.name} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection
