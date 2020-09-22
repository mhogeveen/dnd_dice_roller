import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

class AbilityScoreRoller extends Component {
   render() {
      return (
         <Paper
            elevation={1}
            style={{
               display: 'flex',
               flexDirection: 'row',
               alignItems: 'center',
               padding: '10px',
            }}>
            <TextField
               variant='outlined'
               value='4'
               disabled
               margin='dense'
               style={{ width: '40px', margin: '0px' }}
               inputProps={{ style: { textAlign: 'center' } }}
            />
            <p style={{ margin: '0 10px', fontSize: '1.25rem' }}>d</p>
            <ButtonGroup aria-label=' outlined button group' style={{ height: '40px' }}>
               <Button>6</Button>
               <Button>8</Button>
               <Button>10</Button>
               <Button>12</Button>
            </ButtonGroup>
         </Paper>
      )
   }
}

export default AbilityScoreRoller
