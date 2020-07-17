import React, { Component } from 'react'
import { Paper, Grid } from '@material-ui/core'
import DieIcon from './die_row_pieces/DieIcon'
import DieAmount from './die_row_pieces/DieAmount'
import DieType from './die_row_pieces/DieType'
import ModAmount from './die_row_pieces/ModAmount'
import Roll from './die_row_pieces/Roll'
import Reset from './die_row_pieces/Reset'
import RemoveRow from './die_row_pieces/RemoveRow'

class DieRow extends Component {
   render() {
      const { dieAmount, dieType, modAmount, id } = this.props.die

      return (
         <Paper elevation='1' style={{ marginBottom: '10px' }}>
            <Grid
               container
               spacing={2}
               alignItems='center'
               justify='space-between'
               style={{ padding: '0 20px', margin: '0' }}
            >
               <Grid item style={{ padding: '0', height: '30px' }}>
                  <DieIcon dieType={dieType} />
               </Grid>
               <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <DieAmount dieAmount={dieAmount} id={id} />
                  <p style={{ margin: '0 10px', fontSize: '1.25rem' }}>d</p>
                  <DieType dieType={dieType} id={id} />
               </Grid>
               <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <ModAmount modAmount={modAmount} id={id} />
               </Grid>
               <Grid item>
                  <Roll die={this.props.die} />
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

export default DieRow
