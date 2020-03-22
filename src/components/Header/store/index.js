const defaultState = {
  isLogin: true,
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'change_login_state':
      return {
        isLogin: action.value
      }
    default: 
      return state;
  }
}

export default reducer;