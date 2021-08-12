import { SYNERGY_DAMAGE_CUT } from "./Type"

export const settingSynergyDamageCut = (synergyDamage) => {
    return {
        type:  SYNERGY_DAMAGE_CUT,
        payload: synergyDamage
    }
}