import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addResult } from '../actions'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import DieIcon from './dice/DieIcon'
import DieAmount from './dice/DieAmount'
import DieType from './dice/DieType'
import ModAmount from './dice/ModAmount'
import Reset from './dice/Reset'
import RemoveRow from './dice/RemoveRow'

class Dice extends Component {
   handleRoll = () => {
      const { die, id } = this.props

      const now = new Date()

      let result = {
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
      this.props.addResult(result, id)
   }

   renderDice = (dieAmount, dieType, modAmount, id) => {
      if (this.props.edit) {
         return (
            <div className='dice'>
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
            </div>
         )
      } else {
         return (
            <div className='dice dice-clickable'>
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
            </div>
         )
      }
   }

   renderResult = (result) => {
      if (result === undefined) {
         return (
            <div className='result'>
               <div className='result-comp'>
                  <span>Roll the dice to get results!</span>
               </div>
            </div>
         )
      } else {
         return (
            <div className='result'>
               <div className='result-comp'>
                  <span>{result.rolls.join('+')}</span>
               </div>
               <div className='result-comp'>
                  <span>=</span>
               </div>
               <div className='result-comp'>
                  <span>{result.subtotal}</span>
               </div>
               <div className='result-comp'>
                  <span>{result.modAmount >= 0 ? '+' : '-'}</span>
               </div>
               <div className='result-comp'>{Math.abs(result.modAmount)}</div>
               <div className='result-comp'>
                  <span>=</span>
               </div>
               <div className='result-comp'>
                  <span>{result.total}</span>
               </div>
            </div>
         )
      }
   }

   handleOnClick = () => {
      if (!this.props.edit) {
         this.handleRoll()
      }
   }

   render() {
      const { dieAmount, dieType, modAmount } = this.props.die
      const id = this.props.id
      const result = this.props.result

      return (
         <Paper elevation={1} style={{ marginBottom: '10px' }} onClick={this.handleOnClick}>
            {this.renderDice(dieAmount, dieType, modAmount, id)}
            <Divider />
            {this.renderResult(result)}
         </Paper>
      )
   }
}

const mapStateToProps = (state, ownProps) => {
   return { edit: state.edit, result: state.results[ownProps.id] }
}

export default connect(mapStateToProps, { addResult })(Dice)
