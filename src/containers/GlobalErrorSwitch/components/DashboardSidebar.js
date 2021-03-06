import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import FaEye from "react-icons/lib/fa/eye";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FaAngleDown from "react-icons/lib/fa/angle-down";

import FaAngleUp from "react-icons/lib/fa/angle-up";





export default class DashboardSidebar extends Component {
  state = { activeIndex: null };

 

  handleToggleDropdown = (index, route) => {
    console.log(index);
    if (this.state.activeIndex === index) {
      this.setState({ activeIndex: null });
    } else {
      this.setState({ activeIndex: index });
    }
    
  };

  render() {
    const { activeIndex } = this.state;

    let routes = [
      {
        name: "dashboard",
        path: '/dashboard',
        access: true,
      },{
        name: "User Management",
        path: '/user-management',
        access: true,
        subPath: [
          {
            name: "Create",
            path: 'create',
            access: true,
          },
          {
            name: "Update",
            path: 'update',
            access: true,
          },
          {
            name: "View",
            path: 'view',
            access: true,
          }
        ]
      },{
        name: "User Profile",
        path: '/user-profile',
        access: true,
        subPath: [
          {
            name: "User Profile update",
            path: 'update',
            access: true,
          },
          {
            name: "User Change password",
            path: 'change-password',
            access: true,
          },
          
        ]
      },
    ]

    return (
      <Scrollbars
      style={{ height: "100%" }}
   
      renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: "#fd6a62" }} />
      }
  >
      <div className="c-sidenav">
        <ul className="c-sidenav__list">

        {
          routes && routes.length > 0 && routes.map((item, index) => {
             
            if (item.access === true) {
              if (item.subPath) {
                return <li className="c-sidenav__item" key={index}>
                    <a className="c-sidenav__link" href="#" role="button"  onClick={() => this.handleToggleDropdown(index)}>
                      <span style={{ paddingRight: 5 }}>
                        <FaEye />
                      </span>
                      {item.name}

                      {item.subPath && item.subPath.length && <span style={{ float: "right" }}>
                      {this.state.activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                            
                          </span>}
                    </a>
                    {item.subPath && item.subPath.length > 0 && <ul className="c-sidenav__list c-sidenav__list--sub" style={{display: this.state.activeIndex === index ? 'block' : 'none'}}>
                          {item.subPath.map(
                            (itemSub, indexSub) => {
                              if (itemSub.access === true) {
                                return (
                                  <li
                                    className="c-sidenav__item"
                                    key={indexSub}
                                  >
                                    <Link
                                      className="c-sidenav__link"
                                      to={`${item.path}/${itemSub.path}`}
                                    >
                                      {itemSub.name}
                                    </Link>
                                  </li>
                                );
                              } else {
                                return null;
                              }
                            }
                          )}
                        </ul>}
                  </li>;
              } else {
                return <li className="c-sidenav__item" key={index}>
                <Link className="c-sidenav__link" to={item.path}>
                  <span style={{ paddingRight: 5 }}>
                    <FaEye />
                  </span>
                  {item.name}

                </Link>
                </li>
              }
              
            } else {
              return null
            }
          })
        }
        </ul>
      </div>
      </Scrollbars>
    );
  }
}
