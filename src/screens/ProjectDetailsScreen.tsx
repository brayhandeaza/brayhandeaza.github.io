import { getDoc, doc } from "firebase/firestore"
import { firestore, } from "../firebase"
import { useEffect, useState } from "react"
import { github, notion } from "@assets"
import { Link, useParams } from "react-router-dom"
import { Result } from "antd"

type Project = {
    name?: string
    description?: string
    github?: string
    notion?: string
    image?: string
    date?: string
    url?: string
    technologies?: any[]
}

const ProjectDetailsScreen: React.FC = () => {
    const params = useParams()
    const [project, setProject] = useState<Project>({})
    const [show404, setShow404] = useState<string>("")

    const fetchData = async () => {
        if (!params.projectId) return

        const query = await getDoc(doc(firestore, 'projects', params.projectId))
        setShow404(Boolean(query.exists()) ? "not" : "yes")
        if (query.exists())
            setProject(query.data())
        else
            setProject({})

        console.log(query.exists());


    }

    useEffect(() => {

        fetchData()
    }, [])
    return (
        <>
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
                                                {project?.technologies?.map((technology: any, index: number) => (
                                                    <div className="d-flex mr-10 bd-service-icon" key={`technology-${index}`}>
                                                        <img className="mr-10" style={{ width: 20, height: 20 }} src={technology?.image} alt="img not found" loading="lazy" />
                                                        <span style={{ textTransform: "capitalize", color: "black" }}>{technology?.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <h4 className="mb-10">Documentation</h4>
                                            <p className="mb-15">When an unknown printer took a galley of type and scrambled it to make a type
                                                specimen book has been survived not only five centuries, but also the leap into electronic
                                                typesetting. Master the tools that front-end developers use every day.</p>
                                            <div className="row">
                                                <Link target="_blank" to={`${project?.notion}`} className="col-md-6">
                                                    <div className="bd-service mb-30">
                                                        <div className="bd-service-icon mb-20">
                                                            <img className="mr-10" style={{ width: 50, height: 50 }} src={notion} alt="img not found" loading="lazy" />
                                                        </div>
                                                        <h4 className="bd-service-title mb-20"><a href="/service-details">Sketch &amp; Planning</a>
                                                        </h4>
                                                        <p>Reach new audiences with omnichannel commerce anywhere in the world and surpass
                                                            industry</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Left Side */}
                                    <div className="col-lg-4">
                                        <div className="bd-service-sidebar mb-50">
                                            <div className="bd-service-widget gray-bg mb-30">
                                                <div className="bd-service-sidebar-category">
                                                    <h5 className="bd-service-sidebar-category-title mb-20 capitalize">{project.name}</h5>
                                                    <div className="bd-service-sidebar-infos">
                                                        <div className="bd-service-sidebar-info mb-25"><span>Date</span>
                                                            <h6>{project?.date}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-30">
                                                    <Link target="_blank" to={`${project?.url}`} className="mr-10 theme-btn">View Live</Link>
                                                    <Link style={{ padding: 25, backgroundColor: "white" }} target="_blank" to={`${project?.github}`} className="theme-btn">
                                                        <img style={{ objectFit: "contain" }} src={github} alt="Source Code" />
                                                    </Link>
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