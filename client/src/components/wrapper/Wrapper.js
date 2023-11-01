import React from "react";
import Threetile from "../../pages/Threetile/Threetile";
import "./wrapper.css";
import Strips from "../../pages/strips/Strips";

import Info from "../../buckets/info/Info";
import Tele from "../../buckets/tv/Tele";
import Miner from "../../buckets/miners/Miner";
import Part from "../../buckets/part/Part";
import Players from "../../buckets/players/Players";
import Banner from "../../buckets/banner/Banner";
import Trophy from "../../buckets/trophy/Trophy";
import Layout from "../../layout/Layout";

const Wrapper = () => {
  return (
    <Layout>
      <Threetile />
      <Strips />
      <Info />
      <Tele />
      <Miner />
      <Part />
      <Players />
      <Trophy />
      <Banner />
    </Layout>
  );
};

export default Wrapper;
