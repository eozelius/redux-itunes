import React, { Component } from 'react'
import ItunesItem from './ItunesItem'

class ItunesListings extends Component {
  render(){
    const listings = this.props.listings.map((l, i) => <ItunesItem data={l} key={i} />)

    return (
      <div className='itunes-listings-wrapper'>
        { listings }
      </div>
    )
  }
}


export default ItunesListings
