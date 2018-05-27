import Router from 'next/router';
import Axios from 'axios';

export const GET_REPOS = 'GET_REPOS';
export const GET_COMMITS = 'GET_COMMITS';

export const getRepos = user => async (dispatch) => {
  Router.push(`/repos?${user}`);
  Axios.get(`https://api.github.com/users/${user}/repos`)
    .then((res) => {
      const data = {
        repos: res.data,
        user,
      };
      dispatch({
        type: GET_REPOS,
        payload: data,
      });
    })
    .catch(err => console.log(err));
};

export const getCommits = repo => async (dispatch, getState) => {
  Router.push(`/commits?${repo}`);
  const { user } = getState().store;
  const commits = {};
  Axios.get(`https://api.github.com/repos/${user}/${repo}/commits`)
    .then((res) => {
      commits[repo] = res.data;
      dispatch({
        type: GET_COMMITS,
        payload: commits,
      });
    })
    .catch(err => console.log(err));
};
