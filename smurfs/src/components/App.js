import React from "react";
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
      <Smurfs state={state} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: [
      {
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id
      }
    ]
  };
};
export default connect(
  mapStateToProps,
  {}
)(App);
