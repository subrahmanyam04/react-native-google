import { legacy_createStore as createStore } from 'redux';

import Tokenreducer from './Reducers/Tokenreducer';
// Assuming you have a rootReducer if there are multiple reducers
 // You can use Redux Thunk for async actions

const store = createStore(Tokenreducer);

export default store;