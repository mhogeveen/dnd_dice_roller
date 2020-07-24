import React, { Component } from 'react'
import { connect } from 'react-redux'

import DieAmount from './DieAmount'
import DieType from './DieType'
import ModAmount from './ModAmount'
import Delete from './Delete'
import Edit from './Edit'

class RollRow extends Component {
   renderRollRow = (dieAmount, dieType, modAmount, id) => {
      if (this.props.edit) {
         return (
            <div className='dice'>
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
                  <Delete id={id} />
                  <Edit edit={this.props.edit} id={id} />
               </div>
            </div>
         )
      } else {
         return (
            <div className='dice dice-clickable' onClick={this.props.handleRoll}>
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
               <div className='dice-comp'>
                  <Edit edit={this.props.edit} id={id} />
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

const mapStateToProps = (state, ownProps) => {
   return { edit: state.dice[ownProps.id].edit }
}

export default connect(mapStateToProps)(RollRow)
