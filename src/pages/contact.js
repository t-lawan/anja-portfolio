import * as React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";


let description = "anja ngozi "

const ContactPage = () => {
  return (
    <Layout withSideBar={true}>
      <p> {description.repeat(40)} </p> 
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <SEO title="Anja Ngozi" description="Anja Ngozi is a London based DJ, whose ecletic sets centre around soulful tunes, lo-fi beats and experimental waves."/>;
