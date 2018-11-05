import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Equipment from "./pages/Equipment"
import Contact from "./pages/Contact"
import Handbook from "./pages/Handbook"
import Industries from "./pages/Industries"
import Machining from "./pages/Machining"
import Perforating from "./pages/Perforating"
import Screens from "./pages/Screens"
import Slotting from "./pages/Slotting"
import Tcbc from "./pages/Tcbc"
import Tcdc from "./pages/Tcdc"
import Tcfj from "./pages/Tcfj"
import Tcpc from "./pages/Tcpc"
import Threading from './pages/Threading'
import Worksheets from "./pages/Worksheets"
import Navbar from "./components/Navbar";
import Wrapper from './components/Wrapper'
import Footer from './components/Footer'


const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Wrapper>
        <Route exact path ="/" component = {Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/equipment" component={Equipment} />
        <Route exact path="/tcpc" component={Tcpc} />
        <Route exact path="/tcbc" component={Tcbc} />
        <Route exact path="/tcdc" component={Tcdc} />
        <Route exact path="/tcfj" component={Tcfj} />
        <Route exact path="/industries" component={Industries} />
        <Route exact path="/machining" component={Machining} />
        <Route exact path="/threading" component={Threading} />
        <Route exact path="/slotting" component={Slotting} />
        <Route exact path="/perforating" component={Perforating} />
        <Route exact path="/screens" component={Screens} />
        <Route exact path="/handbook" component={Handbook} />
        <Route exact path="/worksheets" component={Worksheets} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer/>
    </div>
  </Router>
);

export default App;