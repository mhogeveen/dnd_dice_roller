import React, { Component } from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import DiceContainer from './DiceContainer'
import ResultsContainer from './ResultsContainer'

class App extends Component {
   render() {
      return (
         <>
            <CssBaseLine />
            <Container maxWidth='lg'>
               <h1>DnD Dice Roller</h1>
               <Grid container spacing={2}>
                  <Grid item xs={8}>
                     <DiceContainer />
                  </Grid>
                  <Grid item xs>
                     <ResultsContainer />
                  </Grid>
               </Grid>
            </Container>
         </>
      )
   }
}

export default App
