import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import store from './store'
import LandingPage from './components/LandingPage'
import DetailedPage from './components/DetailedPage'

import 'bootstrap/dist/css/bootstrap.css'
import 'tachyons/css/tachyons.css'

class App extends React.Component {
  render () {
    return (
      <Provider store={ store }>
        <div>
          <h1 className="tc">Movies Application</h1>
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route path="/movie/:id" component={DetailedPage}/>
                <Route path="/" component={LandingPage}/>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
