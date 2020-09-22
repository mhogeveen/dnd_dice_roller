import React from 'react'
import { connect } from 'react-redux'
import { clearResults } from '../../redux/actions'

import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

const styles = {
   root: {
      color: '#F94144',
      border: '1px solid rgba(249, 65, 68,0.5)',
      '&:hover': {
         border: '1px solid #F94144',
         backgroundColor: 'rgba(249, 65, 68,0.04)',
      },
   },
}

const ClearResults = ({ clearResults, classes }) => {
   return (
      <Button
         className={classes.root}
         variant='outlined'
         disableElevation
         onClick={() => clearResults()}
         style={{ marginLeft: '10px' }}>
         Clear Results
      </Button>
   )
}

export default connect(null, { clearResults })(withStyles(styles)(ClearResults))
