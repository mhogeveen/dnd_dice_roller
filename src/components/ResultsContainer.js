import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

class ResultsContainer extends Component {
   render() {
      return (
         <Paper style={{ padding: '10px' }}>
            <p style={{ fontWeight: '600', margin: '5px 0' }}>Results</p>
            <Divider />
         </Paper>
      )
   }
}

export default connect(null)(ResultsContainer)
