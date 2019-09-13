import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { connect } from "react-redux";

const App = ({ state }) => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfForm state={state} />
      <Smurfs store={state.store} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(
  mapStateToProps,
  {}
)(App);
