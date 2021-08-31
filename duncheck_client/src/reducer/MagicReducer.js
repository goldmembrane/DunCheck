import { WEAPON_MAGIC_CUT, SHIRT_MAGIC_CUT, PANTS_MAGIC_CUT, SHOULDER_MAGIC_CUT, SHOES_MAGIC_CUT, ARMLET_MAGIC_CUT, NECKLACE_MAGIC_CUT, RING_MAGIC_CUT, AUXILIARY_MAGIC_CUT, MAGICSTONE_MAGIC_CUT, EARLING_MAGIC_CUT, FULL_CRITICAL_CUT, STYLE_CUT } from '../action/Type'

const initialState = {
    weapon : 0,
    shirt: 0,
    pants: 0,
    shoulder: 0,
    shoes: 0,
    armlet: 0,
    necklace: 0,
    ring: 0,
    auxiliary: 0,
    magicstone: 0,
    earling: 0,
    critical: false,
    style: 0,
}

export default function MagicReducer (state = initialState, action) {
    switch(action.type) {
        case STYLE_CUT:
            return Object.assign({}, state, {
                style: action.payload.style
            })
        case WEAPON_MAGIC_CUT:
            return Object.assign({}, state, {
                weapon: action.payload.weapon
            })
        case SHIRT_MAGIC_CUT:
            return Object.assign({}, state, {
                shirt: action.payload.shirt
            })
        case PANTS_MAGIC_CUT:
            return Object.assign({}, state, {
                pants: action.payload.pants
            })
        case SHOULDER_MAGIC_CUT:
            return Object.assign({}, state, {
                shoulder: action.payload.shoulder
            })
        case SHOES_MAGIC_CUT:
            return Object.assign({}, state, {
                shoes: action.payload.shoes
            })
        case ARMLET_MAGIC_CUT:
            return Object.assign({}, state, {
                armlet: action.payload.armlet
            })
        case NECKLACE_MAGIC_CUT:
            return Object.assign({}, state, {
                necklace: action.payload.necklace
            })
        case RING_MAGIC_CUT:
            return Object.assign({}, state, {
                ring: action.payload.ring
            })
        case AUXILIARY_MAGIC_CUT:
            return Object.assign({}, state, {
                auxiliary: action.payload.auxiliary
            })
        case MAGICSTONE_MAGIC_CUT:
            return Object.assign({}, state, {
                magicstone: action.payload.magicstone
            })
        case EARLING_MAGIC_CUT:
            return Object.assign({}, state, {
                earling: action.payload.earling
            })
        case FULL_CRITICAL_CUT:
            return Object.assign({}, state, {
                critical: action.payload.critical
            })
        default:
            return state
    }
}