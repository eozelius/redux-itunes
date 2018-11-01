import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchItunes,
  setFilter
} from '../actions.js'
import ItunesSearch from '../presentational/ItunesSearch'
import ItunesListings from '../presentational/ItunesListings'
import PropTypes from 'prop-types'
import style from '../styles/ItunesContainer.module.sass'

class ItunesContainer extends Component {
  handleSearch = searchText => {
    if(searchText === ''){ return }
    this.props.fetchItunes(searchText)
  }

  render(){
    return (
      <div className={style.itunesContainer} >
        <ItunesSearch handleSearch={this.handleSearch} />
        <ItunesListings listings={this.props.listings} />
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

ItunesContainer.propTypes = {
  listings: PropTypes.array,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  fetchItunes: PropTypes.func,
}

ItunesContainer.defaultProps = {
  listings: [],
  filter: undefined
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItunesContainer)
