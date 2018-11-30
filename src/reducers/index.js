const initialState = {
  colors: [
    'blueviolet',
    'aquamarine',
    'darkslateblue',
    'blue'
  ]
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  default:
    return state;
  }
};

export default rootReducer;