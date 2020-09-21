import React from 'react'
import { connect } from 'react-redux'

import DieAmount from './DieAmount'
import DieType from './DieType'
import ModAmount from './ModAmount'
import Delete from './Delete'
import Edit from './Edit'

const RollRow = ({ edit, dieAmount, dieType, modAmount, id, handleRoll }) => {
   const renderRollRow = () => {
      if (edit) {
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
                  <Edit edit={edit} id={id} />
               </div>
            </div>
         )
      } else {
         return (
            <div className='dice dice-clickable' onClick={(e) => handleRoll(e)}>
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
                  <Edit edit={edit} id={id} />
               </div>
            </div>
         )
      }
   }

   return <>{renderRollRow()}</>
}

const mapStateToProps = (state, ownProps) => {
   return { edit: state.dice[ownProps.id].edit }
}

export default connect(mapStateToProps)(RollRow)
