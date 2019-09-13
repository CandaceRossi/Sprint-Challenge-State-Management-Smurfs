import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADD_FEATURE
} from "../store/actions";

export const initialState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ]
};
export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        smurfs: [
          {
            name: action.payload.name,
            age: action.payload.age,
            height: action.payload.height,
            id: action.payload.id
          }
        ]
      };

    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfs: [
          {
            name: action.payload,
            age: action.payload,
            height: action.payload,
            id: action.payload
          }
        ]
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: ""
      };

    case ADD_FEATURE:
      return {
        ...state,
        smurfs: [
          {
            name: action.payload,
            age: action.payload,
            height: action.payload,
            id: action.payload
          }
        ]
      };

    default:
      return state;
  }
};
