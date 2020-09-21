import React from 'react'
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

const DieAmount = ({ id, classes, dieAmount, label, updateDieAmount }) => {
   const handleDieAmount = (e) => {
      updateDieAmount(e.target.value, id)
   }

   return (
      <TextField
         className={classes.root}
         value={dieAmount}
         type='number'
         label={label}
         margin='dense'
         variant='outlined'
         onChange={(e) => handleDieAmount(e)}
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

export default connect(null, { updateDieAmount })(withStyles(styles)(DieAmount))
