import React from "react"
import './App.css'
import Footer from './component/Footer'

// Compoents
import Header from "./component/Header"
import Home from './component/Home'
import ParticleBackground from './component/Particles'
// import HowToBuy from './component/HowToBuy'
import Roadmap from './component/Roadmap'
import Tokenomics from './component/Tokenomics'

import { Switch, Route } from "react-router-dom";


function HomeScreen() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ParticleBackground />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  )
}
function DonateScreen() {
  return (
    <div className="App">
      <Header position={true} />
      <Tokenomics isDonate={true} />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/donate" component={DonateScreen} />
      </Switch>
    </div>
  )
}

export default App
