import * as React from "react";
import styled from "@emotion/styled";
import { Transform } from "../../utils/data";
import { getMixCloudUrl } from "../../utils/format";
import { graphql, useStaticQuery } from "gatsby";
import { size } from "../../index.styles";
import ReactPlayer from "react-player";

const MixesListWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  animation: shadow 10s linear infinite alternate;
  @media only screen and (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
  /* justify-content: center; */
  /* align-items: center; */
`;

const StyledPlayer = styled(ReactPlayer)`
  width: 100%;
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
            url
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
          <StyledPlayer
            key={index}
            width={"100%"}
            url={mix.url}
            config={{
              mixcloud: {
                options: {
                  hide_cover: false,
                  mini: false,
                  light: false
                },
              },
              soundcloud: {
                options: {
                  show_artwork: true,
                  show_comments: false,
                  show_playcount: true,
                  show_user: true,
                  show_reposts: false,
                  visual: false,
                  color: "#ff5500",
                },
              },
              youtube: {
                playerVars: {
                  showinfo: 1,
                  color: "white",
                  theme: "light",
                },
              },
            }}
          />
        </MixWrapper>
      ))}
    </MixesListWrapper>
  );
};

export default MixesList;
