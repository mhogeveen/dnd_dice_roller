import React, { Component } from 'react'
import { connect } from 'react-redux'

class ResultRow extends Component {
   renderResultRow = (result) => {
      if (result === undefined) {
         return (
            <div className='result'>
               <div className='result-comp'>
                  <span>Click the die row to get results!</span>
               </div>
            </div>
         )
      } else {
         return (
            <div className='result'>
               <div className='result-comp'>
                  <span>{result.rolls.join('+')}</span>
               </div>
               <div className='result-comp'>
                  <span>=</span>
               </div>
               <div className='result-comp'>
                  <span>{result.subtotal}</span>
               </div>
               <div className='result-comp'>
                  <span>{result.modAmount >= 0 ? '+' : '-'}</span>
               </div>
               <div className='result-comp'>{Math.abs(result.modAmount)}</div>
               <div className='result-comp'>
                  <span>=</span>
               </div>
               <div className='result-comp'>
                  <span>{result.total}</span>
               </div>
            </div>
         )
      }
   }

   render() {
      return <>{this.renderResultRow(this.props.result)}</>
   }
}

const mapStateToProps = (state, ownProps) => {
   return { result: state.results[ownProps.id] }
}

export default connect(mapStateToProps)(ResultRow)
