import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateModType } from '../../actions'

import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

class ModType extends Component {
   handleModType = (e) => {
      this.props.updateModType(e.target.value, this.props.id)
   }

   render() {
      const { modType } = this.props

      return (
         <FormControl component='fieldset'>
            <RadioGroup
               row
               aria-label='position'
               name='dieMod'
               value={modType}
               onChange={this.handleModType}
            >
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

export default connect(null, { updateModType })(ModType)
