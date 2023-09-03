import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled";
import { GlobalStyles } from "../../index.styles";


const MainWrapper = styled.main`

`

const LayoutWrapper = styled.div`
  max-height: 100vh;
`

const Layout = (props) => {

    return (
      <LayoutWrapper>
          <GlobalStyles />
          <MainWrapper> 
              {props.children} 
          </MainWrapper>
      </LayoutWrapper>
    )
  }
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout