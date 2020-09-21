import React from 'react'
import { connect } from 'react-redux'
import { addResult } from '../actions'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import RollRow from './dice/RollRow'
import ResultRow from './dice/ResultRow'
import CustomizerRow from './dice/CustomizerRow'

const Dice = ({ die, id, addResult }) => {
   const { dieAmount, dieType, modAmount, name, color } = die

   const handleRoll = () => {
      let result = {
         rolls: [],
         subtotal: 0,
         total: 0,
         modAmount: Number(modAmount),
         dieAmount: dieAmount,
         dieType: Number(dieType),
      }

      for (let i = 0; i < dieAmount; i++) {
         const roll = Math.ceil(Math.random() * dieType)
         result.rolls = [...result.rolls, roll]
         result.subtotal += roll
      }

      result.total = result.subtotal + result.modAmount
      addResult(result, id)
   }

   return (
      <>
         <CustomizerRow name={name} id={id} />
         <Paper elevation={1} style={{ marginBottom: '10px', position: 'relative' }}>
            <div className='color-box' style={{ background: color }}></div>
            <RollRow die={die} id={id} handleRoll={handleRoll} />
            <Divider />
            <ResultRow id={id} />
         </Paper>
      </>
   )
}

export default connect(null, { addResult })(Dice)
