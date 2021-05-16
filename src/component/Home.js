import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section class="home home--circle">
                <div id="particles-js" class="home__particles"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-5 offset-xl-0">
                            <div class="home__content">
                                <h1 class="home__title" style={{ fontSize: 85, fontWeight: "lighter" }} >Mixion</h1>
                                <p class="home__text">
                                    Mixion plans to be one of the biggest fundraising platforms based on cryptocurrencies. We’re dedicated to the funding of innovative projects, events, challenging circumstances, and the development of a better future. Our goal is to build a community of people willing to contribute to a better world.
                                </p>
                                <a target="blank" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x650a8d398544e5f79bf151b199ca53bd0bcdda15" id="buyit">Buy it on PancakeSwap</a>
                            </div>
                        </div>
                        <div class="col-xl-5 offset-xl-1">
                            <div class="home__content home__content--desk">
                                <div>
                                    <img src={"img/home/heart.png"} style={{ width: 450 }} alt="camcer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home