import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDieType } from '../../actions'

import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const styles = {
   root: {
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
         borderColor: '#4ecdc4',
         borderWidth: '1px',
      },
   },
}

const diceTypes = [4, 6, 8, 10, 12, 20]

class DieType extends Component {
   handleDieType = (e) => {
      this.props.updateDieType(e.target.value, this.props.id)
   }

   render() {
      const { dieType, label, classes } = this.props

      return (
         <TextField
            className={classes.root}
            select
            value={dieType}
            label={label}
            onChange={this.handleDieType}
            margin='dense'
            variant='outlined'
            style={{ width: '80px', margin: '4px 0' }}
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

export default connect(null, { updateDieType })(withStyles(styles)(DieType))
