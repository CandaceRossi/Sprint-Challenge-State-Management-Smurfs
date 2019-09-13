import axios from "axios";
import { dispatch } from "react-redux";
export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADD_FEATURE = "ADD_FEATURE";

export const getSmurfs = state => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("see this response", res);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: `${err.response.message} code: ${err.response.code}`
      });
    });
};
export const addFeatureAC = feature => {
  return { type: ADD_FEATURE, payload: feature };
};
