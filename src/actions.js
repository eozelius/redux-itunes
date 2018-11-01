import axios from 'axios'

// Action Types
export const SET_LISTINGS = 'SET_LISTINGS'
export const SET_FILTER = 'SET_FILTER'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'

// Action creators
export function setListings(listings){
  return {
    type: SET_LISTINGS,
    listings: listings
  }
}

export function setFilter(filter){
  return {
    type: SET_FILTER,
    filter: filter
  }
}

export function setIsFetching(isFetching){
  return {
    type: SET_IS_FETCHING,
    isFetching: isFetching
  }
}

// Async action creators
export function fetchItunes(search){
  return function(dispatch){
    dispatch(setIsFetching(true))

    return axios.get(`https://itunes.apple.com/search?term=${search}`)
      .then((response) => {
        console.log(response)

        dispatch(setIsFetching(false))
        dispatch(setFilter())
        dispatch(setListings(response.data.results))
      })
      .catch((error) => {
        console.log("Error, fetching Itunes API failed error: " + error)
        dispatch(setIsFetching(false))
      })
  }
}
