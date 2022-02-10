import type { NextPage } from "next";
import Features from "../components/Features";
import Layout from "../components/Layout";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <Layout>
      <Features />
      <Services />
    </Layout>
  );
};

export default Home;
