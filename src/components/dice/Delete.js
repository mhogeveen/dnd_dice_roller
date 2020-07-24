import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeRow } from '../../actions'

import { withStyles } from '@material-ui/styles'
import ToolTip from '@material-ui/core/ToolTip'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'

const styles = {
   root: {
      color: '#FF6B6B',
   },
}

class RemoveRow extends Component {
   handleRemoveRow = (e) => {
      this.props.removeRow(this.props.id)
   }

   render() {
      const { classes } = this.props
      return (
         <ToolTip title='Delete'>
            <IconButton className={classes.root} aria-label='delete' onClick={this.handleRemoveRow}>
               <DeleteIcon />
            </IconButton>
         </ToolTip>
      )
   }
}

export default connect(null, { removeRow })(withStyles(styles)(RemoveRow))
