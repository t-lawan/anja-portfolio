import * as React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import MixesList from "../components/mixes-list/mixes-list";




const MixesPage = () => {
  return (
    <Layout withSideBar={true}>
      <MixesList />
    </Layout>
  );
};

export default MixesPage;

export const Head = () => <SEO title="Anja Ngozi" description="Anja Ngozi is a London based DJ, whose ecletic sets centre around soulful tunes, lo-fi beats and experimental waves."/>;
