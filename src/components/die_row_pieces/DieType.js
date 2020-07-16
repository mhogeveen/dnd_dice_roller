import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const diceTypes = [4, 6, 8, 10, 12, 20, 100]

const handleTypeChange = (e) => {
   console.log(e)
}

class DieType extends Component {
   render() {
      return (
         <TextField
            id='dieType'
            select
            // label='Select'
            value='4'
            onChange={handleTypeChange}
            margin='dense'
            variant='outlined'
            style={{ width: '100px' }}
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

export default DieType
