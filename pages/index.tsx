import type { NextPage } from "next";
import Features from "../components/Features";
import FeaturesQuality from "../components/FeaturesQuality";
import Layout from "../components/Layout";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <Layout>
      <Features />
      <Services />
      <FeaturesQuality />
    </Layout>
  );
};

export default Home;
