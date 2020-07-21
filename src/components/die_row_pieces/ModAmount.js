import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateModAmount } from '../../actions'

import TextField from '@material-ui/core/TextField'

class ModAmount extends Component {
   handleModAmount = (e) => {
      this.props.updateModAmount(e.target.value, this.props.id)
   }

   render() {
      const { modAmount, label, disabled } = this.props

      return (
         <TextField
            disabled={disabled}
            value={modAmount}
            type='number'
            label={label}
            onChange={this.handleModAmount}
            margin='dense'
            variant='outlined'
            style={{ width: '70px', margin: '4px 0 4px 10px' }}
         />
      )
   }
}

export default connect(null, { updateModAmount })(ModAmount)
