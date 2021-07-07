import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADD_FEATURE,
  ADD_FEATURE_SUCCESS,
  ADD_FEATURE_FAILURE
} from "./actions";

export const initialState = {
  smurfs: [],
  addingSmurf: false,
  isFetching: false,
  error: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      console.log(action.payload);
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        smurfs: action.payload
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case ADD_FEATURE:
      return {
        ...state,
        isFetching: false,
        addingSmurf: true,
        error: null,
        smurfs: []
      };
    case ADD_FEATURE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case ADD_FEATURE_FAILURE:
      return {
        ...state,
        smurfs: [],
        isFetching: false,
        addingSmurf: false,
        error: action.payload
      };

    default:
      return state;
  }
};
