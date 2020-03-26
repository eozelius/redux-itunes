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

export function fetchRandomItunes() {
  return function (dispatch){
    dispatch(setIsFetching(true))

    // Look up multiple artists by their AMG artist IDs 
    // and get each artist’s top 5 albums: 
    // https://itunes.apple.com/lookup?amgArtistId=468749,5723&entity=album&limit=5
    
    const artists = [
      {
        name: 'Jimi Hendrix',
        id: '62852',
        amgArtistId: '85934'
      },
      {
        name: 'Jon Mayer',
        id: '252548523',
        amgArtistId: '103095'
      },
      {
        name: 'DMA\'S',
        id: '815672978',
        amgArtistId: '2980542'
      },
      {
        name: 'Amy Winehouse',
        id: '13125609',
        amgArtistId: '612371'
      },
      {
        name: 'Jackson Browne',
        id: '388900',
        amgArtistId: '3784'
      },
      {
        name: 'Billy Joel',
        id: '485953',
        amgArtistId: '4615'
      },
      {
        name: 'Regina Spektor',
        id: '20006408',
        amgArtistId: '637024'
      },
      {
        name: 'Queen',
        id: '3296287',
        amgArtistId: '5205'
      },
      {
        name: 'Smashing Pumpkins',
        id: '1646302',
        amgArtistId: '5462'
      }
    ]

    let randomArtistIds = ''

    randomArtistIds = `${artists[Math.floor(Math.random() * 10)].amgArtistId}`;

    return axios.get(`https://itunes.apple.com/lookup?amgArtistId=${randomArtistIds}&entity=album&limit=5`)
      .then((response) => {
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
