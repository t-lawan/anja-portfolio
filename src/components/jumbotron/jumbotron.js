import * as React from "react";
import styled from "@emotion/styled";

const JumbotronWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const JumbotronText = styled.h1`
  color: white;
`;

const Jumbotron = () => {
  return (
    <JumbotronWrapper>
      <JumbotronText> COMING SOON </JumbotronText>
    </JumbotronWrapper>
  );
};

export default Jumbotron;
