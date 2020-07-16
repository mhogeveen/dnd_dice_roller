import React, { Component } from 'react'
import {
   SvgIcon,
   TextField,
   MenuItem,
   Radio,
   FormControl,
   RadioGroup,
   FormControlLabel,
   Button,
   Paper,
   Grid,
} from '@material-ui/core'

const diceTypes = [4, 6, 8, 10, 12, 20, 100]

const handleTypeChange = (e) => {
   console.log(e)
}

class DieRow extends Component {
   render() {
      return (
         <Paper>
            <form autoComplete='off'>
               <Grid container spacing={3} alignItems='center'>
                  {/* Die icon */}
                  <Grid item>
                     <SvgIcon viewBox='0 0 27 27'>
                        <path
                           d='M24.844,0.616H2.146C0.96,0.616,0,1.577,0,2.761v21.467c0,1.184,0.96,2.145,2.146,2.145h22.698
		c1.182,0,2.146-0.961,2.146-2.145V2.761C26.99,1.577,26.025,0.616,24.844,0.616z M6.168,8.78c-1.533,0-2.779-1.244-2.779-2.779
		c0-1.531,1.246-2.777,2.779-2.777c1.534,0,2.777,1.246,2.777,2.777C8.945,7.536,7.702,8.78,6.168,8.78z M20.949,16.272
		c-1.535,0-2.778-1.242-2.778-2.777c0-1.533,1.243-2.777,2.778-2.777c1.533,0,2.779,1.244,2.779,2.777
		C23.729,15.03,22.482,16.272,20.949,16.272z M6.208,16.272c-1.534,0-2.777-1.242-2.777-2.777c0-1.533,1.243-2.777,2.777-2.777
		s2.777,1.244,2.777,2.777C8.985,15.03,7.742,16.272,6.208,16.272z M21.165,23.62c-1.532,0-2.778-1.244-2.778-2.777
		s1.246-2.777,2.778-2.777c1.534,0,2.778,1.244,2.778,2.777S22.699,23.62,21.165,23.62z M21.006,8.828
		c-1.533,0-2.777-1.244-2.777-2.775c0-1.533,1.244-2.777,2.777-2.777s2.777,1.244,2.777,2.777
		C23.783,7.583,22.539,8.828,21.006,8.828z M6.235,23.557c-1.533,0-2.777-1.244-2.777-2.777c0-1.535,1.244-2.777,2.777-2.777
		c1.534,0,2.779,1.242,2.779,2.777C9.015,22.313,7.77,23.557,6.235,23.557z'
                        />
                     </SvgIcon>
                  </Grid>
                  {/* Amount of dice to roll */}
                  <Grid item>
                     <TextField
                        label='# of dice'
                        id='diceToRoll'
                        defaultValue='1'
                        className=''
                        margin='dense'
                        variant='outlined'
                     />
                  </Grid>
                  {/* d */}
                  <Grid item>
                     <p>d</p>
                  </Grid>
                  {/* Selected die type */}
                  <Grid item>
                     <TextField
                        id='dieType'
                        select
                        label='Select'
                        value='0'
                        onChange={handleTypeChange}
                        margin='dense'
                        variant='outlined'
                     >
                        {diceTypes.map((type) => (
                           <MenuItem key={type} value={type}>
                              {type}
                           </MenuItem>
                        ))}
                     </TextField>
                  </Grid>
                  {/* Positive or negative modifier */}
                  <Grid item>
                     <FormControl component='fieldset'>
                        <RadioGroup row aria-label='position' name='dieMod' defaultValue='+'>
                           <FormControlLabel
                              value='+'
                              control={<Radio color='primary' margin='dense' />}
                              label='+'
                              labelPlacement='top'
                           />
                           <FormControlLabel
                              value='-'
                              control={<Radio color='primary' />}
                              label='-'
                              labelPlacement='top'
                           />
                        </RadioGroup>
                     </FormControl>
                  </Grid>
                  {/* Modifier amount */}
                  <Grid item>
                     <TextField
                        label='modifier'
                        id='modifier'
                        defaultValue='0'
                        className=''
                        margin='dense'
                        variant='outlined'
                     />
                  </Grid>
                  {/* Roll button */}
                  <Grid item>
                     <Button color='primary' variant='contained'>
                        Roll
                     </Button>
                  </Grid>
                  {/* Reset row button */}
                  <Grid item>
                     <Button color='secondary' variant='outlined'>
                        Reset
                     </Button>
                  </Grid>
                  {/* Remove row button */}
                  <Grid item>
                     <Button>-</Button>
                  </Grid>
                  {/* Add row button */}
                  <Grid item>
                     <Button>+</Button>
                  </Grid>
               </Grid>
            </form>
         </Paper>
      )
   }
}

export default DieRow
