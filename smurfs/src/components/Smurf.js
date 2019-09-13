import React from "react";

const Smurf = props => {
  return (
    <div>
      <li>{props.feature.name}</li>
      <li>{props.feature.age}</li>
      <li>{props.feature.height}</li>
    </div>
  );
};

export default Smurf;
