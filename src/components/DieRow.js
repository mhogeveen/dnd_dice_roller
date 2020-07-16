import React, { Component } from 'react'
import { Paper, Grid } from '@material-ui/core'
import DieIcon from './die_row_pieces/DieIcon'
import DieAmount from './die_row_pieces/DieAmount'
import DieType from './die_row_pieces/DieType'
import ModType from './die_row_pieces/ModType'
import ModAmount from './die_row_pieces/ModAmount'
import Roll from './die_row_pieces/Roll'
import Reset from './die_row_pieces/Reset'
import RemoveRow from './die_row_pieces/RemoveRow'

class DieRow extends Component {
   render() {
      const { dieAmount, dieType, modType, modAmount, id } = this.props.die

      return (
         <Paper style={{ marginBottom: '20px' }}>
            <form autoComplete='off'>
               <Grid
                  container
                  spacing={3}
                  alignItems='center'
                  justify='space-between'
                  style={{ padding: '0 20px' }}
               >
                  <Grid item>
                     <DieIcon />
                  </Grid>
                  <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                     <DieAmount dieAmount={dieAmount} id={id} />
                     <p style={{ margin: '0 10px', fontSize: '1.25rem' }}>d</p>
                     <DieType dieType={dieType} id={id} />
                  </Grid>
                  <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                     <ModType modType={modType} id={id} />
                     <ModAmount modAmount={modAmount} id={id} />
                  </Grid>
                  <Grid item>
                     <Roll id={id} />
                     <Reset id={id} />
                  </Grid>
                  <Grid item>
                     <RemoveRow id={id} />
                  </Grid>
               </Grid>
            </form>
         </Paper>
      )
   }
}

export default DieRow
