import { combineReducers } from 'redux';

const initialState = {
  id: null,
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_TOKEN':
      return { ...state, id: action.payload.id, token: action.payload.token };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
