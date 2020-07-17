import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'

class Roll extends Component {
   calculateRoll = () => {
      const { die } = this.props

      let results = {
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
            results.rolls = [...results.rolls, roll]
            results.subtotal += roll
         } else {
            const roll = Math.ceil(Math.random() * die.dieType)
            results.rolls = [...results.rolls, roll]
            results.subtotal += roll
         }
      }

      results.total = results.subtotal + results.modAmount
      console.log(results)
   }

   render() {
      return (
         <Button
            color='primary'
            variant='outlined'
            style={{ margin: '0 10px 0 0' }}
            onClick={this.calculateRoll}
         >
            Roll
         </Button>
      )
   }
}

export default connect(null)(Roll)
