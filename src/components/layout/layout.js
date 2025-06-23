import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { GlobalStyles, size } from "../../index.styles";
import SideNavbar from "../side-navbar/side-navbar";
import Header from "../header/header";
import Marquee from "../marquee/marquee";

const MainWrapper = styled.main`
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 4rem); /* Adjusting for header height */
  @media only screen and (max-width: ${size.tablet}) {
    padding: 0.5rem;
  } 
`;

const LayoutWrapper = styled.div`
  max-height: 100vh;
`;

const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  @media only screen and (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  } 
`;

const Layout = (props) => {
  const mainSection = <MainWrapper>{props.children}</MainWrapper>;

  return (
    <LayoutWrapper>
      <GlobalStyles />
      {props.withSideBar ? (
        <TwoColumnWrapper>
          <SideNavbar />
          {mainSection}
        </TwoColumnWrapper>
      ) : (
        mainSection
      )}
      {/* <Marquee /> */}
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  withSideBar: PropTypes.bool.isRequired,
};

export default Layout;
