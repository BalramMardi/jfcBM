import "./homeStore.css";

import React from "react";

const HomeStore = () => {
  return (
    <>
      <div className="homestore-container">
        <div className="homestore-header">
          <h1>JFC Store</h1>
        </div>
        <div className="homestore-bottom">
          <div className="homestore-tiles">Men`s Football</div>
          <div className="homestore-tiles">Stadium Tour</div>
          <div className="homestore-tiles">Women`s Football</div>
        </div>
      </div>
    </>
  );
};

export default HomeStore;
