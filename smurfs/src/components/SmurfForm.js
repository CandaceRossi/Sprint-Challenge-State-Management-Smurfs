import React, { useState } from "react";
import { addFeatureAC } from "../store/actions";
import { connect } from "react-redux";

const SmurfForm = props => {
  const [input, setInput] = useState("");

  const handleChanges = event => {
    setInput(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.addFeatureAC(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Smurf Name"
          name="SmurfName"
          value={input}
          onChange={handleChanges}
        />
        <input
          type="text"
          placeholder="Smurf Age"
          name="SmurfAge"
          value={input}
          onChange={handleChanges}
        />
        <input
          type="text"
          placeholder="Smurf Height"
          name="SmurfHeight"
          value={input}
          onChange={handleChanges}
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
