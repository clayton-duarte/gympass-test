import React, { PureComponent as Component, Fragment } from 'react';
import { func, objectOf, any } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';

import Page from '../src/components/pageWrapper';
import { getRepos, getCommits } from '../src/actions';

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getCommits = (repo) => {
      this.props.getCommits(repo);
      Router.push(`/commits?${repo}`);
    };
  }

  componentDidMount() {
    if (this.props.store.user) this.props.getRepos(this.props.store.user);
    else Router.push('/');
  }

  render() {
    if (this.props.store.repos) {
      return (
        <Fragment>
        loaded {this.props.store.user} repos!
          <br />
          {
          this.props.store.repos.map(repo => (
            <p><button onClick={() => this.getCommits(repo.name)}>{repo.name}</button></p>
          ))
        }
        </Fragment>
      );
    }
    return <Fragment>loading {this.props.store.user} repos...</Fragment>;
  }
}

Repos.title = 'GitHub - Repositórios';

Repos.propTypes = {
  store: objectOf(any).isRequired,
  getCommits: func.isRequired,
  getRepos: func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ getRepos, getCommits }, dispatch);
export default Page(connect(state => state, mapDispatchToProps)(Repos));
