import React from 'react'
import { connect } from 'react-redux'
import { removeRow } from '../../actions'

import { withStyles } from '@material-ui/styles'
import ToolTip from '@material-ui/core/ToolTip'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'

const styles = {
   root: {
      color: '#F94144',
   },
}

const RemoveRow = ({ removeRow, id, classes }) => {
   const handleRemoveRow = () => {
      removeRow(id)
   }

   return (
      <ToolTip title='Delete'>
         <IconButton className={classes.root} aria-label='delete' onClick={handleRemoveRow}>
            <DeleteIcon />
         </IconButton>
      </ToolTip>
   )
}

export default connect(null, { removeRow })(withStyles(styles)(RemoveRow))
