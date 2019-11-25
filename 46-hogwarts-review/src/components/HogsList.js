import React from 'react';
import Hog from './Hog'

import augustus_gloop  from "../hog-imgs/augustus_gloop.jpg"
import bay_of_pigs from "../hog-imgs/bay_of_pigs.jpg"
import cherub from "../hog-imgs/cherub.png"
import galaxy_note from "../hog-imgs/galaxy_note.jpg"
import leggo_my_eggo from "../hog-imgs/leggo_my_eggo.jpg"
import mudblood from "../hog-imgs/mudblood.jpg"
import piggy_smalls from "../hog-imgs/piggy_smalls.jpg"
import porkchop from "../hog-imgs/porkchop.jpg"
import rainbowdash from "../hog-imgs/rainbowdash.jpg"
import sobriety from "../hog-imgs/sobriety.jpg"
import the_prosciutto_concern from "../hog-imgs/the_prosciutto_concern.jpg"
import trouble from "../hog-imgs/trouble.jpg"
import truffleshuffle from "../hog-imgs/truffleshuffle.jpg"

const hogImageMapping = {
  'Augustus Gloop': augustus_gloop,
  'Bay of Pigs': bay_of_pigs,
  'Cherub': cherub,
  'Galaxy Note': galaxy_note,
  'Leggo My Eggo': leggo_my_eggo,
  'Mudblood': mudblood,
  'Piggy smalls': piggy_smalls,
  'Porkchop': porkchop,
  'Rainbowdash': rainbowdash,
  'Sobriety': sobriety,
  'The Prosciutto Concern': the_prosciutto_concern,
  'Trouble': trouble,
  'TruffleShuffle': truffleshuffle,
}

class HogsList extends React.Component {


  render(){
    return (<ul className="HogsList">{
        this.props.hogs.map(hog => <Hog key={ hog.name } hog={ { ...hog, image: hogImageMapping[hog.name] } } />)
      }</ul>)
  }
}


export default HogsList