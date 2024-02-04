import * as React from "react";
import styled from "@emotion/styled";
import { streaming_list } from "../../utils/data";
import { DropdownText, ExternalLink } from "../../index.styles";

const StreamingWrapper = styled.div`

`;

const Streaming = () => {

  const [open, setOpen] = React.useState(false);
  const toggleOpenState = () => {
    setOpen(!open);
  };
  

  return (
    <StreamingWrapper>
        <DropdownText onClick={toggleOpenState}> streaming </DropdownText>
        {open ? (
            <>
                {streaming_list.map((link, index) => (
                    <ExternalLink href={link.url} target="__blank" key={index}> {link.title} </ExternalLink>
                ))}
            </>
        ) : null}
    </StreamingWrapper>
  );
};

export default Streaming;
