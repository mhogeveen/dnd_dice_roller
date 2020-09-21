import React from 'react'
import { connect } from 'react-redux'
import { addRow } from '../actions'

import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

const styles = {
   root: {
      color: '#4ECDC4',
      border: '1px solid rgba(78,205,196,0.5)',
      '&:hover': {
         border: '1px solid #4ECDC4',
         backgroundColor: 'rgba(78,205,196,0.04)',
      },
   },
}

const AddRow = ({ addRow, classes }) => {
   return (
      <Button
         className={classes.root}
         color='primary'
         variant='outlined'
         disableElevation
         onClick={() => addRow()}>
         Add Row
      </Button>
   )
}

export default connect(null, { addRow })(withStyles(styles)(AddRow))
