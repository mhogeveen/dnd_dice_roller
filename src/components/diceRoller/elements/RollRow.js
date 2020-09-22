import React from 'react'
import { connect } from 'react-redux'

import { Edit, Delete, DieAmount, DieType, ModAmount } from './index'

const RollRow = ({ edit, die, id, handleRoll }) => {
   const { dieAmount, dieType, modAmount, name } = die

   const renderRollRow = () => {
      if (edit) {
         return (
            <div className='dice dice-editable'>
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
               <div className='dice-comp dice-comp--up'>
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
               <div className={name ? 'dice-comp dice-comp--up' : 'dice-comp'}>
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
