import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addResult } from '../actions'

import Paper from '@material-ui/core/Paper'

import DieIcon from './die_row_pieces/DieIcon'
import DieAmount from './die_row_pieces/DieAmount'
import DieType from './die_row_pieces/DieType'
import ModAmount from './die_row_pieces/ModAmount'
import Reset from './die_row_pieces/Reset'
import RemoveRow from './die_row_pieces/RemoveRow'

class Dice extends Component {
   handleRoll = () => {
      const { die } = this.props

      const now = new Date()

      let result = {
         id: Date.now(),
         date: now.toLocaleString(),
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

   renderDice = (dieAmount, dieType, modAmount, id) => {
      if (this.props.edit) {
         return (
            <Paper elevation={1} style={{ marginBottom: '10px' }} className='dice'>
               <div className='dice-comp'>
                  <DieIcon dieType={dieType} />
               </div>
               <div className='dice-comp'>
                  <DieAmount dieAmount={dieAmount} id={id} />
               </div>
               <div className='dice-comp'>
                  <span>d</span>
               </div>
               <div className='dice-comp'>
                  <DieType dieType={dieType} id={id} />
               </div>
               <div className='dice-comp'>
                  <ModAmount modAmount={modAmount} id={id} />
               </div>
               <div className='dice-comp'>
                  <Reset id={id} />
                  <RemoveRow id={id} />
               </div>
            </Paper>
         )
      } else {
         return (
            <Paper
               elevation={1}
               style={{ marginBottom: '10px' }}
               className='dice dice-clickable'
               onClick={this.handleRoll}
            >
               <div className='dice-comp'>
                  <DieIcon dieType={dieType} />
               </div>
               <div className='dice-comp'>
                  <span className='dice-comp-info'>{dieAmount}</span>
               </div>
               <div className='dice-comp'>
                  <span>d</span>
               </div>
               <div className='dice-comp'>
                  <span className='dice-comp-info'>{dieType}</span>
               </div>
               <div className='dice-comp'>
                  <span className='dice-comp-info'>{modAmount}</span>
               </div>
            </Paper>
         )
      }
   }

   render() {
      const { dieAmount, dieType, modAmount } = this.props.die
      const id = this.props.id

      return this.renderDice(dieAmount, dieType, modAmount, id)
   }
}

const mapStateToProps = (state) => {
   return { edit: state.edit }
}

export default connect(mapStateToProps, { addResult })(Dice)
