import * as React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { useStaticQuery, graphql } from "gatsby";
import { Transform } from "../utils/data";
import ContactForm from "../components/form/contact-form";
import { useWebsiteData } from ".";

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
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => {
  const website = useWebsiteData();

  return (
    <SEO
      title={website.title}
      description={website.description} />
  );
};
