import * as React from "react";
import styled from "@emotion/styled";
import { mixes } from "../../utils/data";
import { getMixCloudUrl } from "../../utils/format";

const MixesListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  animation: shadow 10s linear infinite alternate;

  /* justify-content: center; */
  /* align-items: center; */
`;

const MixesListText = styled.h1`
  color: white;
`;

const MixWrapper = styled.div`
    margin: 0.5rem;
`

const MixesList = () => {
  return (
    <MixesListWrapper>
      {mixes.map((mix, index) => (
        <MixWrapper>
          <iframe
            key={index}
            width="100%"
            height="60"
            src={getMixCloudUrl(mix.id)}
            frameborder="0"
          ></iframe>
        </MixWrapper>
      ))}
    </MixesListWrapper>
  );
};

export default MixesList;
