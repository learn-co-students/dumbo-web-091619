import React from 'react';
import Cake from './Cake'
import { connect } from 'react-redux';
import actionCreators from './actionCreators';

class CakeContainer extends React.Component {

  componentDidMount() {
    this.props.populateCakes()
  }

  render() {
    return <ul>
      {
        this.props.cakes.map(cake => <Cake key={ cake.id } cake={ cake } />)
      }
    </ul>
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    cakes: state.cakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    populateCakes: () => dispatch(actionCreators.populateCakes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)






