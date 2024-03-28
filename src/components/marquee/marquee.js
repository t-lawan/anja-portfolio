import * as React from "react";
import styled from "@emotion/styled";
import { marquee_data } from "../../utils/data";

const MarqueeWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  padding: 1rem;
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
  color: #ffffed;
  display: inline-block;
  animation: ${(props) =>
    props.showAnim ? "long-shadow 2s ease-in-out" : "none"};

  :hover {
    /* animation-play-state: paused; */
    /* backdrop-filter: blur(100px); */
  }
`;

const Marquee = () => {
  const [hasClicked, setHasClicked] = React.useState(false);

  const onClick = () => {
    navigator.clipboard.writeText("info.anja.ngozi@gmail.com");
    setHasClicked(true);
    setTimeout(() => {
      setHasClicked(false);
    }, 3000)
  };
  return (
    <>
      {marquee_data.show ? (
        <MarqueeWrapper>
          <MarqueeText onClick={onClick} showAnim={hasClicked}>
            {marquee_data.text}
          </MarqueeText>
        </MarqueeWrapper>
      ) : null}
    </>
  );
};

export default Marquee;
