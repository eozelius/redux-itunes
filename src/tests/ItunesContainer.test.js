import React from 'react'
import { ItunesContainer } from '../containers/ItunesContainer'

describe(ItunesContainer, () => {
  test('it renders properly', () => {
    const container = shallow(<ItunesContainer />)
    expect(container).toMatchSnapshot()
  })

  test('it invokes the fetchItunes method via props', () => {
    const mockFn = jest.fn()
    const container = mount(<ItunesContainer fetchItunes={mockFn} />)
    const search = container.find('form')
    search.find('form').simulate('submit', {preventDefault: () => {}})
    expect(mockFn).toHaveBeenCalled()
  })

})
