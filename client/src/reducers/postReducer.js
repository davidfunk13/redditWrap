import actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import postSorting from "../utils/postSorting";

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS: {
      return action.data;
    }
    case actionTypes.POSTS_TO_PROPS: {
      return postSorting(action.data);
    }

    default: {
      return state;
    }
  }
}
