import React from 'react'
import PropTypes from 'prop-types'
import ItuneItemStyle from '../styles/ItunesItem.module.css'

const ItunesItem = props => {
  const image = props.data.artworkUrl100 
    ? <img src={props.data.artworkUrl100} alt='album artwork' />
    : <p>album artwork not available</p>
  
  return (
    <div className={`${ItuneItemStyle.itunesItem}`} >
      <h2>{props.data.artistName}</h2>
      <label>{props.data.collectionName}</label> <br/>
      { image }
      <p>{props.data.trackName}</p>
    </div>
  )
}

ItunesItem.propTypes = {
  data: PropTypes.object
}

ItunesItem.defaultProps = {
  data: {
    type: '',
    artistName: '',
    trackName: ''
  }
}

export default ItunesItem
