import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"



const SEO = (props) => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `
      )

      console.log("SITE", site)
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="og:title" content={props.title} />
      <meta name="og:description" content={props.description} />
      <meta name="og:type" content={"website"} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.title} />

    </>
  );
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default SEO;


