import { AVATAR_CUT } from "../action/Type";

const initialState = {
  avatar: false,
};

export default function AvatarReducer(state = initialState, action) {
  switch (action.type) {
    case AVATAR_CUT:
      return Object.assign({}, state, {
        avatar: action.avatar,
      });
    default:
      return state;
  }
}
