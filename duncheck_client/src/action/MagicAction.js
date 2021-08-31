import { WEAPON_MAGIC_CUT, SHIRT_MAGIC_CUT, PANTS_MAGIC_CUT, SHOULDER_MAGIC_CUT, SHOES_MAGIC_CUT, ARMLET_MAGIC_CUT, NECKLACE_MAGIC_CUT, RING_MAGIC_CUT, AUXILIARY_MAGIC_CUT, MAGICSTONE_MAGIC_CUT, EARLING_MAGIC_CUT, FULL_CRITICAL_CUT, STYLE_CUT } from "./Type"

export const settingStyleCut = (style) => {
    return {
        type: STYLE_CUT,
        payload: style
    }
}

export const settingWeaponCut = (weapon) => {
    return {
        type: WEAPON_MAGIC_CUT,
        payload: weapon
    }
}

export const settingShirtCut = (shirt) => {
    return {
        type: SHIRT_MAGIC_CUT,
        payload: shirt
    }
}

export const settingPantsCut = (pants) => {
    return {
        type: PANTS_MAGIC_CUT,
        payload: pants
    }
}

export const settingShoulderCut = (shoulder) => {
    return {
        type: SHOULDER_MAGIC_CUT,
        payload: shoulder
    }
}

export const settingShoesCut = (shoes) => {
    return {
        type: SHOES_MAGIC_CUT,
        payload: shoes
    }
}

export const settingArmletCut = (armlet) => {
    return {
        type: ARMLET_MAGIC_CUT,
        payload: armlet
    }
}

export const settingNecklaceCut = (necklace) => {
    return {
        type: NECKLACE_MAGIC_CUT,
        payload: necklace
    }
}

export const settingRingCut = (ring) => {
    return {
        type: RING_MAGIC_CUT,
        payload: ring
    }
}

export const settingAuxiliaryCut = (auxiliary) => {
    return {
        type: AUXILIARY_MAGIC_CUT,
        payload: auxiliary
    }
}

export const settingMagicstoneCut = (magicstone) => {
    return {
        type: MAGICSTONE_MAGIC_CUT,
        payload: magicstone
    }
}

export const settingEarlingCut = (earling) => {
    return {
        type: EARLING_MAGIC_CUT,
        payload: earling
    }
}

export const settingFullCriticalCut = (critical) => {
    return {
        type: FULL_CRITICAL_CUT,
        payload: critical
    }
}