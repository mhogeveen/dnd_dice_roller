import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { updateDieAmount } from '../../actions'
import { connect } from 'react-redux'

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
            style={{ width: '70px' }}
         />
      )
   }
}

export default connect(null, { updateDieAmount })(DieAmount)
