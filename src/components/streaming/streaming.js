import * as React from "react";
import styled from "@emotion/styled";
import { Transform } from "../../utils/data";
import { DropdownText, ExternalLink } from "../../index.styles";
import { graphql, useStaticQuery } from "gatsby";

const StreamingWrapper = styled.div``;

const Streaming = () => {
  const items = Transform.streaming(
    useStaticQuery(graphql`
      {
        contentfulWebsite {
          streaming {
            title {
              title
            }
            url
          }
        }
      }
    `)
  );
  const [open, setOpen] = React.useState(false);
  const toggleOpenState = () => {
    setOpen(!open);
  };

  return (
    <StreamingWrapper>
      <DropdownText onClick={toggleOpenState}> streaming </DropdownText>
      {open ? (
        <>
          {items.map((link, index) => (
            <ExternalLink href={link.url} target="__blank" key={index}>
              {" "}
              {link.title}{" "}
            </ExternalLink>
          ))}
        </>
      ) : null}
    </StreamingWrapper>
  );
};

export default Streaming;
