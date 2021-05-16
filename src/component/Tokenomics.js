import React, { Component } from 'react'
// import SVGTokenomic from "../""

class Tokenomics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            isCopied: false
        }
    }

    componentDidMount() {
        this.setState({
            width: document.querySelector("body").clientWidth
        })
    }

    handleOnClick = (e) => {
        e.preventDefault()
        this.setState({
            isCopied: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    isCopied: false
                })
            }, 4000)
        })
    }

    render() {
        const { isCopied } = this.state
        const { isDonate } = this.props
        return (
            <section class="nose" id="wallet-donation">
                {!isDonate ? <div class="left center-flex">
                    <div class="circle">
                        <img src="/img/Tokenomics.png" width={250} alt="tokenomics" />
                    </div>
                    <div class="list">
                        <ul>
                            <li><span>70%</span>Public launch</li>
                            <li><span>10%</span>Foundation Reserved</li>
                            <li><span>10%</span>Initially burned</li>
                            <li><span>5%</span>Marketing</li>
                            <li><span>5%</span>Team</li>
                        </ul>
                    </div>
                </div> : null}
                <div class="right">
                    <div class="title">
                        <h1>Donate</h1>
                    </div>
                    <div class="wallet">
                        <img src="./img/qr.svg" alt="qr" />
                    </div>
                    <div class="address">
                        <span style={{ background: isCopied ? "rgba(47, 208, 95, 0.48)" : "rgba(0, 0, 0, 0.109)" }}>
                            0x483B621284DEB0A95155d2178e21Cb13ce8F234e
                        <i class="ti-layers" style={{ color: "#fff" }} onClick={this.handleOnClick} ></i>
                            {isCopied ? <p style={{ color: "#fff" }}>Address Copied</p> : null}
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Tokenomics