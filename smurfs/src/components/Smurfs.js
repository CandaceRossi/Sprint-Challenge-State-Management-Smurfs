import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurfs } from "../store/actions";

const Smurfs = props => {
  useEffect(() => {
    props.getSmurfs();
  }, [props.getSmurfs]);
  console.log("the smurfs are here", props.smurfs);
  return (
    <div className="Smurfs">
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
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getSmurfs }
)(Smurfs);
