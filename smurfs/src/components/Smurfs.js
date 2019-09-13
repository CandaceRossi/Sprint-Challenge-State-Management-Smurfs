import React from "react";
import Smurf from "./Smurf";

const Smurfs = props => {
  return (
    <div className="Smurfs">
      <h4>New Smurf Added:</h4>
      {props.store.map(item => (
        <Smurf key={item.id} feature={item} />
      ))}
      <p>Nice looking Smurf!</p>
    </div>
  );
};

export default Smurfs;
