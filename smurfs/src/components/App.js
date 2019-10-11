import React from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { connect } from "react-redux";

const App = ({ state }) => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm state={state} />
      <Smurfs state={state} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
    isFetching: state.isFetching,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {}
)(App);
