import React from 'react'
import { connect } from 'react-redux'

import Name from './Name'
import ColorPicker from './ColorPicker'

const CustomizerRow = ({ name, id, edit }) => {
   return (
      <div className='dice'>
         <Name name={name} id={id} />
         <ColorPicker id={id} />
      </div>
   )
}

const mapStateToProps = (state, ownProps) => {
   return { edit: state.dice[ownProps.id].edit }
}

export default connect(mapStateToProps)(CustomizerRow)
