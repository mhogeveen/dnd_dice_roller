import React from 'react'

import Paper from '@material-ui/core/Paper'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'

const ScoreTabel = ({ rolls }) => {
   const renderButtonGroup = (rolls) => {
      return Object.entries(rolls).map(([id, roll]) => (
         <ToggleButtonGroup key={id} value={[]}>
            {renderButtons(roll)}
         </ToggleButtonGroup>
      ))
   }

   const renderButtons = (roll) => {
      return Object.entries(roll).map(([id, item]) => (
         <ToggleButton key={id} value={item}>
            {item}
         </ToggleButton>
      ))
   }

   return (
      <Paper style={{ display: 'flex', flexDirection: 'column' }}>{renderButtonGroup(rolls)}</Paper>
   )
}

export default ScoreTabel
