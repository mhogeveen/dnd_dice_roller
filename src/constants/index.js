import { v4 as uuidv4 } from 'uuid'

export const initialState = {
   [uuidv4()]: {
      name: '',
      edit: false,
      dieAmount: 1,
      dieType: 20,
      modAmount: 0,
      color: '#F94144',
   },
}

export const initialDie = {
   name: '',
   edit: false,
   dieAmount: 1,
   dieType: 20,
   modAmount: 0,
   color: '#F94144',
}

export const navLinks = [
   {
      to: '/',
      title: 'Dice Roller',
   },
   {
      to: '/ability-score-roller',
      title: 'Ability Score Roller',
   },
]
