import { DAMAGE_CUT } from "./Type"

export const settingDamageCut = (damage) => {
    return {
        type: DAMAGE_CUT,
        payload: damage,
    }
}