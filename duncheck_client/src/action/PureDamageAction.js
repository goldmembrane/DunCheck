import { PURE_DAMAGE_CUT } from "./Type"

export const settingPureDamageCut = (pureDamage) => {
    return {
        type: PURE_DAMAGE_CUT,
        payload: pureDamage,
    }
}