import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Checkout from '../Checkout'
import Homepage from '../Homepage'

function RoutesController() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="*" component={() => <p>404 not found</p>} />
      </Switch>
    </Router>
  )
}

export default RoutesController
