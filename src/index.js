import React, { Component } from 'react'
import styles from './styles.css'

class FloatingDropdown extends Component {

  constructor(props) {
    super(props);
    this.openBtn = React.createRef();
    this.menu = React.createRef();
  }

  openDropdown = () => {
    this.openBtn.current.classList.remove("Floating-Dropdown-Fade-In");
    this.menu.current.classList.remove("Floating-Dropdown-Fade-Out");
    this.menu.current.classList.add("Floating-Dropdown-Fade-In");
    this.openBtn.current.classList.add("Floating-Dropdown-Fade-Out");

  };

  closeDropdown = () => {
    this.menu.current.classList.remove("Floating-Dropdown-Fade-In");
    this.openBtn.current.classList.remove("Floating-Dropdown-Fade-Out");
    this.menu.current.classList.add("Floating-Dropdown-Fade-Out");
    this.openBtn.current.classList.add("Floating-Dropdown-Fade-In");
  };

  render() {
    return (
      <div className={styles.FloatingDropdownContainer}
           style={this.props.containerStyle}>
        <div className={styles.FloatingDropdownSideBar}>
          <button className={styles.FloatingDropdownContainerMiniSubmenu}
                  style={this.props.toggleStyle}
                  ref={this.openBtn}
                  onClick={this.openDropdown}>
            <span>{this.props.indexName}</span>
          </button>
          <div className={styles.FloatingDropdownContainerMiniSubmenuListGroup}
               style={this.props.dropdownStyle}
               ref={this.menu}>
            <div className={styles.FloatingDropdownSubmenuTopBar}
                 style={this.props.dropdownTopBar}>
              {this.props.indexName}
              <span onClick={this.closeDropdown}>
                                {this.props.toggleAction ? this.props.toggleAction : "X"}
                            </span>
            </div>
            <div className={styles.FloatingDropdownSubmenuContent}
                 style={this.props.dropdownContent}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default FloatingDropdown;
