import { RECEIVED_GRAVATAR } from '../actions';

const INITIAL_STATE = {
  picture: 'https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3',
};

const gravatarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVED_GRAVATAR:
      return {
        ...state,
        picture: action.picture,
      };
    default: return state;
  }
};

export default gravatarReducer;
