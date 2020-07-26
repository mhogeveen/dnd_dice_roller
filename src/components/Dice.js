import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addResult } from '../actions'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import Name from './dice/Name'
import RollRow from './dice/RollRow'
import ResultRow from './dice/ResultRow'

class Dice extends Component {
   handleRoll = () => {
      const { die, id } = this.props

      let result = {
         rolls: [],
         subtotal: 0,
         total: 0,
         modAmount: Number(die.modAmount),
         dieAmount: die.dieAmount,
         dieType: Number(die.dieType),
      }

      for (let i = 0; i < die.dieAmount; i++) {
         if (die.dieType === 10) {
            const roll = Math.floor(Math.random() * die.dieType)
            result.rolls = [...result.rolls, roll]
            result.subtotal += roll
         } else {
            const roll = Math.ceil(Math.random() * die.dieType)
            result.rolls = [...result.rolls, roll]
            result.subtotal += roll
         }
      }

      result.total = result.subtotal + result.modAmount
      this.props.addResult(result, id)
   }

   render() {
      const { dieAmount, dieType, modAmount, name } = this.props.die
      const id = this.props.id

      return (
         <>
            <Name name={name} id={id} />
            <Paper elevation={1} style={{ marginBottom: '10px', position: 'relative' }}>
               <div className='color-box' style={{ background: '#4edcd4' }}></div>
               <RollRow
                  dieAmount={dieAmount}
                  dieType={dieType}
                  modAmount={modAmount}
                  id={id}
                  handleRoll={this.handleRoll}
               />
               <Divider />
               <ResultRow id={id} />
            </Paper>
         </>
      )
   }
}

export default connect(null, { addResult })(Dice)
