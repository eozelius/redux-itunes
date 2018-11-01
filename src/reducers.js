import * as actions from './actions'
import { combineReducers } from 'redux'

const initialState = {
  isFetching: false,
  filter: null,
  listings: []
}

const itunesReducer = function(state = initialState, action){
  switch(action.type){
    default:
      return state
  }
}

export default combineReducers({
  itunesReducer
})
