import { PURE_DAMAGE_CUT } from "../action/Type"
import { SYNERGY_DAMAGE_CUT } from "../action/Type"

const initialState = {
    pureDamage: 0,
    synergyDamage: 0,
}

export default function DamageReducer(state = initialState, action) {
    switch(action.type) {
        case PURE_DAMAGE_CUT:
            return Object.assign({}, state, {
                pureDamage: action.pureDamage
            })
        case SYNERGY_DAMAGE_CUT:
            return Object.assign({}, state, {
                synergyDamage: action.synergyDamage
            })
        default:
            return state
    }
}