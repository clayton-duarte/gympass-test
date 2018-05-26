import Axios from 'axios';

export const SAVE_USER = 'SAVE_USER';
export const GET_REPOS = 'GET_REPOS';
export const GET_COMMITS = 'GET_COMMITS';

export const saveUser = user => async (dispatch) => {
  dispatch({
    type: SAVE_USER,
    payload: user,
  });
};

export const getRepos = user => async (dispatch) => {
  Axios.get(`https://api.github.com/users/${user}/repos`)
    .then((res) => {
      dispatch({
        type: GET_REPOS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

export const getCommits = repo => async (dispatch, getState) => {
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
