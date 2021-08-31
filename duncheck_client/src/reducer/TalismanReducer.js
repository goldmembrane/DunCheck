import { TALISMAN_CUT } from "../action/Type"

const initialState = {
    talisman: false
}

export default function TalismanReducer (state = initialState, action) {
    switch(action.type) {
        case TALISMAN_CUT:
            return Object.assign({}, state, {
                talisman: action.talisman
            })
        default:
            return state
    }
}