import React from "react";
import InfoItem from "../components/infoItem/InfoItem";
import SearchNav from "../components/searchNav/SearchNav";
import Templates from "../components/templates/Templates";

const Home = () => {
  return (
    <div>
      <SearchNav />
      <InfoItem />
      <Templates />
    </div>
  );
};

export default Home;
