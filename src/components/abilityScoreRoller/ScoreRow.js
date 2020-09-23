import React from 'react'

import Paper from '@material-ui/core/Paper'

const ScoreRow = ({ least, others }) => {
   const renderLowRoll = () => {
      return (
         <Paper variant='outlined' className='score-row__item item--disabled'>
            {least}
         </Paper>
      )
   }

   const renderOtherRolls = () => {
      return Object.entries(others).map(([id, roll]) => (
         <Paper variant='outlined' className='score-row__item' key={id}>
            {roll}
         </Paper>
      ))
   }

   const calculateTotal = () => {
      let total = 0
      others.map((item) => (total += item))
      return total
   }

   return (
      <div className='score-row'>
         {renderLowRoll()}
         {renderOtherRolls()}
         <Paper variant='outlined' className='score-row__total'>
            {calculateTotal()}
         </Paper>
      </div>
   )
}

export default ScoreRow
