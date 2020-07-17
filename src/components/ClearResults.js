import React from 'react'
import { connect } from 'react-redux'
import { clearResults } from '../actions'

import Button from '@material-ui/core/Button'
import RotateRightIcon from '@material-ui/icons/RotateRight'

const ClearResults = (props) => {
   const handleClearResults = () => {
      props.clearResults()
   }

   return (
      <Button
         variant='outlined'
         disableElevation
         color='secondary'
         startIcon={<RotateRightIcon />}
         style={{ marginTop: '10px' }}
         onClick={handleClearResults}
      >
         Clear Results
      </Button>
   )
}

export default connect(null, { clearResults })(ClearResults)
