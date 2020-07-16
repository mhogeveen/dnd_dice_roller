import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'
import { updateDieType } from '../../actions'

const diceTypes = [4, 6, 8, 10, 12, 20]

class DieType extends Component {
   handleDieType = (e) => {
      this.props.updateDieType(e.target.value, this.props.id)
   }

   render() {
      const { dieType } = this.props

      return (
         <TextField
            id='dieType'
            select
            value={dieType}
            onChange={this.handleDieType}
            margin='dense'
            variant='outlined'
            style={{ width: '80px' }}
         >
            {diceTypes.map((type) => (
               <MenuItem key={type} value={type}>
                  {type}
               </MenuItem>
            ))}
         </TextField>
      )
   }
}

export default connect(null, { updateDieType })(DieType)
