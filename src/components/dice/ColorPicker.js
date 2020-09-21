import React, { useState } from 'react'
import { connect } from 'react-redux'

import { CirclePicker } from 'react-color'

const ColorPicker = ({ edit }) => {
   const [open, setOpen] = useState(false)
   const [color, setColor] = useState('#4edcd4')

   const handleChange = (color, e) => {
      e.stopPropagation()
      setColor(color.hex)
      setTimeout(() => {
         setOpen(!open)
      }, 200)
   }

   if (edit) {
      return (
         <div className='color-picker'>
            <div
               className='color-picker__inner'
               style={{ backgroundColor: color }}
               onClick={() => setOpen(!open)}>
               {open ? (
                  <CirclePicker
                     color={color}
                     onChange={(color, e) => handleChange(color, e)}
                     style={{ position: 'absolute !important' }}
                     width='266px'
                  />
               ) : null}
            </div>
         </div>
      )
   } else {
      return null
   }
}

const mapStateToProps = (state, ownProps) => {
   return { edit: state.dice[ownProps.id].edit }
}

export default connect(mapStateToProps)(ColorPicker)
