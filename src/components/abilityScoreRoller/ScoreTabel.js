import React from 'react'

import { ScoreRow } from './index'

import Paper from '@material-ui/core/Paper'

const ScoreTabel = ({ rolls }) => {
   const renderButtonGroup = () => {
      return Object.entries(rolls).map(([id, roll]) => {
         const least = Math.min(...roll)
         const others = [...roll]
         others.sort().splice(0, 1)
         return <ScoreRow least={least} others={others} key={id} />
      })
   }

   return <Paper className='score-tabel'>{renderButtonGroup()}</Paper>
}

export default ScoreTabel
