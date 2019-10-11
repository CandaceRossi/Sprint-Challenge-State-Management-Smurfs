import React, { useState, useEffect } from "react";
import { addFeatureAC } from "../store/actions";
import { connect } from "react-redux";
// import { initalState, reducer } from "../store/reducers";

const SmurfForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    props.addFeatureAC();
  }, []);

  const handleChanges = event => {
    setName(event.target.value);
    setAge(event.target.value);
    setHeight(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addFeatureAC(handleChanges);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Smurf Name"
          name="SmurfName"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          id="age"
          type="text"
          placeholder="Smurf Age"
          name="SmurfAge"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input
          id="height"
          type="text"
          placeholder="Smurf Height"
          name="SmurfHeight"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        <button>Add Smurf</button>
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
