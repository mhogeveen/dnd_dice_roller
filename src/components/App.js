import React, { Component } from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import DiceContainer from './DiceContainer'

class App extends Component {
   render() {
      return (
         <>
            <CssBaseLine />
            <Container maxWidth='lg'>
               <h1>DnD Dice Roller</h1>
               <DiceContainer />
            </Container>
         </>
      )
   }
}

export default App
