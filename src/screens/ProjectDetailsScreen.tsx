
const ProjectDetailsScreen: React.FC = () => {
    return (
        <div className="ProjectDetailsScreen">
            <main>
                <div className="bd-page-title-area pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bd-page-title text-center z-index">
                                    <h2 className="breadcrumb-title">Web Business Plan</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="bd-service-details-area pt-50 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="bd-service-details mb-20">
                                    <div className="bd-service-details-img mb-50">
                                        <img alt="img not found" loading="lazy" width="850"
                                            height="550" decoding="async" data-nimg="1"
                                            src="https://saja-react-13-4.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio-img-4.268c7bd5.jpg&w=1920&q=75"
                                            style={{ color: "transparent", width: "100%" }}
                                        />

                                    </div>
                                    <p className="mb-30">When I skim through the documentation of popular frameworks, I find the
                                        features described in Part 1 straight away. When I read the web platform documentation (for
                                        example, on MDN), I find many confusing patterns of how to do things, without a conclusive
                                        representation of data-binding, list synchronization, or reactivity. I will try to draw some
                                        guidelines of how to approach these problems on the web platform, without requiring a
                                        framework (in other words, by going vanilla).</p>
                                    <h4 className="mb-25">Special Features</h4>
                                    <p className="mb-30">When an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book has been survived not only five centuries, but also the leap into electronic
                                        typesetting.</p>
                                    <div className="bd-service-details-feature mb-40">
                                        <h5 className="mb-20">Finished Check Steps</h5>
                                        <ul>
                                            <li><i className="far fa-check"></i> Assets Optimizations</li>
                                            <li><i className="far fa-check"></i> Setting Realistic Goals Set</li>
                                            <li><i className="far fa-check"></i> Delivery Optimizations</li>
                                            <li><i className="far fa-check"></i> Laravel Structure</li>
                                            <li><i className="far fa-check"></i> Assets Optimizations</li>
                                            <li><i className="far fa-check"></i> Setting Realistic Goals Set</li>
                                            <li><i className="far fa-check"></i> Delivery Optimizations</li>
                                        </ul>
                                    </div>
                                    <h4 className="mb-30">Sketch &amp; Planning</h4>
                                    <p className="mb-35">When an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book has been survived not only five centuries, but also the leap into electronic
                                        typesetting. Master the tools that front-end developers use every day.</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="bd-service mb-30">
                                                <div className="bd-service-icon mb-20"><i className="flaticon-coding"></i></div>
                                                <h4 className="bd-service-title mb-20"><a href="/service-details">Web Development</a>
                                                </h4>
                                                <p>Reach new audiences with omnichannel commerce anywhere in the world and surpass
                                                    industry</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bd-service mb-30">
                                                <div className="bd-service-icon mb-20"><i className="flaticon-notes"></i></div>
                                                <h4 className="bd-service-title mb-20"><a href="/service-details">Content Writing</a>
                                                </h4>
                                                <p>Use drag-and-drop functionality, custom product recommendations and headless
                                                    customize your website.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bd-service-sidebar mb-50">
                                    <div className="bd-service-widget gray-bg mb-30">
                                        <div className="bd-service-sidebar-category">
                                            <h5 className="bd-service-sidebar-category-title mb-20">Information</h5>
                                            <div className="bd-service-sidebar-infos">
                                                <div className="bd-service-sidebar-info mb-25"><span>Date</span>
                                                    <h6>25 Nov 2021 - 13 Feb 2022</h6>
                                                </div>
                                                <div className="bd-service-sidebar-info mb-25"><span>Client</span>
                                                    <h6>Syalam Aderson</h6>
                                                </div>
                                                <div className="bd-service-sidebar-info"><span>Category</span>
                                                    <h6>Consultancy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd-service-sidebar-btn"><a className="theme-btn w-full mb-20" href="">Watch Live</a><a
                                        className="theme-btn-black w-full" href="">Download Brochure <i
                                            className="far fa-arrow-alt-to-bottom"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default ProjectDetailsScreen