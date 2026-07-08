import "@styles/HomeScreen.scss"
import { Header } from "@components"
import HeroSection from "../sections/HeroSection"
import ProjectsSection from "../sections/ProjectsSection"
import projectsData from "../data/portfolio.json"

const HomeScreen: React.FC = () => {
    return (
        <>
            <Header />
            <div className="HomeScreen">
                <main className="home-layout">
                    <div className="home-left">
                        <HeroSection />
                        <ProjectsSection projects={projectsData} />
                    </div>                  
                </main>
            </div>
        </>
    )
}

export default HomeScreen
