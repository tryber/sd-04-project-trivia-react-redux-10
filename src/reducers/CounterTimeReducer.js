import { TIC_TAC, FREEZE_COUNTER, RESTORE_CLOCK } from '../actions/index';

const INITIAL_STATE = {
  counter: 30,
};

const counterTimeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIC_TAC:
      return {
        ...state,
        counter: state.counter === 0 ? 0 : state.counter - 1,
      };
    case FREEZE_COUNTER:
      return {
        ...state,
        freeze: true,
      };
    case RESTORE_CLOCK:
      return {
        ...state,
        counter: 30,
        freeze: false,
      };
    default:
      return state;
  }
};

export default counterTimeReducer;
