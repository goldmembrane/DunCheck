import { WEAPON_MAGIC_CUT, SHIRT_MAGIC_CUT, PANTS_MAGIC_CUT, SHOULDER_MAGIC_CUT, SHOES_MAGIC_CUT, ARMLET_MAGIC_CUT, NECKLACE_MAGIC_CUT, RING_MAGIC_CUT, AUXILIARY_MAGIC_CUT, MAGICSTONE_MAGIC_CUT, EARLING_MAGIC_CUT } from '../action/Type'

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
}

export default function(state = initialState, action) {
    switch(action.type) {
        case WEAPON_MAGIC_CUT:
            return Object.assign({}, state, {
                weapon: action.weapon
            })
        case SHIRT_MAGIC_CUT:
            return Object.assign({}, state, {
                shirt: action.shirt
            })
        case PANTS_MAGIC_CUT:
            return Object.assign({}, state, {
                pants: action.pants
            })
        case SHOULDER_MAGIC_CUT:
            return Object.assign({}, state, {
                shoulder: action.shoulder
            })
        case SHOES_MAGIC_CUT:
            return Object.assign({}, state, {
                shoes: action.shoes
            })
        case ARMLET_MAGIC_CUT:
            return Object.assign({}, state, {
                armlet: action.armlet
            })
        case NECKLACE_MAGIC_CUT:
            return Object.assign({}, state, {
                necklace: action.necklace
            })
        case RING_MAGIC_CUT:
            return Object.assign({}, state, {
                ring: action.ring
            })
        case AUXILIARY_MAGIC_CUT:
            return Object.assign({}, state, {
                auxiliary: action.auxiliary
            })
        case MAGICSTONE_MAGIC_CUT:
            return Object.assign({}, state, {
                magicstone: action.magicstone
            })
        case EARLING_MAGIC_CUT:
            return Object.assign({}, state, {
                earling: action.earling
            })
    }
}