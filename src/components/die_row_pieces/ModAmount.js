import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class ModAmount extends Component {
   render() {
      const { modAmount } = this.props

      return (
         <TextField
            value={modAmount}
            type='number'
            margin='dense'
            variant='outlined'
            style={{ width: '70px' }}
         />
      )
   }
}

export default ModAmount
