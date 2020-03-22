import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import HomeReducer from '../containers/Home/store';
import HeaderReducer from '../components/Header/store/';
import TranslationReducer from '../containers/TranslationList/store/';
import { clientAxios, serverAxios } from '../utils';

const reducer = combineReducers({
  home: HomeReducer,
  header: HeaderReducer,
  translation: TranslationReducer
});

const getClientStore = () => {
  // 脱水
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}

const getServerStore = (req) => {  
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}

export { getClientStore, getServerStore };
