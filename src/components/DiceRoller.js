import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dice from './Dice'
import AddRow from './AddRow'
import ClearResults from './ClearResults'
import EditSwitch from './EditSwitch'

class DiceRoller extends Component {
   render() {
      return (
         <>
            <div>
               <div className='dice'>
                  <div className='dice-comp dice-label'>
                     <span>dice</span>
                  </div>
                  <div className='dice-comp type-label'>
                     <span>type</span>
                  </div>
                  <div className='dice-comp mod-label'>
                     <span>mod</span>
                  </div>
                  <div className='dice-comp edit-switch'>
                     <EditSwitch />
                  </div>
               </div>
               {Object.entries(this.props.dice).map(([id, die]) => (
                  <Dice die={die} key={id} id={id} />
               ))}
               <AddRow />
               <ClearResults />
            </div>
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { dice: state.dice }
}

export default connect(mapStateToProps)(DiceRoller)
