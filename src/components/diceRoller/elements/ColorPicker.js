import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateColor } from '../../../redux/actions'

import { CirclePicker } from 'react-color'
import { withStyles } from '@material-ui/styles'
import ToolTip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import PaletteIcon from '@material-ui/icons/Palette'

const styles = {
   root: {
      color: 'rgba(0,0,0,0.7)',
   },
}

const ColorPicker = ({ edit, id, updateColor, color, classes }) => {
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
            <ToolTip title='Pick color'>
               <IconButton
                  className={classes.root}
                  aria-label='pick-color'
                  onClick={() => setOpen(!open)}>
                  <PaletteIcon />
               </IconButton>
            </ToolTip>
            {open ? (
               <CirclePicker
                  color={color}
                  colors={[
                     '#F94144',
                     '#F3722C',
                     '#F8961E',
                     '#F9C74F',
                     '#90BE6D',
                     '#43AA8B',
                     '#577590',
                  ]}
                  onChange={(color, e) => handleChange(color, e)}
                  style={{ position: 'absolute !important' }}
                  width={220}
                  circleSize={20}
                  circleSpacing={10}
               />
            ) : null}
         </div>
      )
   } else {
      return null
   }
}

const mapStateToProps = (state, ownProps) => {
   return { edit: state.dice[ownProps.id].edit, color: state.dice[ownProps.id].color }
}

export default connect(mapStateToProps, { updateColor })(withStyles(styles)(ColorPicker))
