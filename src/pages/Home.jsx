import React from "react";
import InfoItem from "../components/infoItem/InfoItem";
import SearchNav from "../components/searchNav/SearchNav";
import Templates from "../components/templates/Templates";

const Home = () => {
  return (
    <main>
      <SearchNav />
      <InfoItem />
      <Templates />
    </main>
  );
};

export default Home;
