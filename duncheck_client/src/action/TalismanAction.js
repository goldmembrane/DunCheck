import { TALISMAN_CUT } from "./Type"

export const settingTalismanCut = (talisman) => {
    return {
        type: TALISMAN_CUT,
        payload: talisman,
    }
}