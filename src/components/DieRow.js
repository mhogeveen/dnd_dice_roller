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
import AddRow from './die_row_pieces/AddRow'

class DieRow extends Component {
   render() {
      return (
         <Paper>
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
                     <DieAmount />
                     <p style={{ margin: '0 10px', fontSize: '1.25rem' }}>d</p>
                     <DieType />
                  </Grid>
                  <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                     <ModType />
                     <ModAmount />
                  </Grid>
                  <Grid item>
                     <Roll />
                     <Reset />
                  </Grid>
                  <Grid item>
                     <RemoveRow />
                     <AddRow />
                  </Grid>
               </Grid>
            </form>
         </Paper>
      )
   }
}

export default DieRow
