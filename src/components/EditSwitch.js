import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleEdit } from '../actions'

import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const styles = {
   label: {
      fontSize: '14px',
   },
}

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
               label='edit'
               classes={{ label: this.props.classes.label }}
            />
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { edit: state.edit }
}

export default connect(mapStateToProps, { toggleEdit })(withStyles(styles)(EditSwitch))
