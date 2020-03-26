import ItunesSearch from '../presentational/ItunesSearch'
import React from 'react'

describe(ItunesSearch, () => {
  test('it renders properly', () => {
    const search = shallow(<ItunesSearch />)
    expect(search).toMatchSnapshot()
  })

  test('it maintains invokes a callback when the input changes', () => {
    const search = shallow(<ItunesSearch />)
    search.find('input[type="text"]').simulate('change', {
        preventDefault: () => {},
        target: {
          value: 'asdf'
        }
      }
    )
    expect(search.state('search')).toEqual('asdf')
  })

  test('it invokes props.handleSearch when the form submits', () => {
    const mockFn = jest.fn()
    const search = shallow(<ItunesSearch handleSearch={mockFn} />)
    search.find('form').simulate('submit', {preventDefault: () => {}})
    expect(mockFn).toHaveBeenCalledWith('')
  })
})
