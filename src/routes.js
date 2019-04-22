import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Page from './components/Page'
import Home from './components/Home'
import Numbers from './components/Numbers'
import CoolNumber from './components/CoolNumber'

export default (
  <Switch>
    <Route path="/CoolNumber/:id" component={CoolNumber}/>
    <Route path="/Numbers" component={Numbers} />
    <Route path="/Page" component={Page} />
    <Route exact path="/" component={Home} />
  </Switch>
)