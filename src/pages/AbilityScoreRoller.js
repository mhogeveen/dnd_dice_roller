import React, { useState } from 'react'

import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import { ScoreTabel } from '../components/abilityScoreRoller'

const styles = {
   root: {
      color: '#43AA8B',
      border: '1px solid rgba(67, 170, 139,0.5)',
      '&:hover': {
         border: '1px solid #43AA8B',
         backgroundColor: 'rgba(67, 170, 139,0.04)',
      },
   },
}

const AbilityScoreRoller = ({ classes }) => {
   const [rolls, setRolls] = useState([])

   const handleRoll = () => {
      let results = [[], [], [], [], [], []]

      for (let i = 0; i < 4; i++) {
         for (let j = 0; j <= 5; j++) {
            const roll = Math.ceil(Math.random() * 6)
            results[j] = [...results[j], roll]
         }
      }

      setRolls(results)
   }

   return (
      <div className='ability-score-roller'>
         <Button variant='outlined' className={classes.root} onClick={() => handleRoll()}>
            Roll for Ability Scores
         </Button>
         <ScoreTabel rolls={rolls} />
      </div>
   )
}

export default withStyles(styles)(AbilityScoreRoller)
