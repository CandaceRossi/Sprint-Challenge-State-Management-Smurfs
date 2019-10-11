import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurfs } from "../store/actions";

const Smurfs = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);
  console.log("the smurfs are here", props.smurfs);
  if (props.isFetching) {
    return <h2>Fetching Smurf Stats!</h2>;
  }
  return (
    <div className="Smurfs">
      {props.error} <p>{props.error}</p>
      <h4>New Smurf Added:</h4>
      {props.smurfs.map(feature => {
        return (
          <Smurf
            key={feature.id}
            name={feature.name}
            age={feature.age}
            height={feature.height}
          />
        );
      })}
      <p>Nice looking Smurf!</p>
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
  { getSmurfs }
)(Smurfs);
