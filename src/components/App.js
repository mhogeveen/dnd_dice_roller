import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CssBaseLine from '@material-ui/core/CssBaseline'

import NavBar from './NavBar'
import DiceRoller from './DiceRoller'

class App extends Component {
   render() {
      return (
         <>
            <BrowserRouter>
               <CssBaseLine />
               <NavBar />
               <Switch>
                  <Route path='/' exact component={DiceRoller} />
               </Switch>
            </BrowserRouter>
         </>
      )
   }
}

export default App
