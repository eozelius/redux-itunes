import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchItunes,
  setFilter
} from '../actions.js'
import ItunesSearch from '../presentational/ItunesSearch'

class ItunesContainer extends Component {
  handleSearch = searchText => {
    if(searchText === ''){ return }
    this.props.fetchItunes(searchText)
  }

  render(){
    return (
      <div className='itunes-container'>
        <ItunesSearch handleSearch={this.handleSearch} />
      </div>
    )
  }
}

function mapStateToProps(state){
  const { listings, filter } = state.itunesReducer
  return {
    listings: listings,
    filter: filter
  }
}

function mapDispatchToProps(dispatch){
  return {
    setFilter: filter => dispatch(setFilter(filter)),
    fetchItunes: searchText => dispatch(fetchItunes(searchText))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItunesContainer)
