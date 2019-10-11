import React, { useState } from "react";
import { addFeatureAC } from "../store/actions";
import { connect } from "react-redux";

const SmurfForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  // const addSmurf = item => dispatch({ type: ADD_FEATURE, payload: item });

  const handleChanges = event => {
    setName(event.target.value);
    setAge(event.target.value);
    setHeight(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // props.addFeatureAC(handleChanges);
    setName("");
    setAge("");
    setHeight("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Smurf Name"
          name="SmurfName"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Smurf Age"
          name="SmurfAge"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Smurf Height"
          name="SmurfHeight"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        <button onClick={() => props.addFeatureAC(handleChanges)}>
          Add Smurf
        </button>
        {props.name} {props.age} {props.height}
      </form>
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
  { addFeatureAC }
)(SmurfForm);
