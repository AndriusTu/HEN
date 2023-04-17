import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

const reducers = {
}

const rootReducer = combineReducers(reducers)

export type ApplicationState = StateType<typeof reducers>

export default rootReducer
