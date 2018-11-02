import React, { Component } from 'react'
import ItunesItem from './ItunesItem'
import style from '../styles/ItunesListings.module.sass'

class ItunesListings extends Component {
  render(){
    const renderedListings = this.props.listings.length === 0 ?
      <label className='loading'>Search for an artist or song...</label>
      : this.props.listings.map((l, i) => <ItunesItem data={l} key={i} />)

    return (
      <div className={style.wrapper}>
        { renderedListings }
      </div>
    )
  }
}

ItunesListings.defaultProps = {
  listings: []
}

export default ItunesListings
