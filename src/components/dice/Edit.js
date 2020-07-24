import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleEdit } from '../../actions'

import ToolTip from '@material-ui/core/ToolTip'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'

class Edit extends Component {
   handleEdit = (e) => {
      this.props.toggleEdit(this.props.id)
      e.stopPropagation()
   }

   render() {
      return (
         <ToolTip title={this.props.edit ? 'Save' : 'Edit'}>
            <IconButton aria-label='edit' onClick={this.handleEdit}>
               {this.props.edit ? <SaveIcon /> : <EditIcon />}
            </IconButton>
         </ToolTip>
      )
   }
}

export default connect(null, { toggleEdit })(Edit)
