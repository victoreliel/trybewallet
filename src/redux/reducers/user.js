import { SAVE_USER } from '../actions/actionsTypes';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER:
    return {
      ...state,
      email: action.value.email,
    };
  default:
    return state;
  }
};

export default userReducer;
