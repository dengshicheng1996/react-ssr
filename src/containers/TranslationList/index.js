import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { geTranslationList } from './store/actions';

const TranslationList = props => {
  const { list, isLogin, getTranslation } = props;
  useEffect(() => {
    !list.length && getTranslation();
  }, []);

  const getlist = () => {
    return list.map(item => <div key={item.id}>{item.title}</div>)
  } 
  return isLogin ? <div>{getlist()}</div> : <Redirect to="/" />
};

const mapStateToProps = state => {
  const { list } = state.translation;
  const { isLogin } = state.header;
  return {
    list: list || [],
    isLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTranslation: () => {
      dispatch(geTranslationList())
    }
  }
}

TranslationList.loadData = ({ dispatch }) => {
  return dispatch(geTranslationList())
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslationList);