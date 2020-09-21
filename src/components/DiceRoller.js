import React from 'react'
import { connect } from 'react-redux'

import Dice from './Dice'
import AddRow from './AddRow'
import ClearResults from './ClearResults'

const DiceRoller = ({ dice }) => {
   return (
      <>
         {Object.entries(dice).map(([id, die]) => (
            <Dice die={die} key={id} id={id} />
         ))}
         <AddRow />
         <ClearResults />
      </>
   )
}

const mapStateToProps = (state) => {
   return { dice: state.dice }
}

export default connect(mapStateToProps)(DiceRoller)
