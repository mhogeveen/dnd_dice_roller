import React from 'react'
import { connect } from 'react-redux'
import { toggleEdit } from '../../../redux/actions'

import { withStyles } from '@material-ui/styles'
import ToolTip from '@material-ui/core/ToolTip'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'

const styles = {
   root: {
      color: '#43AA8B',
   },
}

const Edit = ({ id, toggleEdit, classes, edit }) => {
   const handleEdit = (e) => {
      toggleEdit(id)
      e.stopPropagation()
   }

   return (
      <ToolTip title={edit ? 'Save' : 'Edit'}>
         <IconButton className={classes.root} aria-label='edit' onClick={(e) => handleEdit(e)}>
            {edit ? <SaveIcon /> : <EditIcon />}
         </IconButton>
      </ToolTip>
   )
}

export default connect(null, { toggleEdit })(withStyles(styles)(Edit))
