import * as React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { graphql, useStaticQuery } from "gatsby";
import { Transform } from "../utils/data";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;  
  display: flex;
  justify-content: center; 
  align-items: center;
`

const StyledImage = styled(GatsbyImage)`
  width: 40%;
`
const XYZPage = () => {
  const item = Transform.homePageImage(
    useStaticQuery(
      graphql`
        {
          contentfulWebsite {
            image {
              gatsbyImageData
            }
          }
        }
      `
    )
  );

  console.log('ITEM', item);
  return (
    <Layout withSideBar={true}>
      <ImageContainer>
        <StyledImage objectFit="contain" image={item.gatsbyImageData} alt="Anja Ngozi" />
      </ImageContainer>
    </Layout>
  );
};

export default XYZPage;

export const Head = () => (
  <SEO
    title="Anja Ngozi"
    description="Anja Ngozi is a London based DJ, whose ecletic sets centre around soulful tunes, lo-fi beats and experimental waves."
  />
);
