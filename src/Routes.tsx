import React from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import Home from './views/Home'
import Geometric3d from './views/Geometric3d'
import FlatGeometric from './views/FlatGeometric'
import TrcRotating from './views/Geometric3d/TrcRotating'
import CrlAbstract from './views/Geometric3d/CrlAbstract'
import BlurCircles from './views/FlatGeometric/BlurCircles'


const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/3d-geometric-rotations" component={Geometric3d} />
    <Route exact path="/flat-geometric-rotations" component={FlatGeometric} />
    <Route exact path="/3d-geometric-rotations/triangle-circle-cube-rotating" component={TrcRotating} />
    <Route exact path="/3d-geometric-rotations/circle-line-rotating-abstract" component={CrlAbstract} />
    <Route exact path="/flat-geometric-rotations/blur-circles" component={BlurCircles} />
  </Router>
)

export default Routes