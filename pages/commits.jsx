import React, { PureComponent as Component, Fragment } from 'react';
import { objectOf, any } from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import moment from 'moment';

import Page from '../src/components/pageWrapper';
import Loader from '../src/components/loader';
import Header from '../src/components/header';
import Card from '../src/components/card';

const ShaInfo = styled.p`
font-size: .65rem;
color: #909090;
margin: 0;
`;

const Message = styled.h3`
font-size: 1rem;
margin: .5rem 0;
`;

const Info = styled.cite`
font-size: .65rem;
color: #909090;
margin: 0;
span {
  font-size: .85rem;
  color: #222;
}
`;

class Commits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toDate = date => moment(date).format('LLL');
  }

  render() {
    if (this.props.store.repo) {
      return (
        <Fragment>
          <Header>{this.props.store.repo}</Header>
          <br />
          {
            this.props.store.commits[this.props.store.repo].map(commit => (
              <Card key={Math.random()}>
                <ShaInfo>{commit.sha}</ShaInfo>
                <Message>{commit.commit.message}</Message>
                <Info>commited by <span>{commit.commit.author.name}</span></Info>&nbsp;
                <Info>in <span>{this.toDate(commit.commit.author.date)}</span></Info>
              </Card>
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
