import React from 'react'
import { diceTypes } from '../../assets'

import SvgIcon from '@material-ui/core/SvgIcon'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/styles'

const styles = {
   root: {
      color: '#43AA8B',
   },
}

const TypePicker = ({ classes, pickedType, handlePickType }) => {
   const renderPicked = () => {
      return diceTypes
         .filter((item) => item.type >= 6 && item.type <= 12)
         .map((item) => (
            <IconButton
               key={item.type}
               onClick={() => handlePickType(item.type)}
               className={pickedType === item.type ? classes.root : null}>
               <SvgIcon viewBox='0 0 24 24' style={{ width: '20px', height: '20px' }}>
                  <path d={item.icon} />
               </SvgIcon>
            </IconButton>
         ))
   }

   return (
      <div className='type-picker'>
         <h3>What is your characters hit dice type?</h3>
         <div className='type-picker__buttons'>{renderPicked()}</div>
      </div>
   )
}

export default withStyles(styles)(TypePicker)
