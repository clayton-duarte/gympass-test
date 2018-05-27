import React, { PureComponent as Component, Fragment } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Head from 'next/head';

import store from '../../store';

const PageWrapper = styled.main`
* {box-sizing: border-box;}
box-sizing: border-box;
min-height: 100vh;
background: #666;
font-size: 16px;
padding: .5rem;
color: #222;
`;

export default Page => (
  class Template extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <Fragment>
          <Head>
            <title>{Page.title}</title>
          </Head>
          <PageWrapper>
            <Provider store={store}>
              <Page />
            </Provider>
          </PageWrapper>
        </Fragment>
      );
    }
  }
);
