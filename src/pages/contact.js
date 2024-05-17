import * as React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { useStaticQuery, graphql } from "gatsby";
import { Transform } from "../utils/data";

let description = "anja ngozi ";

const ContactPage = () => {
  const item = Transform.contact(
    useStaticQuery(
      graphql`
        {
          contentfulWebsite {
            contact {
              contact
            }
          }
        }
      `
    )
  );

  return (
    <Layout withSideBar={true}>
      <p> {item.contact} </p>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <SEO />;
