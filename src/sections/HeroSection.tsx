import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const socialMedias = [
    { icon: <FaFacebook size={20} />, link: "https://www.facebook.com/SoyBrayhanDeAza" },
    { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/brayhandeaza" },
    { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/brayhandeaza/" },
    { icon: <FaTwitter size={20} />, link: "https://twitter.com/brayhandeaza" }
]

const HeroSection: React.FC = () => {
    return (
        <section className="bd-slider-area titles">
            <div className="bd-slider-actives swiper-container">
                <div className="swiper-wrappers">
                    <div className="bd-single-slider d-flex align-items-center">
                        <div className="bd-slide-bg d-flex" style={{ height: "auto" }}>
                            <div style={{ marginTop: 80, paddingRight: 50 }} className="bd-slider-five-social wow fadeInUp">
                                <span style={{ marginLeft: -1, fontWeight: "600", marginBottom: 20 }}>Me</span>
                                <ul className="bd-social-icon mb-4">
                                    {socialMedias.map((sm, i) => (
                                        <li key={i}>
                                            <Link target="_blank" to={sm.link}>{sm.icon}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <span style={{ fontWeight: "600" }}>Follow</span>
                            </div>
                            <div className="container ps-0 ms-0">
                                <div className="row d-flex">
                                    <div className={`col-${window.innerWidth < 400 ? "12" : "12"}`}>
                                        <div className="bd-slider-five z-index">
                                            <div className="bd-slider-five-hello mb-10 wow fadeInUp" data-wow-delay=".2s">
                                                <span>Hi There,</span>
                                            </div>
                                            <h1 className="bd-slider-five-title wow fadeInUp" data-wow-delay=".4s">I'm Brayhan</h1>
                                            <h2 className="bd-slider-five-subtitle mb-30 wow fadeInUp" data-wow-delay=".6s">
                                                a Software <span className="text-color-red">Engineer.</span>
                                            </h2>
                                            <p className="col-10 wow fadeInUp textGray" data-wow-delay=".8s">
                                                I believe in the power of technology to transform lives and drive positive change, and I'm committed to leveraging my skills and experience to contribute to this vision. Whether you're a fellow developer, a potential collaborator, or simply curious about the world of software engineering, I invite you to connect with me and talk about this exciting journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
