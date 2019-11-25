import React from 'react';

const Hog = ({ hog }) => <li>
  <h3>{ hog.name }</h3>
  <img src={ hog.image } />
  <dl>
    <dt>Greased:</dt>
    <dd>{ hog.greased ? "yes" : "nope" }</dd>
    <dt>Weight:</dt>
    <dd>{ hog.weight }</dd>
  </dl>
</li>


export default Hog