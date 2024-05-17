import * as React from "react";
import styled from "@emotion/styled";
import { Transform } from "../../utils/data";
import { DropdownText, ExternalLink } from "../../index.styles";
import { graphql, useStaticQuery } from "gatsby";

const FeaturedWorkWrapper = styled.div``;

const FeaturedWork = () => {
  const items = Transform.featuredWork(
    useStaticQuery(graphql`
      {
        contentfulWebsite {
          featuredWork {
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
    <FeaturedWorkWrapper>
      <DropdownText onClick={toggleOpenState}> featured work </DropdownText>
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
    </FeaturedWorkWrapper>
  );
};

export default FeaturedWork;
