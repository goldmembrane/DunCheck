import { PURE_DAMAGE_CUT, SYNERGY_DAMAGE_CUT } from "./Type"

export const settingPureDamageCut = (pureDamage) => {
    return {
        type: PURE_DAMAGE_CUT,
        payload: pureDamage,
    }
}

export const settingSynergyDamageCut = (synergyDamage) => {
    return {
        type: SYNERGY_DAMAGE_CUT,
        payload: synergyDamage,
    }
}