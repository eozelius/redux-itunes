import { React, Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchItunes,
  setFilter
} from '../actions.js'

class ItunesContainer extends Component {
  render(){
    // console.log('rendering')
    // console.log(this.props)

    return (
      'itunes container'
    )
  }
}

function mapStateToProps(state){
  const { listings, filter } = state.itunesReducer.state
  return {
    listings: listings,
    filter: filter
  }
}

function mapDispatchToProps(dispatch){
  return {
    setFilter: setFilter,
    fetchItunes: fetchItunes
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItunesContainer)
