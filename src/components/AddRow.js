import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRow } from '../actions'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

class AddRow extends Component {
   handleAddRow = () => {
      this.props.addRow()
   }

   render() {
      return (
         <Button
            variant='outlined'
            color='primary'
            disableElevation
            startIcon={<AddIcon />}
            onClick={this.handleAddRow}
         >
            Add Row
         </Button>
      )
   }
}

export default connect(null, { addRow })(AddRow)
