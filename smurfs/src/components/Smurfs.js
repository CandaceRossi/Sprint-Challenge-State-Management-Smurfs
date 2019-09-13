import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS
} from "../store/actions";

const Smurfs = props => {
  return (
    <div className="Smurfs">
      <h4>New Smurf Added:</h4>
      <Smurf key={props.id} feature={props} />
      <p>Nice looking Smurf!</p>
    </div>
  );
};

export default connect(
  null,
  { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS }
)(Smurfs);
