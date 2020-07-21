import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openDrawer, closeDrawer } from '../actions'
import { Link } from 'react-router-dom'

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

const links = [
   {
      to: '/',
      title: 'Dice Roller',
   },
   {
      to: '/ability-score-roller',
      title: 'Ability Score Roller',
   },
]

class NavBar extends Component {
   toggleDrawer = (toggle) => {
      if (toggle === 'open') {
         this.props.openDrawer()
      } else {
         this.props.closeDrawer()
      }
   }

   renderNavItems = (links) => {
      return links.map((link) => (
         <Link to={link.to} className='nav-link' key={link.title}>
            <ListItem button onClick={() => this.toggleDrawer('close')}>
               <ListItemIcon>
                  <ArrowRightIcon />
               </ListItemIcon>
               <ListItemText primary={link.title} />
            </ListItem>
         </Link>
      ))
   }

   render() {
      return (
         <>
            <AppBar position='static' style={{ margin: '0 0 10px 0' }}>
               <Container maxWidth='lg' disableGutters={true}>
                  <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                     <h2>DnD Dice Roller</h2>
                     <IconButton
                        color='inherit'
                        aria-label='menu-open'
                        onClick={() => this.toggleDrawer('open')}
                     >
                        <MenuIcon />
                     </IconButton>
                  </Toolbar>
               </Container>
            </AppBar>
            <Drawer
               variant='temporary'
               anchor='right'
               open={this.props.drawer}
               ModalProps={{ onBackdropClick: this.toggleDrawer }}
            >
               <div className='nav-drawer'>
                  <IconButton
                     color='primary'
                     onClick={() => this.toggleDrawer('close')}
                     aria-label='menu-close'
                     style={{ margin: '5px' }}
                  >
                     <ChevronRightIcon />
                  </IconButton>
                  <Divider />
                  <List
                     component='nav'
                     subheader={
                        <ListSubheader component='div'>What roll will you make?</ListSubheader>
                     }
                  >
                     {this.renderNavItems(links)}
                  </List>
               </div>
            </Drawer>
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return { drawer: state.drawer }
}

export default connect(mapStateToProps, { openDrawer, closeDrawer })(NavBar)
