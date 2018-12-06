import React, { Component } from "react";

const Stateless = props => {
  console.log(props.paramdata.id);

  return <h1>Welcome {props.paramdata.id}</h1>;
};

export default Stateless;
