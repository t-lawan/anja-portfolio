import * as React from "react";
import Layout from "../components/layout/layout";
import Jumbotron from "../components/jumbotron/jumbotron";
import SEO from "../components/seo/seo";




const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Anja Ngozi" description="Anja Ngozi is a London based DJ, whose ecletic sets centre around soulful tunes, lo-fi beats and experimental waves."/>;
