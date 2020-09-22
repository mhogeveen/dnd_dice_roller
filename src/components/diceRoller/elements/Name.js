import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../../../redux/actions'

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

const Name = ({ id, updateName, classes, edit, name }) => {
   const handleUpdateName = (e) => {
      updateName(e.target.value, id)
   }

   const renderName = () => {
      if (edit) {
         return (
            <div className='name'>
               <TextField
                  className={classes.root}
                  value={name}
                  size='small'
                  variant='outlined'
                  onChange={(e) => handleUpdateName(e)}
                  style={{ width: '100%' }}
               />
            </div>
         )
      } else {
         if (name) {
            return (
               <div className='name'>
                  <span>{name}</span>
               </div>
            )
         }
      }
   }

   return <>{renderName()}</>
}

const mapStateToProps = (state, ownProps) => {
   return { edit: state.dice[ownProps.id].edit }
}

export default connect(mapStateToProps, { updateName })(withStyles(styles)(Name))
