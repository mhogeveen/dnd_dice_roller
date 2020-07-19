import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'

import DieIcon from './die_row_pieces/DieIcon'
import DieAmount from './die_row_pieces/DieAmount'
import DieType from './die_row_pieces/DieType'
import ModAmount from './die_row_pieces/ModAmount'
import Roll from './die_row_pieces/Roll'
import Reset from './die_row_pieces/Reset'
import RemoveRow from './die_row_pieces/RemoveRow'

class DieRow extends Component {
   render() {
      const { dieAmount, dieType, modAmount } = this.props.die
      const id = this.props.id

      return (
         <Paper elevation={1} style={{ marginBottom: '10px' }}>
            <div className='dice-row'>
               <div className='dice-row-icon'>
                  <DieIcon dieType={dieType} />
               </div>
               <div className='dice-row-inputs'>
                  <DieAmount dieAmount={dieAmount} id={id} />
                  <p style={{ margin: '0 10px', fontSize: '1.25rem' }}>d</p>
                  <DieType dieType={dieType} id={id} />
                  <ModAmount modAmount={modAmount} id={id} />
               </div>
               <div className='dice-row-buttons'>
                  <Roll die={this.props.die} />
                  <Reset id={id} />
               </div>
               <div className='dice-row-remove'>
                  <RemoveRow id={id} />
               </div>
            </div>
         </Paper>
      )
   }
}

export default DieRow
