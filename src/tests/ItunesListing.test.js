import ItunesListing from '../presentational/ItunesListings'
import ItunesItem from '../presentational/ItunesItem'
import React from 'react'

describe(ItunesListing, () => {
  test('it renders properly', () => {
    const listing = shallow(<ItunesListing />)
    expect(listing).toMatchSnapshot()
  })

  test('it presents a "please search..." <label> if no listings are passed', () => {
    const listing = shallow(<ItunesListing />)
    expect(listing.find('.loading').length).toEqual(1)
  })

  test('it renders a list of Itunes Items', () => {
    const mockListings = [{}, {}, {}]
    const listing = mount(<ItunesListing listings={mockListings} />)
    expect(listing.find(ItunesItem).length).toEqual(3)
  })
})
