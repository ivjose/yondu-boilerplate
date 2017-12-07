import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { Menu, Grid } from "semantic-ui-react";
import styled from "styled-components";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const MainWrapper = styled.div`
  height: 100%;
  padding-top: 41px;
  padding-bottom: 55px;
  margin-left: 230px;
  transition: all 0.3s;
  > .ui.menu {
    margin-bottom: 0;
  }
`;

const SidebarWrapper = styled.div`
  position: fixed;
  z-index: 10;
  height: 100%;
  width: 230px;
  background-color: #333;
  margin-left: -230px;
`;

const ContentWrapper = styled.div`
  // margin-left: 210px;
  padding: 0 16px;
`;

function DashboardLayout({
  component: Component,
  layout: Layout,
  handleToggleSidebar,
  isLoggedIn,
  ...rest
}) {

  let toggle = false 
  console.log("TOGGLE!!",this);
  
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn === true ? (
       <div>
       <DashboardHeader toggle={toggle} />
       <MainWrapper>
         
         <SidebarWrapper>
           <DashboardSidebar />
         </SidebarWrapper>
         <ContentWrapper>
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
