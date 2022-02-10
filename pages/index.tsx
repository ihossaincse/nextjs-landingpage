import type { NextPage } from "next";
import Features from "../components/Features";
import FeaturesQuality from "../components/FeaturesQuality";
import FeaturesWorks from "../components/FeaturesWorks";
import Layout from "../components/Layout";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <Layout>
      <Features />
      <Services />
      <FeaturesQuality />
      <FeaturesWorks />
    </Layout>
  );
};

export default Home;
