import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addResult } from '../../actions'

import Button from '@material-ui/core/Button'

class Roll extends Component {
   handleRoll = () => {
      const { die } = this.props

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
      this.props.addResult(result)
   }

   render() {
      return (
         <Button
            color='primary'
            variant='outlined'
            style={{ margin: '0 10px 0 0' }}
            onClick={this.handleRoll}
         >
            Roll
         </Button>
      )
   }
}

export default connect(null, { addResult })(Roll)
