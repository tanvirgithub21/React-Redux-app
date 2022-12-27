import React from "react";
import ContentCard from "../../share_component/ContentCard/ContentCard";

const Home = () => {
  const mapFunction = [1, 2, 2, 2, 2, 2, 2, 22, 2, 2, 2, 2];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
      {mapFunction.map((e, index) => (
        <ContentCard key={index} />
      ))}
    </div>
  );
};

export default Home;
