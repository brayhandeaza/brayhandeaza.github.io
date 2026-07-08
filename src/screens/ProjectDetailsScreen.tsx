import { useEffect, useState } from "react"
import { github } from "@assets"
import { Link, useParams } from "react-router-dom"
import { Result } from "antd"
import { Header } from "@components"
import { Project } from "@/helpers/types"
import projectsData from "../data/portfolio.json"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

const ProjectDetailsScreen: React.FC = () => {
    const params = useParams()
    const [project, setProject] = useState<Project>({})
    const [show404, setShow404] = useState<string>("")

    useEffect(() => {
        if (!params.projectId) return

        const found = projectsData.find((p) => p.id === params.projectId)
        setShow404(found ? "not" : "yes")
        setProject(found ?? {})
    }, [params.projectId])

    return (
        <>
            <Header />
            {(show404 === "not") && (
                <div className="ProjectDetailsScreen">
                    <main>
                        <section className="bd-service-details-area pt-100 pb-100">
                            <div className="container">
                                <div className="row">
                                    {/* Right Side */}
                                    <div className="col-lg-8">
                                        <div className="bd-service-details mb-20">
                                            <div className="bd-service-details-img mb-50">
                                                <img alt="img not found" loading="lazy" width="850"
                                                    height="550" decoding="async" data-nimg="1"
                                                    src={project?.image}
                                                    style={{ color: "transparent", width: "100%" }}
                                                />
                                            </div>
                                            <p className="mb-40">{project?.description}</p>
                                            <h4 className="mb-15">Technologies Used</h4>
                                            <div className="d-flex bd-service-details-feature mb-50">
                                                {project?.technologies?.map((technology, index: number) => (
                                                    <div className="d-flex mr-10 bd-service-icon" key={`technology-${index}`}>
                                                        <img className="mr-10" style={{ width: 20, height: 20 }} src={technology?.image} alt="img not found" loading="lazy" />
                                                        <span style={{ textTransform: "capitalize", color: "black" }}>{technology?.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <h4 className="mb-10">Documentation</h4>
                                            <div className="markdown-content">
                                                <Markdown remarkPlugins={[remarkGfm]}>
                                                    {project?.readme ?? ""}
                                                </Markdown>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Left Side */}
                                    <div className="col-lg-4">
                                        <div className="bd-service-sidebar mb-50">
                                            <div className="bd-service-widget gray-bg mb-30">
                                                <div className="bd-service-sidebar-category">
                                                    <h5 className="bd-service-sidebar-category-title mb-20 capitalize">{project.name}</h5>                                                    
                                                </div>
                                                <div className="source-code d-flex justify-content-between mt-30">
                                                    {project?.url && <Link target="_blank" to={`${project?.url}`} className="mr-10 theme-btn">View Live</Link>}
                                                    <div className="d-flex flex-column" style={{ background: "#343333" }}>
                                                        <Link target="_blank" to={project.github ?? ""}>
                                                            <img style={{ objectFit: "contain" }} src={github} alt="Source Code" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                </div>
            )}
            {(show404 === "yes") && (
                <Result
                    status={"404"}
                    title={<h1>404</h1>}
                    subTitle={<h4>Sorry, the page you visited does not exist.</h4>}
                />
            )}
        </>
    )
}

export default ProjectDetailsScreen