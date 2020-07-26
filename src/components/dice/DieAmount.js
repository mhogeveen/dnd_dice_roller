import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDieAmount } from '../../actions'

import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'

const styles = {
   root: {
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
         borderColor: '#4ecdc4',
         borderWidth: '1px',
      },
   },
}

class DieAmount extends Component {
   handleDieAmount = (e) => {
      this.props.updateDieAmount(e.target.value, this.props.id)
   }

   render() {
      const { dieAmount, label, classes } = this.props

      return (
         <TextField
            className={classes.root}
            value={dieAmount}
            type='number'
            label={label}
            margin='dense'
            variant='outlined'
            onChange={this.handleDieAmount}
            InputProps={{
               inputProps: {
                  min: 1,
               },
            }}
            inputProps={{ style: { textAlign: 'center' } }}
            style={{ width: '70px', margin: '4px 0' }}
         />
      )
   }
}

export default connect(null, { updateDieAmount })(withStyles(styles)(DieAmount))
