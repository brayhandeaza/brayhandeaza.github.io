import { FaGithub } from "react-icons/fa"
import { Project } from "@/helpers/types"
import "@styles/FeaturedProject.scss"

type Props = {
    project: Project
}

const FeaturedProject: React.FC<Props> = ({ project }) => {
    return (
        <div className="featured-project">
            <span className="featured-badge">Currently Working On</span>
            <h3 className="featured-title">{project.name}</h3>
            <p className="featured-desc">{project.description}</p>
            <div className="featured-techs">
                {project.technologies?.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech.name}</span>
                ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="featured-github">
                <FaGithub size={24} />
            </a>
        </div>
    )
}

export default FeaturedProject
