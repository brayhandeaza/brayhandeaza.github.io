import "@styles/HomeScreen.scss"
import { FiDownload, FiSend } from "react-icons/fi"
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Button } from "antd"
import { Modal, PDF } from "@components"
import { useState } from "react"
// import { HomeIllustration } from "@assets"

const HomeScreen: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const socialMedias = [
        {
            icon: <FaFacebook size={20} />,
            link: "https://www.facebook.com/SoyBrayhanDeAza"
        },
        {
            icon: <FaInstagram size={20} />,
            link: "https://www.instagram.com/brayhandeaza"
        },
        {
            icon: <FaLinkedin size={20} />,
            link: "https://www.linkedin.com/in/brayhandeaza/"
        },
        {
            icon: <FaTwitter size={20} />,
            link: "https://twitter.com/brayhandeaza"
        }
    ]
    const onMyResumeClick = () => {
        setIsModalOpen(true);
    }

    return (
        <div className="HomeScreen">
            <main className="">
                <section className="bd-slider-area titles">
                    <div className="bd-slider-actives swiper-container">
                        <div className="swiper-wrappers">
                            <div className="bd-single-slider d-flex align-items-center">
                                <div className="bd-slide-bg d-flex" style={{ height: "auto" }}>
                                    <div style={{ marginTop: 80, paddingRight: 50 }} className="bd-slider-five-social wow fadeInUp">
                                        <span style={{ marginLeft: -1, fontWeight: "600", marginBottom: 20 }}>
                                            Me
                                        </span>
                                        <ul className="bd-social-icon mb-4">
                                            {socialMedias.map((socialMedia, index) => (
                                                <li key={`social-media-${index}`}>
                                                    <Link target="_blank" to={socialMedia.link}>
                                                        {socialMedia.icon}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <span style={{ fontWeight: "600" }}>Follow</span>
                                    </div>
                                    <div className="container ps-0 ms-0">
                                        <div className="row d-flex">
                                            <div className={`col-${window.innerWidth < 400 ? "12" : "8"}`}>
                                                <div className="bd-slider-five z-index">
                                                    <div className="bd-slider-five-hello mb-10 wow fadeInUp" data-wow-delay=".2s">
                                                        <span>Hi There,</span>
                                                    </div>
                                                    <h1 className="bd-slider-five-title wow fadeInUp" data-wow-delay=".4s">I'm Brayhan</h1>
                                                    <h2 className="bd-slider-five-subtitle mb-30 wow fadeInUp" data-wow-delay=".6s">
                                                        a Software <span className="text-color-red">Engineer.</span>
                                                    </h2>
                                                    <p className="mb-30 wow fadeInUp textGray" data-wow-delay=".8s">
                                                        I'm a Software Engineer with  <b>5+ years experience </b>  who loves to code and <br />
                                                        bring ideas to life using object-oriented programming languages.
                                                    </p>
                                                    <p className="mb-30 wow fadeInUp textGray" data-wow-delay=".8s">
                                                        I believe in the power of technology to transform lives and drive positive change, and I'm committed to leveraging my skills and experience to contribute to this vision. Whether you're a fellow developer, a potential collaborator, or simply curious about the world of software engineering, I invite you to connect with me and talk about this exciting journey.
                                                    </p>
                                                    <div className="bd-slider-five-btn wow fadeInUp button-down-fade" data-wow-delay="1s">
                                                        <a className="theme-btn d-flex align-items-center mb-10 " href="/contact">
                                                            Say Hello <FiSend className="ms-2" size={18} />
                                                        </a>
                                                    </div>
                                                    <div className="ms-1 bd-slider-five-video show-on-mobile">
                                                        <div style={{ borderRadius: 100 }} className="bd-slider-five-video-icon wow ms-3" data-wow-delay="1.2s">
                                                            <Button onClick={onMyResumeClick} className="play_btn popup-video resume-btn">
                                                                <FiDownload color="#6a6a6a" size={15} />
                                                            </Button>
                                                            <Modal onClose={(open: boolean) => setIsModalOpen(open)} open={isModalOpen} >
                                                                <PDF />
                                                            </Modal>
                                                        </div>
                                                        <div className="bd-slider-five-video-text wow fadeInUp" data-wow-delay="1.4s">
                                                            <span>Take a look at</span>
                                                            <h5>My Resume</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                {/* <img style={{ width: "100%", height: "auto" }} src={HomeIllustration} alt="img not found" /> */}
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
    )
}

export default HomeScreen