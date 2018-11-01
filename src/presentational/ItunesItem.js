import React from 'react'

const ItunesItem = props => {

  return (
    <div className='itunes-item'>
      name: {props.data.artistName} <br />
      song: {props.data.trackName}
    </div>
  )
}

export default ItunesItem
