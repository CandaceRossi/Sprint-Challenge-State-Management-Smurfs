import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADD_FEATURE
} from "../store/actions";

export const initialState = {
  smurfs: [],
  isFetching: false,
  error: null
};
export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetching: true
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
        ...state
      };

    default:
      return state;
  }
};
