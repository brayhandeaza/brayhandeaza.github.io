import {  useState } from "react"
import { PROJECTS } from '@mocks'
import { Link } from "react-router-dom"

const PortfolioScreen: React.FC = () => {
    const [currentProject, setCurrentProject] = useState("all")

    const projectImageSize = (key: number) => {
        switch (key) {
            case 0:
                return {
                    width: 850,
                    height: 600,
                    col: 8
                }

            case 1:
                return {
                    width: 410,
                    height: 600,
                    col: 4
                }

            default:
                return {
                    width: 410,
                    height: 340,
                    col: 4
                }
        }

    }


    return (
        <div className="PortafolioScreen">
            <main>
                <div className="bd-page-title-area pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bd-page-title text-center z-index">
                                    <h2 className="breadcrumb-title">Portfolio</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="bd-portfolio-area pt-50 pb-150">
                    <div className="filter-wrapper">
                        <div className="button-group portfolio-btn-group mb-30 text-center">
                            <button onClick={() => setCurrentProject("all")} className={currentProject === "all" ? "active" : ""}>All</button>
                            <button onClick={() => setCurrentProject("front-end")} className={currentProject === "front-end" ? "active" : ""} type="button">Front-End</button>
                            <button onClick={() => setCurrentProject("back-end")} className={currentProject === "back-end" ? "active" : ""} type="button">Back-End</button>
                            <button onClick={() => setCurrentProject("web")} className={currentProject === "web" ? "active" : ""} type="button">Web</button>
                            <button onClick={() => setCurrentProject("mobile")} className={currentProject === "mobile" ? "active" : ""} type="button">Mobile</button>
                            <button onClick={() => setCurrentProject("desktop")} className={currentProject === "desktop" ? "active" : ""} type="button">Desktop</button>
                        </div>
                        <div className="container mb-30">
                            <div className="row">
                                {PROJECTS.map((project, index) => (
                                    <div key={`project-${index}`} className={`hover col-lg-${projectImageSize(index).col} col-md-6 grid-item cat2`}>
                                        <Link to={`/portfolio/${index + 1}`} key={`project-${index}`} className={`hover col-lg-${projectImageSize(index).col} col-md-6 grid-item cat2`}>
                                            <div className="bd-portfolio mb-30">
                                                <img
                                                    alt="porfolio not found"
                                                    loading="lazy"
                                                    width={projectImageSize(index).width}
                                                    height={projectImageSize(index).height}
                                                    decoding="async"
                                                    data-nimg="1"
                                                    src={project.img} style={{ color: "transparent" }}
                                                />
                                                <div className="bd-portfolio-text">
                                                    <span>{project.category}</span>
                                                    <h5 className="bd-portfolio-title">
                                                        <a href="/portfolio-details/10">{project.name}</a>
                                                    </h5>

                                                    <div>
                                                        {project.technologies.map((technology, index) => (
                                                            <img
                                                                key={`technology-${index}`}
                                                                style={{ marginRight: 10, width: 25, objectFit: "contain" }}
                                                                src={technology.toString()}
                                                                alt={"technology-" + index}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default PortfolioScreen