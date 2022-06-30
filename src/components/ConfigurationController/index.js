import {Component} from 'react'
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
            showContent,
            showLeftNavbar,
            showRightNavbar,
          } = value

          const onClickContent = () => {
            onToggleShowContent()
          }

          const onClickLeft = () => {
            onToggleShowLeftNavbar()
          }

          const onClickRight = () => {
            onToggleShowRightNavbar()
          }
          return (
            <div className="layout-container">
              <h1 className="layout-heading">Layout</h1>
              <ul className="list-container">
                <li className="list-item">
                  <input
                    type="checkbox"
                    id="content"
                    className="input"
                    checked={showContent}
                    onChange={onClickContent}
                  />
                  <label htmlFor="content" className="label">
                    Content
                  </label>
                </li>
                <li className="list-item">
                  <input
                    type="checkbox"
                    id="left"
                    className="input"
                    checked={showLeftNavbar}
                    onChange={onClickLeft}
                  />
                  <label htmlFor="left" className="label">
                    Left Navbar
                  </label>
                </li>
                <li className="list-item">
                  <input
                    type="checkbox"
                    id="right"
                    className="input"
                    checked={showRightNavbar}
                    onChange={onClickRight}
                  />
                  <label htmlFor="right" className="label">
                    Right Navbar
                  </label>
                </li>
              </ul>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
