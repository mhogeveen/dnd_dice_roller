import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import DieIcon from './die_row_pieces/DieIcon'
import DieAmount from './die_row_pieces/DieAmount'
import DieType from './die_row_pieces/DieType'
import ModAmount from './die_row_pieces/ModAmount'
import Reset from './die_row_pieces/Reset'
import RemoveRow from './die_row_pieces/RemoveRow'

class Dice extends Component {
   render() {
      const { dieAmount, dieType, modAmount } = this.props.die
      const id = this.props.id

      return (
         <Paper elevation={1} style={{ marginBottom: '10px' }}>
            <Grid container spacing={2} style={{ margin: '0' }}>
               <Grid item>
                  <DieIcon dieType={dieType} />
               </Grid>
               <Grid item>
                  <DieAmount dieAmount={dieAmount} id={id} />
               </Grid>
               <Grid item>d</Grid>
               <Grid item>
                  <DieType dieType={dieType} id={id} />
               </Grid>
               <Grid item>
                  <ModAmount modAmount={modAmount} id={id} />
               </Grid>
               <Grid item>
                  <Reset id={id} />
               </Grid>
               <Grid item>
                  <RemoveRow id={id} />
               </Grid>
            </Grid>
         </Paper>
      )
   }
}

export default Dice
