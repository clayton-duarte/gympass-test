import React, { PureComponent as Component } from 'react';
import { func, objectOf, any } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';

import Page from '../src/components/pageWrapper';
import { saveUser } from '../src/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = () => this.props.saveUser(this.state.user);
  }
  render() {
    if (this.props.store.user) Router.push('/repos');
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <span htmlFor="user">Informe um usuário: </span>
          <input id="user" value={this.state.user} onChange={e => this.setState({ user: e.target.value })} />
        </fieldset>
      </form>
    );
  }
}

Home.title = 'GitHub - Busca de Repositórios';

Home.propTypes = {
  store: objectOf(any).isRequired,
  saveUser: func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ saveUser }, dispatch);
export default Page(connect(state => state, mapDispatchToProps)(Home));
