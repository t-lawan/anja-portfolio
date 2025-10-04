import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Transform } from "../utils/data";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { size } from "../index.styles";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;  
  display: flex;
  justify-content: center; 
  align-items: center;
`

const StyledImage = styled(GatsbyImage)`
  width: 40%;
    @media only screen and (max-width: ${size.tablet}) {
      width: 60%;
    }
`

const StyledLink = styled(Link)`
  width: 100%;
    display: flex;
  justify-content: center; 
  align-items: center;
`

// Extract the query into a reusable hook
export const useWebsiteData = () => {
  return Transform.homePageWebsite(
    useStaticQuery(
      graphql`
        {
          contentfulWebsite {
          title
          description {
            description
          }
          contact {
            contact
          }
          image {
            gatsbyImageData
          }
          imageLink
            image {
              gatsbyImageData
            }
          }
        }
      `
    )
  );
};


const IndexPage = () => {
  const website = useWebsiteData();

  const IMAGE = <StyledImage objectFit="contain" image={website.image.gatsbyImageData} alt="Anja Ngozi" />

  return (
    <Layout withSideBar={true}>
      <ImageContainer>
        {website.imageLink ? (
          <StyledLink target="__blank" to={website.imageLink}> {IMAGE}</StyledLink>) : (<>{IMAGE}</>)}
      </ImageContainer>
    </Layout>
  );
};

export default IndexPage;


export const Head = () => {
  const website = useWebsiteData();

  return (
    <SEO
      title={website.title}
      description={website.description} />
  );
};
