import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseLine from '@material-ui/core/CssBaseline'

import Container from '@material-ui/core/Container'

import NavBar from './NavBar'
import DiceRoller from './DiceRoller'
import AbilityScoreRoller from './AbilityScoreRoller'

class App extends Component {
   render() {
      return (
         <>
            {/* <Router basename={'/'}> */}
            <CssBaseLine />
            {/* <NavBar /> */}
            <Container maxWidth='lg'>
               {/* <Switch>
                     <Route path='/' exact component={DiceRoller} />
                     <Route path='/ability-score-roller' component={AbilityScoreRoller} />
                  </Switch> */}
               <h1>DnD Dice Roller</h1>
               <DiceRoller />
            </Container>
            {/* </Router> */}
         </>
      )
   }
}

export default App
