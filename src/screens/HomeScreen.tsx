import "@styles/HomeScreen.scss"
import { FiMail } from "react-icons/fi"
import { FaFacebook, FaPlay, FaInstagram, FaTwitter } from "react-icons/fa"

const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <main className="">
                <section className="bd-slider-area titles">
                    <div className="bd-slider-actives swiper-container">
                        <div className="swiper-wrappers">
                            <div className="bd-single-slider d-flex align-items-center">
                                <div className="bd-slide-bg d-flex" style={{ height: "auto" }}>
                                    <div style={{ marginTop: 80, paddingRight: 50 }} className="bd-slider-five-social wow fadeInUp">
                                        <span style={{ marginLeft: -4, fontWeight: "600", marginBottom: 20 }}>
                                            Me
                                        </span>
                                        <ul className="bd-social-icon mb-4">
                                            <li>
                                                <a href="https://www.facebook.com/">
                                                    <FaFacebook size={20} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/">
                                                    <FaInstagram size={20} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/">
                                                    <FaTwitter size={20} />
                                                </a>
                                            </li>
                                        </ul>
                                        <span style={{ fontWeight: "600" }}>Follow</span>
                                    </div>
                                    <div className="container ps-0 ms-0">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="bd-slider-five z-index">
                                                    <div className="bd-slider-five-hello mb-10 wow fadeInUp" data-wow-delay=".2s">
                                                        <span>Hi There,</span>
                                                    </div>
                                                    <h1 className="bd-slider-five-title wow fadeInUp" data-wow-delay=".4s">I'm Brayhan</h1>
                                                    <h2 className="bd-slider-five-subtitle mb-30 wow fadeInUp" data-wow-delay=".6s">
                                                        a Software <span>Engineer</span>
                                                    </h2>
                                                    <p className="mb-30 wow fadeInUp" data-wow-delay=".8s">
                                                        I'm a Software Engineer with  <b>5+ years experience </b>  who loves to code and <br /> bring ideas to life using object-oriented programming languages.
                                                    </p>
                                                    <div className="bd-slider-five-btn wow fadeInUp" data-wow-delay="1s">
                                                        <a className="theme-btn d-flex align-items-center " href="/contact">
                                                            Say Hello <FiMail className="ms-2" size={18} />
                                                        </a>
                                                    </div>
                                                    <div className="bd-slider-five-video">
                                                        <div className="bd-slider-five-video-icon wow fadeInUp" data-wow-delay="1.2s">
                                                            <a className="play_btn popup-video" href="">
                                                                <FaPlay size={15} />
                                                            </a>
                                                        </div>
                                                        <div className="bd-slider-five-video-text wow fadeInUp" data-wow-delay="1.4s">
                                                            <span>Watch</span>
                                                            <h5>How I Work</h5>
                                                        </div>
                                                    </div>
                                                </div>
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