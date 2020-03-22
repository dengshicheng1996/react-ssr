import React from 'react';
import { renderRoutes } from 'react-router-config';
import Haader from './components/Header/';
import { getHeaderInfo } from './components/Header/store/actions';


const App = props => {
  return (
    <div>
      <Haader />
      {renderRoutes(props.route.routes)}
    </div>
  );
}

App.loadData = store => {
  return store.dispatch(getHeaderInfo())
}

export default App;
