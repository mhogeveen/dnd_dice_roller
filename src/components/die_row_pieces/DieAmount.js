import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class DieAmount extends Component {
   render() {
      return (
         <TextField
            // label='# of dice'
            id='diceToRoll'
            defaultValue='1'
            className=''
            margin='dense'
            variant='outlined'
            style={{ width: '100px' }}
         />
      )
   }
}

export default DieAmount
