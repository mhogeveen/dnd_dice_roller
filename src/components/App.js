import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseLine from '@material-ui/core/CssBaseline'

import Container from '@material-ui/core/Container'

import NavBar from './NavBar'
import DiceRoller from './DiceRoller'
// import AbilityScoreRoller from './AbilityScoreRoller'

const App = () => {
   return (
      <>
         {/* <Router basename={'/dnd_dice_roller'}>
//                <CssBaseLine />
//                <NavBar />
//                <Container maxWidth='lg'>
//                   <Switch>
//                      <Route path='/' exact component={DiceRoller} />
//                      <Route path='/ability-score-roller' component={AbilityScoreRoller} />
//                   </Switch>
//                </Container>
//             </Router> */}
         <CssBaseLine />
         <NavBar />
         <Container>
            <DiceRoller />
         </Container>
      </>
   )
}

export default App
