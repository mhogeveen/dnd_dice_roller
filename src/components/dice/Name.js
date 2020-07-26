import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateName } from '../../actions'

import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'

const styles = {
   root: {
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
         borderColor: '#4ecdc4',
         borderWidth: '1px',
      },
   },
}

class Name extends Component {
   handleUpdateName = (e) => {
      this.props.updateName(e.target.value, this.props.id)
   }

   renderName = () => {
      const { classes } = this.props

      if (this.props.edit) {
         return (
            <div className='dice'>
               <div className='name'>
                  <TextField
                     className={classes.root}
                     value={this.props.name}
                     size='small'
                     variant='outlined'
                     onChange={this.handleUpdateName}
                     style={{ width: '100%' }}
                  />
               </div>
            </div>
         )
      } else {
         if (this.props.name) {
            return (
               <div className='dice'>
                  <div className='name'>
                     <span>{this.props.name}</span>
                  </div>
               </div>
            )
         }
      }
   }

   render() {
      return <>{this.renderName()}</>
   }
}

const mapStateToProps = (state, ownProps) => {
   return { edit: state.dice[ownProps.id].edit }
}

export default connect(mapStateToProps, { updateName })(withStyles(styles)(Name))
