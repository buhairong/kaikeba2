import {createStore, combineReducers} from 'redux'
import data from './reducer'

export default createStore(combineReducers({data}))