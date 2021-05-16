import React, { Component } from 'react'
import roadMap from "../mock/roadmap"

class Roadmap extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        return (
            <section class="section" id="services">
                <div class="">
                    <div class="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                        <h2 class="section__title">Roadmap</h2>
                        {/* <p class="section__text">
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined
                            chunks as necessary, making this the first true generator on the Internet.
                        </p> */}
                    </div>
                    <div class="center" id="roadmaps">
                        {roadMap.map((map, key) => (
                            <div key={key} class="roadmap" style={{ width: 340, minHeight: 318 }}>
                                <div class="service" style={{ minHeight: 318 }}>
                                    <h3 class="service__title">Quarter {key >= 3 ? 1 + ` - 2022` : key + 2 + " - 2021"}</h3>
                                    <ul class="roadmap-list">
                                        {map.map((item, index) => (
                                            <li key={index} class={"marked"} style={{ textTransform: "capitalize" }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Roadmap