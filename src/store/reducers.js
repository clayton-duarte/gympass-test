// REDUCER

import { combineReducers } from 'redux';
import { GET_REPOS, GET_COMMITS } from '../actions';

const store = (state = {}, action) => {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, repos: action.payload.repos, user: action.payload.user };
    case GET_COMMITS:
      return { ...state, commits: action.payload.commits, repo: action.payload.repo };
    default:
      return state;
  }
};

export default combineReducers({ store });
