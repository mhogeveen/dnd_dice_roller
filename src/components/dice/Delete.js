import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeRow } from '../../actions'

import ToolTip from '@material-ui/core/ToolTip'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'

class RemoveRow extends Component {
   handleRemoveRow = (e) => {
      this.props.removeRow(this.props.id)
   }

   render() {
      return (
         <ToolTip title='Delete'>
            <IconButton aria-label='delete' onClick={this.handleRemoveRow}>
               <DeleteIcon />
            </IconButton>
         </ToolTip>
      )
   }
}

export default connect(null, { removeRow })(RemoveRow)
