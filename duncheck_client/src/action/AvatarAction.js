import { AVATAR_CUT } from "./Type"

export const settingAvatarCut = (avatar) => {
    return {
        type: AVATAR_CUT,
        payload: avatar,
    }
}