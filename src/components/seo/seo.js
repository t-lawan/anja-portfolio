import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Transform } from "../../utils/data";

const SEO = () => {
  const seo = Transform.seo(
    useStaticQuery(
      graphql`
        {
          contentfulWebsite {
            title
            description {
              description
            }
            image {
              url
            }
          }
        }
      `
    )
  );
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:type" content={"website"} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SEO;
