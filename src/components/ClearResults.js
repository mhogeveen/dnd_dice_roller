import React from 'react'
import { connect } from 'react-redux'
import { clearResults } from '../actions'

import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

const styles = {
   root: {
      color: '#FF6B6B',
      border: '1px solid rgba(255,107,107,0.5)',
      '&:hover': {
         border: '1px solid #FF6B6B',
         backgroundColor: 'rgba(255,107,107,0.04)',
      },
   },
}

const ClearResults = (props) => {
   const handleClearResults = () => {
      props.clearResults()
   }

   const { classes } = props

   return (
      <Button
         className={classes.root}
         variant='outlined'
         disableElevation
         onClick={handleClearResults}
         style={{ marginLeft: '10px' }}
      >
         Clear Results
      </Button>
   )
}

export default connect(null, { clearResults })(withStyles(styles)(ClearResults))
