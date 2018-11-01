import * as actions from './actions'
import combineReducers from 'redux'

const initialState = {
  isFetching: false,
  filter: null,
  listings: []
}

const itunesReducer = function(state = initialState, action){
  switch(action.type){
    case LOL:
      return {
        isFetching: false,
        filter: null,
        listings: []
      }
    default:
      return state
  }
}
