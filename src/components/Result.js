import React from 'react'

const Result = ({ result }) => {
   const { date, rolls, total, dieAmount, dieType, modAmount } = result
   return (
      <div>
         <p>
            <span style={{ fontSize: '1.25rem', fontWeight: '500' }}>{rolls.join(', ')}</span>
            <br />
            <span>{`${dieAmount}d${dieType} + ${modAmount}: (total: ${total})`}</span>
            <br />
            <em style={{ fontSize: '0.7rem' }}>{date}</em>
         </p>
      </div>
   )
}

export default Result
