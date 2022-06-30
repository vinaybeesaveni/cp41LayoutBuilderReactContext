import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="body">
              {showLeftNavbar && (
                <div className="left-navbar">
                  <h1 className="left-navbar-heading">Left Navbar Menu</h1>
                  <ul className="items-container">
                    <li className="item">Item 1</li>
                    <li className="item">Item 2</li>
                    <li className="item">Item 3</li>
                    <li className="item">Item 4</li>
                  </ul>
                </div>
              )}
              {showContent && (
                <div className="content-container">
                  <h1 className="content-heading">Content</h1>
                  <p className="content-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              )}
              {showRightNavbar && (
                <div className="right-navbar">
                  <h1 className="right-navbar-heading">Right Navbar</h1>
                  <div className="boxes-container">
                    <div className="box">
                      <p>Ad 1</p>
                    </div>
                    <div className="box">
                      <p>Ad 2</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
