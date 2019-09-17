import React, { useState } from "react";
import { addFeatureAC } from "../store/actions";
import { connect } from "react-redux";

const SmurfForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const handleChanges = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // props.addFeatureAC();
    // setInput("");
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
        <button onClick={() => props.addFeatureAC(handleSubmit)}>
          Add Smurf
        </button>
        {props.name} {props.age} {props.height}
      </form>
    </div>
  );
};

export default connect(
  null,
  { addFeatureAC }
)(SmurfForm);
