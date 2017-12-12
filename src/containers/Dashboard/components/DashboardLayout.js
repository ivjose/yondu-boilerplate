import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { Menu, Grid } from "semantic-ui-react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";


import Variable from '../../../constants/Variable';

const MainWrapper = styled.div`
  height: 100%;
  padding-top: ${Variable.headerHeight}px;
  padding-bottom: 55px;
  transition: all 0.3s;
  > .ui.menu {
    margin-bottom: 0;
  }
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: ${Variable.headerHeight}px;
  z-index: 10;
  height: 100%;
  width: ${Variable.sidebarWidth}px;
  background-color: #333;
  margin-left: -${Variable.sidebarWidth}px;
  border-right: 1px solid gray;

`;

const ContentWrapper = styled.div`
  // margin-left: 210px;
  padding: 10px 16px;
`;


const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleToggleSidebar: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  Variable: PropTypes.shape({
    sidebarWidth: PropTypes.number.isRequired,
    headerHeight: PropTypes.number.isRequired
  }),
};


function DashboardLayout({
  component: Component,
  layout: Layout,
  handleToggleSidebar,
  isOpen,
  isLoggedIn,
  ...rest
}) {

  let toggle = false 
  
  
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn === true ? (
       <div>
       {console.log("TOGGLE!!", )}
       <DashboardHeader toggle={handleToggleSidebar} isOpen={isOpen} height={Variable.headerHeight}/>
       <MainWrapper style={{ marginLeft: isOpen ? 0 : Variable.sidebarWidth }}>
         
         <SidebarWrapper >
           <DashboardSidebar />
         </SidebarWrapper>
         <ContentWrapper  >
           <Component {...props} />
         </ContentWrapper>
       </MainWrapper>
       </div>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}

DashboardLayout = connect(
  state => ({
    isLoggedIn: true
    // pull initial values from account reducer
  })
  // {  } // bind account loading action creator
)(DashboardLayout);

export default DashboardLayout;
