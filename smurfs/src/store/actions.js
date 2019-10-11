import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("action res", res);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: err.response
      });
    });
};

export const ADD_FEATURE = "ADD_FEATURE";
export const ADD_FEATURE_SUCCESS = "ADD_FEATURE_SUCCESS";
export const ADD_FEATURE_FAILURE = "ADD_FEATURE_FAILURE";

export const addFeatureAC = smurf => dispatch => {
  dispatch({ type: ADD_FEATURE });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log("action add smurf", res);
      return dispatch({ type: ADD_FEATURE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      return dispatch({
        type: ADD_FEATURE_FAILURE,
        payload: err.response
      });
    });
};
