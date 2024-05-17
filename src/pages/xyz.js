import * as React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";



const XYZPage = () => {
  return (
    <Layout withSideBar={true}>
      <p> XYZ </p> 
    </Layout>
  );
};

export default XYZPage;

export const Head = () => <SEO title="Anja Ngozi" description="Anja Ngozi is a London based DJ, whose ecletic sets centre around soulful tunes, lo-fi beats and experimental waves."/>;
