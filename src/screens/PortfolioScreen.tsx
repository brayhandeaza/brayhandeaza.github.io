import { useEffect, useState } from "react"
import { PROJECTS } from '@mocks'
import { Link } from "react-router-dom"
import { getDocs, getDoc, collection, doc } from "firebase/firestore"
import { firestore, } from "../firebase"

const PortfolioScreen: React.FC = () => {
    const [currentProject, setCurrentProject] = useState("all")
    const [projects, setProjects] = useState<any[]>([])


    const fetchData = async () => {
        const allProjects: any[] = []
        const data = await getDocs(collection(firestore, "projects"))

        const snap = await getDoc(doc(firestore, 'projects', 'isyfxEAQCAsbyAwCiR4A'))
        

        data.forEach((doc) => {
            allProjects.push({ ...doc.data(), id: doc.id })
        })

        setProjects(allProjects)

        console.log(snap.data());

    }

    useEffect(() => {
        fetchData()
    }, [])


    const filterProjects = (filter: string) => {
        if (filter === currentProject) return

        if (filter === "all")
            setProjects(PROJECTS)
        else
            setProjects(PROJECTS.filter(project => project.category.toLowerCase() === filter.toLowerCase()))

        setCurrentProject(filter)

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
                            <button onClick={() => filterProjects("all")} className={currentProject === "all" ? "active" : ""}>All</button>
                            <button onClick={() => filterProjects("front-end")} className={currentProject === "front-end" ? "active" : ""} type="button">Front-End</button>
                            <button onClick={() => filterProjects("back-end")} className={currentProject === "back-end" ? "active" : ""} type="button">Back-End</button>
                            <button onClick={() => filterProjects("web")} className={currentProject === "web" ? "active" : ""} type="button">Web</button>
                            <button onClick={() => filterProjects("Mobile")} className={currentProject === "mobile" ? "active" : ""} type="button">Mobile</button>
                            <button onClick={() => filterProjects("desktop")} className={currentProject === "desktop" ? "active" : ""} type="button">Desktop</button>
                        </div>
                        <div className="container mb-30">
                            <div className="row">
                                {projects.map((project, index) => (
                                    <div key={`project-${index}`} className={`hover col-lg-4 col-md-6 grid-item cat2`}>
                                        <Link to={`/portfolio/${project.id}`} key={`project-${index}`} className={`hover col-lg-4 col-md-6 grid-item cat2`}>
                                            <div className="bd-portfolio mb-30">
                                                <img
                                                    alt="porfolio not found"
                                                    loading="lazy"
                                                    width={410}
                                                    height={340}
                                                    decoding="async"
                                                    data-nimg="1"
                                                    src={project.image} style={{ color: "transparent" }}
                                                />
                                                <div className="bd-portfolio-text">
                                                    <span>{project.category}</span>
                                                    <h5 className="bd-portfolio-titlee">
                                                        <a style={{ textTransform: "capitalize" }} href="/portfolio-details/10">{project.name}</a>
                                                    </h5>

                                                    <div>
                                                        {project.technologies.map((technology: string, index: number) => (
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