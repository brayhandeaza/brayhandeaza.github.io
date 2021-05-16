import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <header class="header" style={{ position: this.props.position ? "relative" : "fixed" }}>
                <div class="header__logo">
                    <a href="/">
                        <img width="40px" src="img/home/heart.png" alt="logo" />
                    </a>
                </div>
                <ul class="header__nav ">
                    <li class="dropdown header__dropdown">
                        <a class="dropdown-toggle" href="/" role="button">Home</a>
                    </li>
                    <li class="dropdown header__dropdown">
                        <a class="dropdown-toggle" href="https://t.me/datafy_dtf" target="blank" role="button">Telegram</a>
                    </li>
                    <li class="dropdown header__dropdown">
                        <a class="dropdown-toggle" href="https://twitter.com/mixion" target="blank" role="button">Twitter</a>
                    </li>
                    <li class="dropdown header__dropdown">
                        <a class="dropdown-toggle" target="_blank" rel="noopener noreferrer"
                            href="https://bscscan.com/token/0x650a8d398544e5f79bf151b199ca53bd0bcdda15"
                            role="button">Smart Contract</a>
                    </li>
                </ul>
                {!this.props.position ? <a href="/donate" id="donate" class="btn btn--header">Donate</a> : null}
                <button class="header__menu" type="button">
                    <i class="ti-menu"></i>
                    <i class="ti-close"></i>
                </button>
            </header>
        )
    }
}

export default Header