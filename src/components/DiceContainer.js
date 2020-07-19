import React, { Component } from 'react'
import { connect } from 'react-redux'

import DieRow from './DieRow'
import AddRow from './AddRow'
import ClearResults from './ClearResults'

class DiceContainer extends Component {
   render() {
      return (
         <>
            {this.props.dice.map((die) => (
               <DieRow die={die} key={die.id} />
            ))}
            <AddRow />
            <div className='clear-results-m'>
               <ClearResults />
            </div>
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { dice: state.dice }
}

export default connect(mapStateToProps)(DiceContainer)
