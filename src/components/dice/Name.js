import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateName } from '../../actions'

import TextField from '@material-ui/core/TextField'

class Name extends Component {
   handleUpdateName = (e) => {
      this.props.updateName(e.target.value, this.props.id)
   }

   renderName = () => {
      if (this.props.edit) {
         return (
            <TextField
               value={this.props.name}
               size='small'
               variant='outlined'
               onChange={this.handleUpdateName}
               style={{ width: '200px', margin: '0 0 5px 10px' }}
            />
         )
      } else {
         if (this.props.name) {
            return (
               <div className='name'>
                  <p>{this.props.name}</p>
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

export default connect(mapStateToProps, { updateName })(Name)
