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
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

class NavBar extends Component {
   toggleDrawer = (toggle) => {
      if (toggle === 'open') {
         this.props.openDrawer()
      } else {
         this.props.closeDrawer()
      }
   }

   render() {
      return (
         <>
            <AppBar position='static' style={{ margin: '0 0 20px 0' }}>
               <Container maxWidth='lg' disableGutters='true'>
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
                     onClick={() => this.toggleDrawer('close')}
                     aria-label='menu-close'
                     style={{ margin: '5px' }}
                  >
                     <ChevronRightIcon />
                  </IconButton>
                  <Divider />
                  <List component='nav' aria-label='secondary mailbox folders'>
                     <Link to='/' className='nav-link'>
                        <ListItem button>
                           <ListItemText primary='Dice Roller' />
                        </ListItem>
                     </Link>
                     <ListItem button>
                        <ListItemText primary='Ability Score Roller' />
                     </ListItem>
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
