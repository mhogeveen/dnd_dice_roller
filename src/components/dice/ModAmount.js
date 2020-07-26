import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateModAmount } from '../../actions'

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

class ModAmount extends Component {
   handleModAmount = (e) => {
      this.props.updateModAmount(e.target.value, this.props.id)
   }

   render() {
      const { modAmount, label, classes } = this.props

      return (
         <TextField
            className={classes.root}
            value={modAmount}
            type='number'
            label={label}
            onChange={this.handleModAmount}
            margin='dense'
            variant='outlined'
            style={{ width: '70px', margin: '4px 0' }}
         />
      )
   }
}

export default connect(null, { updateModAmount })(withStyles(styles)(ModAmount))
