import { combineReducers } from "redux"
import BuffReducer from "./BuffReducer"
import AvatarReducer from './AvatarReducer'
import CreatureReducer from './CreatureReducer'
import DamageReducer from './DamageReducer'
import TalismanReducer from './TalismanReducer'

const rootReducer = combineReducers({
    BuffReducer,
    AvatarReducer,
    CreatureReducer,
    DamageReducer,
    TalismanReducer,
})

export default rootReducer