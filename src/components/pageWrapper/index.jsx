import React, { PureComponent as Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';

import store from '../../store';

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
          <Provider store={store}>
            <Page />
          </Provider>
        </Fragment>
      );
    }
  }
);