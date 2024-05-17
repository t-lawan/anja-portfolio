import * as React from "react";
import styled from "@emotion/styled";
import { Transform } from "../../utils/data";
import { getMixCloudUrl } from "../../utils/format";
import { graphql, useStaticQuery } from "gatsby";
import { size } from "../../index.styles";

const MixesListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  animation: shadow 10s linear infinite alternate;
  @media only screen and (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
  /* justify-content: center; */
  /* align-items: center; */
`;

const MixesListText = styled.h1`
  color: white;
`;

const MixWrapper = styled.div`
  margin: 0.5rem;
`;

const MixesList = () => {
  const mixes = Transform.mixes(
    useStaticQuery(graphql`
      {
        contentfulWebsite {
          mixes {
            mixcloudId
            title
          }
        }
      }
    `)
  );

  return (
    <MixesListWrapper>
      {mixes.map((mix, index) => (
        <MixWrapper key={index}>
          <iframe
            key={index}
            width="100%"
            height="60"
            src={getMixCloudUrl(mix.mixcloudId)}
            frameBorder="0"
          ></iframe>
        </MixWrapper>
      ))}
    </MixesListWrapper>
  );
};

export default MixesList;
