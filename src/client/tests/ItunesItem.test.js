import ItunesItem from '../presentational/ItunesItem'
import React from 'react'

describe(ItunesItem, () => {
  test('renders properly', () => {
    const item = shallow(<ItunesItem />)
    expect(item).toMatchSnapshot()
  })

  test('it receives listing via props', () => {
    const mockListing = {
      artistName: 'asdf',
      collectionName: 'collection',
      artworkUrl100: 'image',
      trackName: 'trackName'
    }
    const item = mount(<ItunesItem data={mockListing} />)
    expect(item.prop('data')).toEqual(mockListing)
    expect(item).toMatchSnapshot()
  })

  test('it defaults to a blank listing "type", "artistName", and "trackName"', () => {
    const expectedProps = {
      data: {
        type: '',
        artistName: '',
        trackName: ''
      }
    }

    const item = mount(<ItunesItem data={undefined} />)
    expect(item.props('data')).toEqual(expectedProps)
  })
})
