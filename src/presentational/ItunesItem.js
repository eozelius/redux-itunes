import React from 'react'
import PropTypes from 'prop-types'
import ItuneItemStyle from '../styles/ItunesItem.module.sass'

const ItunesItem = props => {

  return (
    <div className={`${ItuneItemStyle.itunesItem}`} >
      <h2>{props.data.artistName}</h2>
      <label>{props.data.collectionName}</label> <br/>
      <img src={props.data.artworkUrl100} alt='album artwork' />
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
