import React, { useState } from 'react'
import { diceTypes } from '../assets'

import SvgIcon from '@material-ui/core/SvgIcon'
import IconButton from '@material-ui/core/IconButton'

const AbilityScoreRoller = () => {
   const [pickedType, setPickedType] = useState(null)

   return diceTypes
      .filter((item) => item.type >= 6 && item.type <= 12)
      .map((item) => (
         <IconButton key={item.type} onClick={() => setPickedType(item.type)}>
            <SvgIcon viewBox='0 0 24 24' style={{ width: '20px', height: '20px' }}>
               <path d={item.icon} />
            </SvgIcon>
         </IconButton>
      ))
}

export default AbilityScoreRoller
