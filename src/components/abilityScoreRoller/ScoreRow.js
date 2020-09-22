import React, { useState, useEffect } from 'react'

import Paper from '@material-ui/core/Paper'

const ScoreRow = ({ roll }) => {
   const [lowRoll, setLowRoll] = useState(null)
   const [otherRolls, setOtherRolls] = useState(null)

   useEffect(() => {
      const least = Math.min(...roll)
      setLowRoll(least)

      const others = [...roll]
      others.sort().splice(0, 1)
      setOtherRolls(others)
   }, [roll])

   const renderRoll = () => {
      let leastRendered = false
      const least = Math.min(...roll)

      return Object.entries(roll).map(([id, item]) => {
         if (least === item && leastRendered === false) {
            leastRendered = true
            return (
               <Paper variant='outlined' key={id} className='score-row__item item--disabeled'>
                  {item}
               </Paper>
            )
         } else {
            return (
               <Paper variant='outlined' key={id} className='score-row__item'>
                  {item}
               </Paper>
            )
         }
      })
   }

   const calculateTotal = () => {
      if (otherRolls !== null) {
         let total = 0
         otherRolls.map((item) => (total += item))
         return total
      }
   }

   return (
      <div className='score-row'>
         {renderRoll()}
         {calculateTotal()}
      </div>
   )
}

export default ScoreRow
