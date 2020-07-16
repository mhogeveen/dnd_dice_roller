import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetRow } from '../../actions'

import Button from '@material-ui/core/Button'

class Reset extends Component {
   handleReset = (e) => {
      this.props.resetRow(this.props.id)
   }

   render() {
      return (
         <Button color='secondary' variant='outlined' onClick={this.handleReset}>
            Reset
         </Button>
      )
   }
}

export default connect(null, { resetRow })(Reset)
