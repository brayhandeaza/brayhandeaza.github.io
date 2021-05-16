import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { particlesConfig } from "../js/particles"

class ParticleBackground extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id="Particles">
                <Particles className="canvas" params={particlesConfig}  />
            </div>
        )
    }
}

export default ParticleBackground