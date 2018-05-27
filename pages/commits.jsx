import React, { PureComponent as Component, Fragment } from 'react';
import { objectOf, any } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';

import Page from '../src/components/pageWrapper';

class Commits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setRepoInfo = query => this.setState({ repo: query.split('?')[1] });
  }

  componentDidMount() {
    const query = window.location.search;
    if (query && this.props.store.user) this.setRepoInfo(window.location.search);
    else Router.push('/repos');
  }

  render() {
    if (this.props.store.commits) {
      return (
        <Fragment>
        loaded {this.state.repo} commits!
          <br />
          {
            this.props.store.commits[this.state.repo].map(commit => (
              <p key={Math.random()}>{commit.sha}</p>
            ))
          }
        </Fragment>
      );
    }
    return <Fragment>loading {this.state.repo} commits...</Fragment>;
  }
}

Commits.title = 'GitHub - Commits no Repositório';

Commits.propTypes = {
  store: objectOf(any).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default Page(connect(state => state, mapDispatchToProps)(Commits));
