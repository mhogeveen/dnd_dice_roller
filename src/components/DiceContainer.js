import React, { Component } from 'react'
import { connect } from 'react-redux'

import DieRow from './DieRow'
import Dice from './Dice'
import AddRow from './AddRow'
import ClearResults from './ClearResults'
import EditSwitch from './EditSwitch'

class DiceContainer extends Component {
   render() {
      return (
         <>
            <div>
               {Object.entries(this.props.dice).map(([id, die]) => (
                  <DieRow die={die} key={id} id={id} />
               ))}
               <AddRow />
               <div className='clear-results-m'>
                  <ClearResults />
               </div>
            </div>
            <div>
               <EditSwitch />
               {Object.entries(this.props.dice).map(([id, die]) => (
                  <Dice die={die} key={id} id={id} />
               ))}
               <AddRow />
            </div>
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { dice: state.dice }
}

export default connect(mapStateToProps)(DiceContainer)
