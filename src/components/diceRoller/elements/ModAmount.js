import React from 'react'
import { connect } from 'react-redux'
import { updateModAmount } from '../../../redux/actions'

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

const ModAmount = ({ id, updateModAmount, modAmount, label, classes }) => {
   const handleModAmount = (e) => {
      updateModAmount(e.target.value, id)
   }

   return (
      <TextField
         className={classes.root}
         value={modAmount}
         type='number'
         label={label}
         onChange={(e) => handleModAmount(e)}
         margin='dense'
         variant='outlined'
         style={{ width: '70px', margin: '4px 0' }}
      />
   )
}

export default connect(null, { updateModAmount })(withStyles(styles)(ModAmount))
