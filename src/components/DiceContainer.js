import React, { Component } from 'react'
import { connect } from 'react-redux'

import DieRow from './DieRow'

class DiceContainer extends Component {
   render() {
      return this.props.dice.map((die) => <DieRow die={die} key={die.id} />)
   }
}

const mapStateToProps = (state) => {
   return { dice: state.dice }
}

export default connect(mapStateToProps)(DiceContainer)
