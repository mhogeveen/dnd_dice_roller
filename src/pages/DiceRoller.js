import React from 'react'
import { connect } from 'react-redux'

import { AddRow, ClearResults, Dice } from '../components/diceRoller'

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
