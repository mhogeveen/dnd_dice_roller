import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import MenuIcon from '@material-ui/icons/Menu'

const NavBar = () => {
   return (
      <AppBar position='static' style={{ margin: '0 0 20px 0' }}>
         <Container maxWidth='lg' disableGutters='true'>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
               <h2>DnD Dice Roller</h2>
               <IconButton color='inherit' aria-label='menu'>
                  <MenuIcon />
               </IconButton>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default NavBar
