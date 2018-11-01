import React, { Component } from 'react'
import style from '../styles/ItunesSearch.module.sass'

class ItunesSearch extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    if(e.target.value === ''){ return }

    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearch(this.state.search)
  }

  render(){
    return(
      <div className={style.itunesSearch} >
        <form className='control-form' onSubmit={this.handleSubmit}>
          <div className='control-group'>
            <label>Search Itunes</label>
            <input type='text' onChange={this.handleChange} autoFocus />
            <input type='submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default ItunesSearch
