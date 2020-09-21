import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateColor } from '../../actions'

import { CirclePicker } from 'react-color'

const ColorPicker = ({ edit, id, updateColor, color }) => {
   const [open, setOpen] = useState(false)

   const handleChange = (color, e) => {
      e.stopPropagation()
      updateColor(color.hex, id)
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
                     width={190}
                     circleSize={20}
                     circleSpacing={10}
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
   return { edit: state.dice[ownProps.id].edit, color: state.dice[ownProps.id].color }
}

export default connect(mapStateToProps, { updateColor })(ColorPicker)
