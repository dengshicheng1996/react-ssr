import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

const Home = props => {
  const { name, list, getHome } = props;

  useEffect(() => {
    !list.length && getHome()
  }, []);
  return (
    <div>
      <div>{name}</div>
      {
        // list.map(item => (
        //   <div key={item.id}>{item.title}</div>
        // ))
      }
    </div>
  )
};

const mapStateToProps = state => {
  console.log(state)
  const { name, list } = state.home;
  return {
    name,
    list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHome: () => {
      dispatch(getHomeList())
    }
  }
}

Home.loadData = ({ dispatch }) => {
  return dispatch(getHomeList())
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);