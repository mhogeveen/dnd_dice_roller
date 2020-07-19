import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDieAmount } from '../../actions'

import TextField from '@material-ui/core/TextField'

class DieAmount extends Component {
   handleDieAmount = (e) => {
      this.props.updateDieAmount(e.target.value, this.props.id)
   }

   render() {
      const { dieAmount } = this.props

      return (
         <TextField
            value={dieAmount}
            type='number'
            label='dice'
            margin='dense'
            variant='outlined'
            onChange={this.handleDieAmount}
            InputProps={{
               inputProps: {
                  min: 1,
               },
            }}
            style={{ width: '70px', margin: '4px 0' }}
         />
      )
   }
}

export default connect(null, { updateDieAmount })(DieAmount)
