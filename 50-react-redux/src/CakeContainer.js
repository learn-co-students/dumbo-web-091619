import React from 'react';
import Cake from './Cake'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    cakes: state.cakes
  }
}

const CakeContainer = props => <ul>
    {
      props.cakes.map(cake => <Cake key={ cake.id } cake={ cake } />)
    }
  </ul>


// const higherOrderComponent = connect(mapStateToProps)
// const wrappedComponent = higherOrderComponent(CakeContainer);
// export default wrappedComponent

export default connect(mapStateToProps)(CakeContainer)






