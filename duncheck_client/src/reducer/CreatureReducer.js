import { CREATURE_CUT } from "../action/Type";

const initialState = {
  creature: 0,
};

export default function CreatureReducer(state = initialState, action) {
  switch (action.type) {
    case CREATURE_CUT:
      return Object.assign({}, state, {
        creature: action.creature,
      });
    default:
      return state;
  }
}
