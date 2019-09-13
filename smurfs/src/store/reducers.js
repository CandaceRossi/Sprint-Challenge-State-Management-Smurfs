import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADD_FEATURE
} from "../store/actions";

const initialState = {
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
        name: action.payload.name,
        age: action.payload.age,
        height: action.payload.height,
        id: action.payload.id
      };

    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        name: action.payload.name,
        age: action.payload.age,
        height: action.payload.height,
        id: action.payload.id,
        error: ""
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
        smurfs: [...state.name, ...state.age, ...state.height, action.payload]
      };

    default:
      return state;
  }
};
