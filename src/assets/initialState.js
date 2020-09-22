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
