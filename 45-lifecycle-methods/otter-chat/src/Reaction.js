import React from 'react';

const Reaction = (props) => <button onClick={ () => props.addFacepalmTo(props.messageId) }>
          <span role="img" aria-label="facepalming">🤦‍♀️</span> { props.facepalms }
        </button>


export default Reaction