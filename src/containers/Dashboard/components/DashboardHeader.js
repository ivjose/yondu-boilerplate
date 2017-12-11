import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import PropTypes from "prop-types";

const Header = styled(Menu)`
  border-radius: 0 !important;
  margin-bottom: 0 !important;
`;

const propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default class DashboardHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const { toggle, isOpen, height } = this.props;

    return (
      <Header borderless fixed="top" style={{ height: height }}>
        <a
          href="#"
          role="button"
          className={isOpen ? "menu-button" : "menu-button active"}
          onClick={toggle}
        >
          <span className="bar" />
        </a>
        <Menu.Item>
          <img src="https://dummyimage.com/50x50/000/fff" />
        </Menu.Item>

        <Menu.Item name="companyName">Company Names</Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          onClick={this.handleItemClick}
        >
          Left Botton
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="right"
            active={activeItem === "right"}
            onClick={this.handleItemClick}
          >
            Left Botton
          </Menu.Item>
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item as={Link} to='./login'>
             Login  
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Header>
    );
  }
}
