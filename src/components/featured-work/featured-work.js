import * as React from "react";
import styled from "@emotion/styled";
import { featured_work_list } from "../../utils/data";
import { DropdownText, ExternalLink } from "../../index.styles";

const FeaturedWorkWrapper = styled.div`

`;

const FeaturedWork = () => {

  const [open, setOpen] = React.useState(false);
  const toggleOpenState = () => {
    setOpen(!open);
  };
  

  return (
    <FeaturedWorkWrapper>
        <DropdownText onClick={toggleOpenState}> featured work </DropdownText>
        {open ? (
            <>
                {featured_work_list.map((link, index) => (
                    <ExternalLink href={link.url} target="__blank" key={index}> {link.title} </ExternalLink>
                ))}
            </>
        ) : null}
    </FeaturedWorkWrapper>
  );
};

export default FeaturedWork;
