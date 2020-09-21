import React from 'react'
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

const DieType = ({ id, updateDieType, dieType, label, classes }) => {
   const handleDieType = (e) => {
      updateDieType(e.target.value, id)
   }

   return (
      <TextField
         className={classes.root}
         select
         value={dieType}
         label={label}
         onChange={(e) => handleDieType(e)}
         margin='dense'
         variant='outlined'
         style={{ width: '80px', margin: '4px 0' }}>
         {diceTypes.map((type) => (
            <MenuItem key={type} value={type}>
               {type}
            </MenuItem>
         ))}
      </TextField>
   )
}

export default connect(null, { updateDieType })(withStyles(styles)(DieType))
