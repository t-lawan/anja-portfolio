import * as React from "react";
import styled from "@emotion/styled";
import { marquee_data, streaming_list } from "../../utils/data";
import { DropdownText, ExternalLink } from "../../index.styles";

const MarqueeWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;

const MarqueeText = styled.span`
  @keyframes marquee {
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  color: #FFFFED;
  display: inline-block;
  animation: marquee 20s linear infinite;

  :hover {
    animation-play-state: paused;
  /* backdrop-filter: blur(100px); */
  }
`;


const Marquee = () => {
    const onClick = () => {
        navigator.clipboard.writeText("anja@email.com")
    }
  return (
    <>
      {marquee_data.show ? (
        <MarqueeWrapper onClick={onClick}>
          <MarqueeText>{marquee_data.text}</MarqueeText>
        </MarqueeWrapper>
      ) : null}
    </>
  );
};

export default Marquee;
