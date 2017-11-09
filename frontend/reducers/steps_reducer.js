import { RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const initialState = {
  1: {
    id: 1,
    title: 'get water',
    body: 'from store',
    done: false,
    todo_id: 1
  },
  2: {
    id: 2,
    title: 'apply soap',
    body: 'on car',
    done: true,
    todo_id: 1
  },
};

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_STEP:
      return merge({}, state, {[action.step.id]: action.step});
    case REMOVE_STEP:
      nextState = merge({}, state);
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
}

export default stepsReducer;
