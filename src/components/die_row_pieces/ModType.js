import React, { Component } from 'react'

import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

class ModType extends Component {
   render() {
      return (
         <FormControl component='fieldset'>
            <RadioGroup row aria-label='position' name='dieMod' defaultValue='+'>
               <FormControlLabel
                  value='+'
                  control={<Radio color='primary' size='small' />}
                  label='+'
                  labelPlacement='top'
                  style={{ margin: '0' }}
               />
               <FormControlLabel
                  value='-'
                  control={<Radio color='primary' size='small' />}
                  label='-'
                  labelPlacement='top'
                  style={{ margin: '0' }}
               />
            </RadioGroup>
         </FormControl>
      )
   }
}

export default ModType
