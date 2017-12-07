import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const Header = styled(Menu)`
  border-radius: 0 !important;
  margin-bottom: 0!important;
`;

export default class DashboardHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Header borderless fixed="top">
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="right"
            active={activeItem === "right"}
            onClick={this.handleItemClick}
          >
            Right
          </Menu.Item>
        </Menu.Menu>
      </Header>
    );
  }
}
