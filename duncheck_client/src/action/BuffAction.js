import { BUFF_SCORE_CUT } from "./Type"

export const settingBuffScoreCut = (buffScore) => {
    return {
        type: BUFF_SCORE_CUT,
        payload: buffScore
    }
}