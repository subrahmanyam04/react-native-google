import * as actionType from '../Actions/actionType'


const initialState = {
    token: ''  ,
  
  };
  
  const Tokenreducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.SET_TOKEN:
        const newStateSetData = {
          ...state,
          token: action.payload,
        };
        console.log('New state after SET_Token:', newStateSetData);
      //   console.log('new sliderdta',sliderdata)
        return newStateSetData;
      
  
      
      default:
        return state;
    }
  };

  export default Tokenreducer;