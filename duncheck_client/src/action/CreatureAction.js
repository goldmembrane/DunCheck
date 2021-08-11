import { CREATURE_CUT } from "./Type"

export const settingCreatureCut = (creature) => {
    return {
        type: CREATURE_CUT,
        payload: creature,
    }
}