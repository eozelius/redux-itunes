import React, { Component } from 'react'

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
      <div className='itunes-search-wrapper'>
        <form className='control-form' onSubmit={this.handleSubmit}>
          <div className='control-group'>
            <label>Search Itunes</label>
            <input type='text' onChange={this.handleChange} />
            <input type='submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default ItunesSearch
