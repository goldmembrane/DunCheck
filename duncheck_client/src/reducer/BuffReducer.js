import { BUFF_SCORE_CUT } from "../action/Type";

const initialState = {
  buffScore: 0,
};

export default function BuffReducer(state = initialState, action) {
  switch (action.type) {
    case BUFF_SCORE_CUT:
      return Object.assign({}, state, {
        buffScore: action.buffScore,
      });
    default:
      return state;
  }
}
