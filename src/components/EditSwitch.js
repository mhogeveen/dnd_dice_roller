import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleEdit } from '../actions'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

class EditSwitch extends Component {
   handleEditSwitch = () => {
      this.props.toggleEdit()
   }

   render() {
      return (
         <>
            <FormControlLabel
               control={
                  <Switch
                     checked={this.edit}
                     onChange={this.handleEditSwitch}
                     name='checkedB'
                     color='primary'
                  />
               }
               label='Edit'
            />
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { edit: state.edit }
}

export default connect(mapStateToProps, { toggleEdit })(EditSwitch)
