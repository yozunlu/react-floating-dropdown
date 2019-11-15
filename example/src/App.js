import React, { Component } from 'react'
import ReactFloatingDropdown from 'react-floating-dropdown'

export default class App extends Component {

  state={
    menu: [
      {
        id: 1,
        title: 'Menu item 1'
      },
      {
        id: 2,
        title: 'Menu item 2'
      },
      {
        id: 3,
        title: 'Menu item 3'
      },
      {
        id: 4,
        title: 'Menu item 4'
      },
      {
        id: 5,
        title: 'Menu item 5'
      },
      {
        id: 6,
        title: 'Menu item 6'
      },
      {
        id: 7,
        title: 'Menu item 7'
      },
      {
        id: 8,
        title: 'Menu item 8'
      },
    ]
  }


  render () {

    return (
      <ReactFloatingDropdown indexName="Floating Dropdown"
                             containerStyle={{bottom: "150px"}}
                             toggleStyle={{width: "150px"}}
                             dropdownStyle={{borderRadius: "10px"}}
                             dropdownTopBarStyle={{backgroundColor: "#232624"}}
                             toggleAction={(<i className="fas fa-times-circle" />)}
                             dropdownContentStyle={{height: "95%"}}
                             >
        <div className="menuItem">
          <p>Menu Item 1</p>
        </div>
        {
          this.state.menu.map(item => (
            <div className="menuItem" key={item.id}>
              <p>{item.title}</p>
            </div>
          ))
        }
      </ReactFloatingDropdown>
    )
  }
}
