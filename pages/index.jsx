import React, { PureComponent as Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Page from '../src/components/pageWrapper';
import Button from '../src/components/button';
import Input from '../src/components/input';
import { getRepos } from '../src/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Input value={this.state.user} onChange={e => this.setState({ user: e.target.value })}>
          <Button onClick={() => this.props.getRepos(this.state.user)} />
        </Input>
        <ol>Exemplos
          <li><button onClick={() => this.props.getRepos('clayton-duarte')}>clayton-duarte</button></li>
        </ol>
      </Fragment>
    );
  }
}

Home.title = 'GitHub - Busca de Repositórios';

Home.propTypes = {
  getRepos: func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ getRepos }, dispatch);
export default Page(connect(state => state, mapDispatchToProps)(Home));
