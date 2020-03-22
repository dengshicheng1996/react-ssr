export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    ///\http://47.95.113.63/ssr/
    return axiosInstance.get('/api/news.json')
    .then(res => {
      dispatch({
        type: 'change_home_list',
        list: res.data.data || []
      })
    })
  }
}