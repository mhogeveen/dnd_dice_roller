import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class ModAmount extends Component {
   render() {
      return (
         <TextField
            // label='modifier'
            id='modifier'
            defaultValue='0'
            className=''
            margin='dense'
            variant='outlined'
            style={{ width: '100px' }}
         />
      )
   }
}

export default ModAmount
