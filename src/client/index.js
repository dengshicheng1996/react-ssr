import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getClientStore } from '../store/';
import { renderRoutes } from 'react-router-config';
import Routes from '../routes';

const ClientApp = ()=> (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <React.Fragment>{renderRoutes(Routes)}</React.Fragment>
    </BrowserRouter>
  </Provider>
)

ReactDom.hydrate(<ClientApp />, document.getElementById('root'));