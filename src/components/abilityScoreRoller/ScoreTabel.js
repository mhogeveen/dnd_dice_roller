import React from 'react'

import { ScoreRow } from './index'

import Paper from '@material-ui/core/Paper'

const ScoreTabel = ({ rolls }) => {
   const renderButtonGroup = (rolls) => {
      return Object.entries(rolls).map(([id, roll]) => <ScoreRow roll={roll} key={id} />)
   }

   return (
      <Paper style={{ display: 'flex', flexDirection: 'column' }}>{renderButtonGroup(rolls)}</Paper>
   )
}

export default ScoreTabel
