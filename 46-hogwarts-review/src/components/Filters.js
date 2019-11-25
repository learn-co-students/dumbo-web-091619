import React from 'react';

// const sortChange = (props, event) => {
//   props.sortChange(event.target.value)
// }

const Filters = props => {
  return (<nav>
      <button onClick={ props.toggleGreased }>
        { props.greasedOnly ? "Greased only" : "All the hogs" }
      </button>
      <select onChange={ event => props.sortChange(event.target.value) }>
        <option value="none">Don't sort</option>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </nav>)
}


export default Filters