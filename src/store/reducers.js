// REDUCER

import { combineReducers } from 'redux';
import { GET_REPOS, SAVE_USER, GET_COMMITS } from '../actions';

const store = (state = {}, action) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload };
    case GET_REPOS:
      return { ...state, repos: action.payload };
    case GET_COMMITS:
      return { ...state, commits: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ store });
