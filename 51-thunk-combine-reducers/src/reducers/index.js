import { combineReducers } from 'redux';

import gerbilReducer from './gerbilReducer';
import cakeReducer from './cakeReducer';

const reducer = combineReducers({
  gerbils: gerbilReducer,
  cakes: cakeReducer
})


export default reducer