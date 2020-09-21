import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from '../constants'

import { withStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const styles = {
   root: {
      backgroundColor: '#1A535C',
   },
}

const NavBar = ({ classes }) => {
   const [drawer, setDrawer] = useState(false)

   const renderNavItems = () => {
      return navLinks.map((link) => (
         <Link to={link.to} className='nav-link' key={link.title}>
            <ListItem button onClick={() => setDrawer(!drawer)}>
               <ListItemIcon>
                  <ArrowRightIcon />
               </ListItemIcon>
               <ListItemText primary={link.title} />
            </ListItem>
         </Link>
      ))
   }

   return (
      <>
         <AppBar className={classes.root} position='static' style={{ margin: '0 0 24px 0' }}>
            <Container maxWidth='lg' disableGutters={true}>
               <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h2>DnD Dice Roller</h2>
                  <IconButton
                     color='inherit'
                     aria-label='menu-open'
                     onClick={() => setDrawer(!drawer)}>
                     <MenuIcon />
                  </IconButton>
               </Toolbar>
            </Container>
         </AppBar>
         <Drawer
            variant='temporary'
            anchor='right'
            open={drawer}
            ModalProps={{ onBackdropClick: () => setDrawer(!drawer) }}>
            <div className='nav-drawer'>
               <IconButton
                  onClick={() => setDrawer(!drawer)}
                  aria-label='menu-close'
                  style={{ margin: '5px' }}>
                  <ChevronRightIcon />
               </IconButton>
               <Divider />
               <List
                  component='nav'
                  subheader={
                     <ListSubheader component='div'>What roll will you make?</ListSubheader>
                  }>
                  {renderNavItems()}
               </List>
            </div>
         </Drawer>
      </>
   )
}

export default withStyles(styles)(NavBar)
