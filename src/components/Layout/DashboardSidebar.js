import React, { Component } from "react";

import FaEye from "react-icons/lib/fa/eye";

export default class DashboardSidebar extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="c-sidenav">
        <ul className="c-sidenav__list">
          <li className="c-sidenav__item">
            <a className="c-sidenav__link" href="#">
              test
            </a>
          </li>

          <li className="c-sidenav__item c-sidenav__item--sub">
            <a className="c-sidenav__link" href="#">
              test
            </a>
            <ul className="c-sidenav__list">
              <li className="c-sidenav__item">
                <a className="c-sidenav__link" href="#">
                  test
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
