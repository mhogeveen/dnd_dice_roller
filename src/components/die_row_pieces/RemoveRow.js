import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeRow } from '../../actions'

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

class RemoveRow extends Component {
   handleRemoveRow = (e) => {
      this.props.removeRow(this.props.id)
   }

   render() {
      return (
         <IconButton aria-label='delete' color='secondary' onClick={this.handleRemoveRow}>
            <DeleteIcon />
         </IconButton>
      )
   }
}

export default connect(null, { removeRow })(RemoveRow)
