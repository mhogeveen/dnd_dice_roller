import React, { Component } from 'react'
import { connect } from 'react-redux'

import Result from './Result'
import ClearResults from './ClearResults'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

class ResultsContainer extends Component {
   render() {
      return (
         <>
            <Paper style={{ padding: '10px' }}>
               <p style={{ fontWeight: '600', margin: '5px 0' }}>Results</p>
               <Divider />
               {this.props.results.map((result) => (
                  <Result key={result.date} result={result} />
               ))}
            </Paper>
            <ClearResults />
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { results: state.results }
}

export default connect(mapStateToProps)(ResultsContainer)
