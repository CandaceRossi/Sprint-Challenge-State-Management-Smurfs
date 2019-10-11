import React from "react";

const Smurf = props => {
  return (
    <div>
      <li>Smurf Name: {props.name}</li>
      <li>Smurf Age: {props.age}</li>
      <li>Smurf Height: {props.height}</li>
    </div>
  );
};

export default Smurf;
