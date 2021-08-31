import { combineReducers } from "redux"
import BuffReducer from "./BuffReducer"
import AvatarReducer from './AvatarReducer'
import CreatureReducer from './CreatureReducer'
import DamageReducer from './DamageReducer'
import TalismanReducer from './TalismanReducer'
import MagicReducer from "./MagicReducer"

const rootReducer = combineReducers({
    BuffReducer,
    AvatarReducer,
    CreatureReducer,
    DamageReducer,
    TalismanReducer,
    MagicReducer,
})

export default rootReducer