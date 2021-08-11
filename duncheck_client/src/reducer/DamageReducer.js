import { DAMAGE_CUT } from "../action/Type"

const initialState = {
    damage: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DAMAGE_CUT:
            return Object.assign({}, state, {
                damage: action.damage
            })
        default:
            return state
    }
}