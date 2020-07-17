import React from 'react'

const Result = ({ result }) => {
   const { date, rolls, subtotal, total, dieAmount, dieType, modAmount } = result
   return (
      <div>
         <p>
            <strong style={{ fontSize: '0.7rem' }}>{date}</strong>
            <br />
            <span>{`${dieAmount}d${dieType} + ${modAmount}: (subtotal: ${subtotal} / total: ${total})`}</span>
            <br />
            <span style={{ fontSize: '1.25rem' }}>{rolls.join(', ')}</span>
         </p>
      </div>
   )
}

export default Result
