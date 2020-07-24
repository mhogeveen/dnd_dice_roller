import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleEdit } from '../../actions'

import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'

class Edit extends Component {
   handleEdit = () => {
      this.props.toggleEdit(this.props.id)
   }

   render() {
      return (
         <IconButton aria-label='edit' onClick={this.handleEdit}>
            {this.props.editing ? <SaveIcon /> : <EditIcon />}
         </IconButton>
      )
   }
}

export default connect(null, { toggleEdit })(Edit)
