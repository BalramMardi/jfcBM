import "./tickets.css";

import React from "react";

const Tickets = () => {
  return (
    <>
      <div className="ticket-container">
        <div className="ticket-header">
          <h1>JFC Tickets</h1>
        </div>
        <div className="ticket-bottom">
          <div className="ticket-tiles">Men`s Football</div>
          <div className="ticket-tiles">Stadium Tour</div>
          <div className="ticket-tiles">Women`s Football</div>
        </div>
      </div>
      <div className="line-match"></div>
    </>
  );
};

export default Tickets;
