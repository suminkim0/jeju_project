import { combineReducers } from 'redux';

const initialState = {
  token: null,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  token: tokenReducer,
});

export default rootReducer;
