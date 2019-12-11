import React from 'react';
import Gerbil from './Gerbil'
import { connect } from 'react-redux';
import actionCreators from './actionCreators';

class GerbilContainer extends React.Component {

  componentDidMount() {
    this.props.populateGerbils()
  }

  render() {
    return <ul>
        {
          this.props.gerbils.map(gerbil => <Gerbil key={ gerbil.id } gerbil={ gerbil } />)
        }
      </ul>
    }
}  

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    gerbils: state.gerbils
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    populateGerbils: () => dispatch(actionCreators.populateGerbils())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GerbilContainer)






