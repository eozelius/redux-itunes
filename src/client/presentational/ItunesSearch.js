import React, { Component } from 'react'
import style from '../styles/ItunesSearch.module.css'
import indexStyle from '../styles/index.module.css'

class ItunesSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearch(this.state.search)
  }

  render() {
    return (
      <div className="itunesSearch" >
        <form className='control-form' onSubmit={this.handleSubmit}>
          <div className='control-group'>
            <label>Search Itunes</label>
            <input type='text' onChange={this.handleChange} autoFocus />
            <input className="btn" type='submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default ItunesSearch;
