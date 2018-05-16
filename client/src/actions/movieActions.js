import axios from 'axios';
import actionTypes from './actionTypes';

export const getMoviesSuccess = data => {
  return {
    type: actionTypes.GET_MOVIES_SUCCESS,
    data,
  };
};

export const getMoviesFailure = () => {
  return {
    type: actionTypes.GET_MOVIES_FAILURE,
  };
};

export const devinIsHavingFun = () => {
  return {
    type: actionTypes.DEVIN_FUN,
  };
};

// export const retrieveMovies = () => {
//   return function(dispatch) {
//     const API_KEY = 'trilogy';

//     dispatch(devinIsHavingFun());

//     axios
//       .get(`http://www.omdbapi.com?apikey=${API_KEY}&s=frozen`)
//       .then(data => {
//         dispatch(getMoviesSuccess(data.data.Search));
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch(getMoviesFailure());
//       });
//   };
// };
