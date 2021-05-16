import React, { Component } from 'react'

class HowToBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <section class="section bg-white">
                <div class="container">
                    <div class="nk-block nk-block-text-wrap">
                        <div class="row align-items-center gutter-vr-30px justify-content-center justify-content-lg-between">
                            <div class="col-lg-5 order-lg-last">
                                <div class="gfx gfx-auto gfx-md animated" data-animate="fadeInUp" data-delay=".1">
                                    {/* <img src="images/gfx/gfx-z-d.png" alt="app" /> */}
                                </div>
                            </div>
                            <div class="col-lg-7 col-mb-9">
                                <div class="nk-block-text">
                                    <div class="pb-5 animated" data-animate="fadeInUp" data-delay=".2">
                                        <h2 class="title">How to Buy $MXN 💸</h2>
                                        <p class="lead lead-regular lead-s2">Follow these steps or join our <b><a href="https://t.me/kishuinucommunity" target="_blank" rel="noreferrer">Telegram</a></b> group if you need help</p>
                                    </div>
                                    <ul class="list list-number-s2">
                                        <li class="animated" data-animate="fadeInUp" data-delay=".3">
                                            <h4 class="title title-md text-base"><span>1</span>Create a MetaMask Wallet</h4>
                                            <p>$KISHU token is available on the Ethereum blockchain. MetaMask is the market leader in ERC20 (Ethereum) wallets. On Google Chrome, visit <b><a href="https://metamask.io" rel="noreferrer" target="_blank">metamask.io</a></b> to download the extension and set up a wallet. On mobile? Get MetaMask's app for <b><a href="https://metamask.app.link/skAH3BaF99" rel="noreferrer" target="_blank">iPhone</a></b> or <b><a rel="noreferrer" href="https://metamask.app.link/bxwkE8oF99" target="_blank">Android</a></b>.</p>
                                        </li>
                                        <li class="animated" data-animate="fadeInUp" data-delay=".4">
                                            <h4 class="title title-md text-base"><span>2</span>Send $ETH to MetaMask</h4>
                                            <p>Buy Ethereum through MetaMask or transfer it to your MetaMask wallet address from another wallet (e.g. Coinbase or Binance).</p>
                                        </li>
                                        <li class="animated" data-animate="fadeInUp" data-delay=".5">
                                            <h4 class="title title-md text-base"><span>3</span>Visit Uniswap</h4>
                                            <p>You can currently buy $KISHU on <b><a href="https://app.uniswap.org/#/swap?outputCurrency=0xa2b4c0af19cc16a6cfacce81f192b024d625817d" rel="noreferrer" target="_blank">Uniswap</a></b>, the most popular and safest decentralized exchange in the world.</p>
                                        </li>
                                        <li class="animated" data-animate="fadeInUp" data-delay=".6">
                                            <h4 class="title title-md text-base"><span>4</span>Swap $ETH for $KISHU</h4>
                                            <p><b><a href="https://kishu.finance/howtobuy/kishu-slippage.gif" rel="noreferrer" target="_blank">Adjust slippage to 4%</a></b> and enter the amount of $ETH you would like to swap for $KISHU.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowToBuy;