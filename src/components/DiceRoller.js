import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import DiceContainer from './DiceContainer'
import ResultsContainer from './ResultsContainer'

const DiceRoller = () => {
   return (
      <Container maxWidth='lg'>
         <Grid container spacing={2}>
            <Grid item md={7} sm={12} xs={12} style={{ paddingBottom: '0px' }}>
               <DiceContainer />
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
               <ResultsContainer />
            </Grid>
         </Grid>
      </Container>
   )
}

export default DiceRoller
