import React, { Component } from 'react'
import { connect } from 'react-redux'

import Result from './Result'
import ClearResults from './ClearResults'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

class ResultsContainer extends Component {
   renderList = () => {
      if (this.props.results.length !== 0) {
         return this.props.results.map((result) => <Result key={result.id} result={result} />)
      } else {
         return <p style={{ margin: '5px 0' }}>Roll the dice to get results</p>
      }
   }

   render() {
      return (
         <>
            <div className='clear-results-d'>
               <ClearResults />
            </div>
            <Paper elevation={1} style={{ padding: '10px' }}>
               <p style={{ fontWeight: '600', margin: '5px 0' }}>Results</p>
               <Divider />
               {this.renderList()}
            </Paper>
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { results: state.results }
}

export default connect(mapStateToProps)(ResultsContainer)
