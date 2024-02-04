import * as React from "react";
import styled from "@emotion/styled";

const HeaderWrapper = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const HeaderText = styled.h2`
  color: white;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText> ANJA NGOZI </HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
