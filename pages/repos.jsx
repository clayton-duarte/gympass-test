import React, { PureComponent as Component, Fragment } from 'react';
import { func, objectOf, any } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Page from '../src/components/pageWrapper';
import Loader from '../src/components/loader';
import Header from '../src/components/header';
import Card from '../src/components/card';
import { getCommits } from '../src/actions';

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getCommits = repo => this.props.getCommits(repo);
  }

  render() {
    if (this.props.store.repos) {
      return (
        <Fragment>
          <Header>{this.props.store.user}</Header>
          {
          this.props.store.repos.map(repo => (
            <Card key={Math.random()} onClick={() => this.getCommits(repo.name)}>{repo.name}</Card>
          ))
        }
        </Fragment>
      );
    }
    return <Loader />;
  }
}

Repos.title = 'GitHub - Repositórios';

Repos.propTypes = {
  store: objectOf(any).isRequired,
  getCommits: func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ getCommits }, dispatch);
export default Page(connect(state => state, mapDispatchToProps)(Repos));
