import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import App from '../App'
import { Provider } from 'react-redux'
import Film from '../Views/Film'
import Classify from '../Views/CLassify'
import Cart from '../Views/Cart'
import My from '../Views/My'
import Breath from '../Views//CLassify/Breath'
import Cloths from '../Views/CLassify/Clothes'
import Computer from '../Views/CLassify/Computer'
import Digital from '../Views/CLassify/Digital'
import Electric from '../Views/CLassify/Electric'
import Healthy from '../Views/CLassify/Healthy'
import Part from '../Views/CLassify/Parts'
import store from '../Views/redux/store'

export default (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path='/film' render={() => (
            <Film>
              <Switch>

              </Switch>
            </Film>
          )} />
          <Route path='/classify' render={() => (
            <Classify>
              <Switch>
                <Route path='/classify/breath' component={Breath} />
                <Route path='/classify/Clothes' component={Cloths} />
                <Route path='/classify/Computer' component={Computer} />
                <Route path='/classify/Digital' component={Digital} />
                <Route path='/classify/Electric' component={Electric} />
                <Route path='/classify/Healthy' component={Healthy} />
                <Route path='/classify/Parts' component={Part} />
              </Switch>
            </Classify>
          )} />
          <Route path='/cart' component={Cart} />
          <Route path='/my' render={() => (
            <My>
              <Switch>
                <Route path='' />

              </Switch>
            </My>
          )} />
          <Redirect from='/' to='/film' />
        </Switch>
      </App>
    </Router>
  </Provider> 
)