import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dice from './Dice'
import AddRow from './AddRow'
import ClearResults from './ClearResults'

class DiceRoller extends Component {
   render() {
      return (
         <>
            {Object.entries(this.props.dice).map(([id, die]) => (
               <Dice die={die} key={id} id={id} />
            ))}
            <AddRow />
            <ClearResults />
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { dice: state.dice }
}

export default connect(mapStateToProps)(DiceRoller)
