import axios from "axios";
import actionTypes from "./actionTypes";

export const getPostsSuccess = data => {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    data
  };
};

export const getPostsFailure = () => {
  return {
    type: actionTypes.GET_POSTS_FAILURE
  };
};

export const postsToProps = data => {
  // console.log(data)
  return {
    type: actionTypes.POSTS_TO_PROPS,
    data
  };
};

export const getPosts = searchQuery => {
  return function(dispatch) {
    console.log(searchQuery);
    axios
      .get("/api/snoo/" + searchQuery)
      .then(res => {
        let response = res.data;
        console.log(response);
        dispatch(getPostsSuccess(res.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(getPostsFailure());
      });
  };
};
