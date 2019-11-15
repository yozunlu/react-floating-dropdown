import React, { Component } from 'react'
import styles from './styles.css'
import classnames from 'classnames'

class FloatingDropdown extends Component {
  state = {
    dropdownOpen: false,
    first: true
  }

  openDropdown = () => {
    this.setState({dropdownOpen: true, first: false})
  }
  closeDropdown = () => {
    this.setState({dropdownOpen: false})
  }

  render() {
    let menuClasses = classnames('FloatingDropdownContainerMiniSubmenuListGroup', {
      'Floating-Dropdown-Fade-Out': this.state.first ? false : !this.state.dropdownOpen,
      'Floating-Dropdown-Fade-In': this.state.dropdownOpen
    })
    let btnClasses = classnames('FloatingDropdownContainerMiniSubmenu', {
      'Floating-Dropdown-Fade-Out': this.state.dropdownOpen,
      'Floating-Dropdown-Fade-In': !this.state.dropdownOpen
    })
    return (
      <div className={styles.FloatingDropdownContainer}
        style={this.props.containerStyle}>
        <div className={styles.FloatingDropdownSideBar}>
          <button className={btnClasses}
            style={this.props.toggleStyle}
            onClick={this.openDropdown}>
            <span>{this.props.indexName}</span>
          </button>
          <div className={menuClasses}
            style={this.props.dropdownStyle}>
            <div className={styles.FloatingDropdownSubmenuTopBar}
              style={this.props.dropdownTopBarStyle}>
              {this.props.indexName}
              <span onClick={this.closeDropdown}>
                {this.props.toggleAction ? this.props.toggleAction : 'X'}
              </span>
            </div>
            <div className={styles.FloatingDropdownSubmenuContent}
              style={this.props.dropdownContentStyle}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FloatingDropdown
