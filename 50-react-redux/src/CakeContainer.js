import React from 'react';
import Cake from './Cake'

class CakeContainer extends React.Component {

  render(){
    console.log(this.props)
    return (
      <ul>
        {
          this.props.cakes.map(cake => <Cake key={ cake.id } cake={ cake } />)
        }
      </ul>
    );
  }
}

export default CakeContainer;

