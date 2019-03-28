import React from 'react';
import { Jumbotron } from "react-bootstrap";
import  MainButton  from "./Button";


const HeadJumbotron = () => {
  return (
    <React.Fragment>
      <Jumbotron className="fluid">
        <container className="header">
          <div align="center">
            <h1>Cryptocurrency Exchanges</h1>
            <MainButton />
          </div>
        </container>
      </Jumbotron>
    </React.Fragment>
  );
};

export default HeadJumbotron;