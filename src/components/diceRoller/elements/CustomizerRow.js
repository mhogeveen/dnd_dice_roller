import React from 'react'
import { connect } from 'react-redux'

import { Name, ColorPicker } from './index'

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
