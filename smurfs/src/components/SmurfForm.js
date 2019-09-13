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
          name="Smurf"
          value={input}
          onChange={handleChanges}
        />
        <button
          onClick={() => props.addFeatureAC(props.feature)}
          className="button"
        >
          Add
        </button>
        {props.feature.name} {props.feature.age} {props.feature.height}
      </form>
    </div>
  );
};

export default connect(
  null,
  { addFeatureAC }
)(SmurfForm);
