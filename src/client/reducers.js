import { SET_LISTINGS,
         SET_FILTER,
         SET_IS_FETCHING,
         // setListings,
         // setFilter,
         // setIsFetching
       } from './actions'
import { combineReducers } from 'redux'

const initialState = {
  isFetching: false,
  filter: undefined,
  listings: []
}

const itunesReducer = function(state = initialState, action){
  switch(action.type){
    case SET_IS_FETCHING:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      })
    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      })
    case SET_LISTINGS:
      return Object.assign({}, state, {
        listings: action.listings
      })
    default:
      return state
  }
}

export default combineReducers({
  itunesReducer
})
