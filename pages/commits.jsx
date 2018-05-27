import React, { PureComponent as Component, Fragment } from 'react';
import { objectOf, any } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Page from '../src/components/pageWrapper';
import Loader from '../src/components/loader';

class Commits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.store.repo) {
      return (
        <Fragment>
        loaded {this.props.store.repo} commits!
          <br />
          {
            this.props.store.commits[this.props.store.repo].map(commit => (
              <p key={Math.random()}>{commit.sha}</p>
            ))
          }
        </Fragment>
      );
    }
    return <Loader />;
  }
}

Commits.title = 'GitHub - Commits no Repositório';

Commits.propTypes = {
  store: objectOf(any).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default Page(connect(state => state, mapDispatchToProps)(Commits));
