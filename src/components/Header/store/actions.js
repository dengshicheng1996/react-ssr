export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json?secret=PP87ANTIPIRATE')
    .then(res => {
      dispatch({
        type: 'change_login_state',
        value: res.data.data.login
      })
    }) 
  }
};

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login.json?secret=PP87ANTIPIRATE')
    .then(res => 
      dispatch({
        type: 'change_login_state',
        value: res.data.data.login
      })
    ) 
  }
};

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json')
    .then(res => 
      dispatch({
        type: 'change_login_state',
        value: !res.data.data.logout || false
      })
    ) 
  }
};