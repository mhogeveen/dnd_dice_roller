import React, { useState } from 'react'

import { TypePicker } from '../components/abilityScoreRoller'

const AbilityScoreRoller = () => {
   const [pickedType, setPickedType] = useState(null)

   return <TypePicker pickedType={pickedType} setPickedType={setPickedType} />
}

export default AbilityScoreRoller
