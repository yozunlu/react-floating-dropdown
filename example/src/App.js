import React, { Component } from 'react'

import ReactFloatingDropdown from 'react-floating-dropdown'

export default class App extends Component {
  render () {
    return (
      <ReactFloatingDropdown indexName="Floating Dropdown"
                             toggleStyle={{width: '150px'}}>
        <div>Menu Item 1</div>
        <div>Menu Item 1</div>
      </ReactFloatingDropdown>
    )
  }
}
