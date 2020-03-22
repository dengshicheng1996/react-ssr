export const geTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    ///\http://47.95.113.63/ssr/
    return axiosInstance.get('/api/translations.json')
    .then(res => {
      dispatch({
        type: 'change_translations_list',
        list: res.data.data || []
      })
    }) 
  }
}