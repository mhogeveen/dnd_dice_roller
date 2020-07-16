import React, { Component } from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import DieRow from './DieRow'

class App extends Component {
   render() {
      return (
         <>
            <CssBaseLine />
            <Container maxWidth='lg'>
               <h1>DnD Dice Roller</h1>
               <DieRow />
            </Container>
         </>
      )
   }
}

export default App
