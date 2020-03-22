import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from './store/actions';

const Header = props => {
  const { isLogin, handleLogin, handleLogout } = props;

  return (
    <div>
      <Link to='/'>首页</Link>
      <br/>
      {isLogin ? (<React.Fragment>
            <Link to='/translation'>翻译列表</Link>
            <br/>
            <div onClick={handleLogout}>退出</div>
          </React.Fragment>
        ) : <div onClick={handleLogin}>登陆</div>
      }
    </div>
  )
};

const mapStateToProps = state =>  ({
  isLogin: state.header.isLogin
});

const mapDispatchToProps = dispatch => ({
  handleLogin() {
    dispatch(login())
  },
  handleLogout() {
    dispatch(logout())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);