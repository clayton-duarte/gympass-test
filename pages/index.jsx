import React, { PureComponent as Component } from 'react';
import { func, objectOf, any } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';

import Page from '../src/components/pageWrapper';
import { getRepos } from '../src/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.getRepos(this.state.user);
    };
  }

  componentDidMount() {
    if (this.props.store.user) Router.push('/repos');
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <span>Informe um usuário: </span>
          <input value={this.state.user} onChange={e => this.setState({ user: e.target.value })} />
          <button onClick={this.onSubmit}>GET</button>
        </fieldset>
      </form>
    );
  }
}

Home.title = 'GitHub - Busca de Repositórios';

Home.propTypes = {
  store: objectOf(any).isRequired,
  getRepos: func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ getRepos }, dispatch);
export default Page(connect(state => state, mapDispatchToProps)(Home));
