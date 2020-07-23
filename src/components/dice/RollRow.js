import React, { Component } from 'react'
import { connect } from 'react-redux'

import DieIcon from './DieIcon'
import DieAmount from './DieAmount'
import DieType from './DieType'
import ModAmount from './ModAmount'
import Reset from './Reset'
import RemoveRow from './RemoveRow'

class RollRow extends Component {
   renderRollRow = (dieAmount, dieType, modAmount, id) => {
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
            <div className='dice dice-clickable' onClick={this.props.handleRoll}>
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

   render() {
      const { dieAmount, dieType, modAmount, id } = this.props
      return <>{this.renderRollRow(dieAmount, dieType, modAmount, id)}</>
   }
}

const mapStateToProps = (state) => {
   return { edit: state.edit }
}

export default connect(mapStateToProps)(RollRow)
